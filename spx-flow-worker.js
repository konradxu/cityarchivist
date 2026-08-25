// Pre-Market Flow Worker
// Runs on a Cloudflare Cron trigger at ~15:15 Berlin time (Mon-Fri),
// pulls a bundle of free public market data, asks Claude to synthesize
// an S&P 500 pre-market outlook, and caches the result in KV.
//
// Endpoints:
//   GET /today       → today's cached analysis (or null)
//   GET /generate    → force-regenerate (idempotent within the same UTC day
//                      unless ?force=1). CORS-open.
//
// Bindings (set in wrangler.toml + `wrangler secret put`):
//   FLOW_CACHE           KV namespace
//   ANTHROPIC_API_KEY    secret
//   MARKETAUX_KEY        secret

const CLAUDE_MODEL = "claude-haiku-4-5-20251001";
const YAHOO_UA = "Mozilla/5.0 (compatible; CityArchivist/1.0)";

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (req.method === "OPTIONS") return new Response(null, { headers: cors() });

    try {
      if (url.pathname === "/today")    return json(await getToday(env), 200);
      if (url.pathname === "/generate") return json(await generate(env, url.searchParams.get("force")==="1"), 200);
      return json({ ok: true, endpoints: ["/today", "/generate?force=1"] }, 200);
    } catch (e) {
      return json({ error: String(e && e.message || e) }, 500);
    }
  },

  async scheduled(event, env, ctx) {
    // Cron fires at 13:15 UTC and 14:15 UTC on weekdays.
    // Only one of the two matches "15:15 Europe/Berlin" for a given day
    // (depending on DST). Skip the wrong one.
    if (!isNowBerlin(15, 15, 10)) return;
    ctx.waitUntil(generate(env, true).catch(err => console.log("cron failed:", err)));
  },
};

// ---------------- Public handlers ----------------

async function getToday(env) {
  const key = flowKey();
  const raw = await env.FLOW_CACHE.get(key);
  return { date: berlinDateStr(), data: raw ? JSON.parse(raw) : null };
}

async function generate(env, force) {
  const key = flowKey();
  if (!force) {
    const existing = await env.FLOW_CACHE.get(key);
    if (existing) return { cached: true, date: berlinDateStr(), data: JSON.parse(existing) };
  }
  const facts = await collectData(env);
  const analysis = await askClaude(facts, env);
  const out = { generatedAt: Date.now(), facts, analysis };
  // Expire after 30 hours — safely covers "today + a bit"
  await env.FLOW_CACHE.put(key, JSON.stringify(out), { expirationTtl: 30 * 3600 });
  return { cached: false, date: berlinDateStr(), data: out };
}

// ---------------- Data collection ----------------

async function collectData(env) {
  const [futures, vix, tnx, dxy, spy, spxIdx, sectors, fg, reddit, stocktwits, news, gex] = await Promise.all([
    fetchYahoo("ES=F", "5d", "15m"),   // SPX futures, incl. pre-market
    fetchYahoo("^VIX", "10d", "1d"),
    fetchYahoo("^TNX", "10d", "1d"),
    fetchYahoo("DX-Y.NYB", "10d", "1d"),
    fetchYahoo("SPY", "10d", "1d"),
    fetchYahoo("^GSPC", "10d", "1d"),
    fetchSectors(),
    fetchCNNFearGreed(),
    fetchRedditWSB(),
    fetchStocktwitsTrending(),
    env.MARKETAUX_KEY ? fetchMarketauxNews(env.MARKETAUX_KEY) : { note: "no MARKETAUX_KEY set" },
    computeGEX("SPY"),
  ]);

  // Extract explicit anchors so Claude cannot misread them.
  const anchors = extractAnchors({ spxIdx, spy, futures });

  return {
    asOf: new Date().toISOString(),
    berlin: new Intl.DateTimeFormat("de-DE",{timeZone:"Europe/Berlin",hour:"2-digit",minute:"2-digit",day:"2-digit",month:"2-digit"}).format(new Date()),
    anchors, gex,
    futures, vix, tnx, dxy, spy, spxIdx, sectors, fearGreed: fg, reddit, stocktwits, news,
  };
}

function extractAnchors({ spxIdx, spy, futures }) {
  const lastValid = (arr) => {
    if (!arr) return null;
    for (let i = arr.length - 1; i >= 0; i--) if (arr[i] != null) return arr[i];
    return null;
  };
  const spxPrev  = lastValid(spxIdx?.close);
  const spxHigh  = lastValid(spxIdx?.high);
  const spxLow   = lastValid(spxIdx?.low);
  const spyPrev  = lastValid(spy?.close);
  const futLast  = futures?.meta?.regularMarketPrice ?? lastValid(futures?.close);
  const futPrev  = futures?.meta?.previousClose;
  const futChgPct = (futLast && futPrev) ? ((futLast - futPrev) / futPrev) * 100 : null;
  return {
    spxPreviousClose: spxPrev,
    spxPreviousDayHigh: spxHigh,
    spxPreviousDayLow: spxLow,
    spyPreviousClose: spyPrev,
    esFuturesLast: futLast,
    esFuturesPrevClose: futPrev,
    esFuturesChangePct: futChgPct == null ? null : +futChgPct.toFixed(3),
    spxImpliedFromES: (futLast && spxPrev && futPrev)
      ? +(spxPrev * (1 + (futLast - futPrev)/futPrev)).toFixed(2)
      : null,
  };
}

async function fetchYahoo(symbol, range="5d", interval="1d") {
  const u = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=${range}&interval=${interval}&includePrePost=true`;
  try {
    const r = await fetch(u, { headers: { "user-agent": YAHOO_UA, accept: "application/json" }, cf: { cacheTtl: 60, cacheEverything: true } });
    if (!r.ok) return { symbol, error: "http " + r.status };
    const j = await r.json();
    const res = j?.chart?.result?.[0];
    if (!res) return { symbol, error: "no data" };
    const q = res.indicators?.quote?.[0] || {};
    const ts = res.timestamp || [];
    // Keep it slim: just the last ~30 points + meta
    const N = Math.min(ts.length, 30);
    const slice = (arr) => (arr || []).slice(-N).map(v => v==null ? null : Math.round(v*100)/100);
    return {
      symbol,
      meta: {
        regularMarketPrice:       res.meta?.regularMarketPrice,
        regularMarketDayHigh:     res.meta?.regularMarketDayHigh,
        regularMarketDayLow:      res.meta?.regularMarketDayLow,
        previousClose:            res.meta?.chartPreviousClose,
        regularMarketTime:        res.meta?.regularMarketTime,
      },
      timestamp: ts.slice(-N),
      open:  slice(q.open),
      high:  slice(q.high),
      low:   slice(q.low),
      close: slice(q.close),
    };
  } catch (e) {
    return { symbol, error: String(e && e.message || e) };
  }
}

async function fetchSectors() {
  const symbols = ["XLK","XLF","XLE","XLV","XLY","XLP","XLI","XLU","XLB","XLRE","XLC"];
  const results = await Promise.all(symbols.map(async s => {
    const d = await fetchYahoo(s, "2d", "1d");
    const c = d.close || [];
    const prev = c[c.length-2], last = c[c.length-1];
    return { symbol: s, last, prev, changePct: (prev && last) ? ((last-prev)/prev)*100 : null };
  }));
  return results;
}

async function fetchCNNFearGreed() {
  try {
    const r = await fetch("https://production.dataviz.cnn.io/index/fearandgreed/graphdata", {
      headers: { "user-agent": YAHOO_UA, accept: "application/json" },
      cf: { cacheTtl: 300, cacheEverything: true },
    });
    if (!r.ok) return { error: "http " + r.status };
    const j = await r.json();
    return {
      score: j?.fear_and_greed?.score,
      rating: j?.fear_and_greed?.rating,
      previousClose: j?.fear_and_greed?.previous_close,
      previous1Week: j?.fear_and_greed?.previous_1_week,
      previous1Month: j?.fear_and_greed?.previous_1_month,
    };
  } catch (e) { return { error: String(e && e.message || e) }; }
}

async function fetchRedditWSB() {
  try {
    const r = await fetch("https://www.reddit.com/r/wallstreetbets/hot.json?limit=15", {
      headers: { "user-agent": "CityArchivist/1.0 (contact: konradxu)" },
    });
    if (!r.ok) return { error: "http " + r.status };
    const j = await r.json();
    const posts = (j?.data?.children || []).slice(0, 15).map(x => ({
      title: x.data?.title, score: x.data?.score, comments: x.data?.num_comments, flair: x.data?.link_flair_text,
    }));
    return { topHot: posts };
  } catch (e) { return { error: String(e && e.message || e) }; }
}

async function fetchStocktwitsTrending() {
  try {
    const r = await fetch("https://api.stocktwits.com/api/2/trending/symbols.json?limit=20", {
      headers: { "user-agent": "CityArchivist/1.0" },
    });
    if (!r.ok) return { error: "http " + r.status };
    const j = await r.json();
    return { symbols: (j?.symbols || []).slice(0, 20).map(s => ({ symbol: s.symbol, title: s.title, watchers: s.watchlist_count })) };
  } catch (e) { return { error: String(e && e.message || e) }; }
}

async function fetchMarketauxNews(key) {
  try {
    const u = `https://api.marketaux.com/v1/news/all?symbols=SPY,QQQ,DIA&filter_entities=true&language=en&limit=12&api_token=${key}`;
    const r = await fetch(u, { headers: { accept: "application/json" } });
    if (!r.ok) return { error: "http " + r.status };
    const j = await r.json();
    return { articles: (j?.data || []).slice(0, 12).map(a => ({
      title: a.title, source: a.source, publishedAt: a.published_at, snippet: a.snippet,
      sentiment: a.entities?.[0]?.sentiment_score,
    })) };
  } catch (e) { return { error: String(e && e.message || e) }; }
}

// ---------------- GEX (Gamma Exposure via CBOE SPX options) ----------------
// CBOE delivers pre-computed greeks + OI in one 15-min-delayed JSON file.
// Dealer convention: short calls, long puts (retail owns calls, writes puts).
//   dealer_net_gex_per_strike = call_OI*gamma*S²*100/100 - put_OI*gamma*S²*100/100
// Reported in $ / 1% move (divide by 1e6 for $M).

async function computeGEX_CBOE() {
  try {
    const r = await fetch("https://cdn.cboe.com/api/global/delayed_quotes/options/_SPX.json", {
      headers: { "user-agent": YAHOO_UA, accept: "application/json" },
      cf: { cacheTtl: 600, cacheEverything: true },
    });
    if (!r.ok) return { error: "cboe http " + r.status };
    const j = await r.json();
    const opts = j?.data?.options || [];
    const spot = j?.data?.current_price ?? j?.data?.close;
    if (!opts.length || !spot) return { error: "cboe missing fields" };

    // Only near-term expirations really matter for today's tape → next 21 days.
    const cutoff = Date.now() + 21 * 86400 * 1000;

    const perStrike = new Map();
    let totalCallGex = 0, totalPutGex = 0, totalCallOI = 0, totalPutOI = 0, kept = 0;

    for (const o of opts) {
      // Parse symbol: SPX{YY}{MM}{DD}{C|P}{strike*1000, 8-digit}
      const m = /^SPXW?(\d{2})(\d{2})(\d{2})([CP])(\d{8})$/.exec(o.option || "");
      if (!m) continue;
      const expTs = Date.UTC(2000 + +m[1], +m[2]-1, +m[3]);
      if (expTs > cutoff) continue;
      const type = m[4], K = +m[5] / 1000;
      const OI = o.open_interest || 0, g = o.gamma || 0;
      if (!OI || OI < 50 || !g) continue;
      // GEX dollar exposure per 1% underlying move:
      //   contracts * gamma * spot * 100 (multiplier) * (spot * 0.01)
      //   = OI * g * spot^2 * 1.0
      const gex = OI * g * spot * spot;
      const cur = perStrike.get(K) || { callOI:0, putOI:0, gexCall:0, gexPut:0 };
      if (type === "C") { cur.callOI += OI; cur.gexCall += gex; totalCallGex += gex; totalCallOI += OI; }
      else              { cur.putOI  += OI; cur.gexPut  += gex; totalPutGex  += gex; totalPutOI  += OI; }
      perStrike.set(K, cur);
      kept++;
    }
    if (!kept) return { error: "no near-term strikes with OI" };

    const arr = Array.from(perStrike.entries()).map(([K, v]) => ({
      strike: K,
      callOI: v.callOI, putOI: v.putOI,
      net: v.gexCall - v.gexPut,
      total: v.gexCall + v.gexPut,
    })).sort((a,b) => a.strike - b.strike);

    // Gamma flip: cumulative net GEX (below strike) crosses zero
    let cumulative = 0, flip = null, prev;
    for (const s of arr) {
      prev = cumulative;
      cumulative += s.net;
      if ((prev >= 0 && cumulative < 0) || (prev < 0 && cumulative >= 0)) flip = s.strike;
    }

    // Magnets ±3% around spot, ranked by |net GEX|
    const nearATM = arr.filter(s => Math.abs(s.strike - spot) < spot * 0.03);
    const magnets = nearATM
      .slice()
      .sort((a,b) => Math.abs(b.net) - Math.abs(a.net))
      .slice(0, 8)
      .map(s => ({
        strike: +s.strike.toFixed(2),
        callOI: s.callOI, putOI: s.putOI,
        netGexMn: +(s.net / 1e6).toFixed(2),
      }));

    const callWall = arr.filter(s => s.strike > spot).reduce((a,b)=> a.callOI > b.callOI ? a : b, {strike:0, callOI:0});
    const putWall  = arr.filter(s => s.strike < spot).reduce((a,b)=> a.putOI  > b.putOI  ? a : b, {strike:0, putOI:0});

    const totalNet = totalCallGex - totalPutGex;

    return {
      source: "CBOE _SPX.json (15-min delayed)",
      spotSPX: +spot.toFixed(2),
      strikesConsidered: arr.length,
      totalNetGexMn: +(totalNet / 1e6).toFixed(2),
      regime: totalNet > 0
        ? "positive gamma (dealer long gamma → mean-reverting / pinning)"
        : "negative gamma (dealer short gamma → trend-amplifying / breakout-prone)",
      gammaFlipSPX: flip != null ? +flip.toFixed(2) : null,
      callWallSPX:  callWall.strike || null,
      callWallCallOI: callWall.callOI || null,
      putWallSPX:   putWall.strike  || null,
      putWallPutOI: putWall.putOI  || null,
      magnetsNearATM: magnets,
      totalCallOI, totalPutOI,
      putCallRatioOI: totalCallOI ? +(totalPutOI/totalCallOI).toFixed(3) : null,
    };
  } catch (e) {
    return { error: String(e && e.message || e) };
  }
}

// Legacy stub kept for the old call site
async function computeGEX() { return computeGEX_CBOE(); }

// (older Black-Scholes helper — no longer used since CBOE ships greeks directly)
async function computeGEX_BS(symbol = "SPY") {
  try {
    const meta = await fetch(`https://query1.finance.yahoo.com/v7/finance/options/${symbol}`, {
      headers: { "user-agent": YAHOO_UA },
      cf: { cacheTtl: 300, cacheEverything: true },
    });
    if (!meta.ok) return { error: "options meta http " + meta.status };
    const mj = await meta.json();
    const res = mj.optionChain?.result?.[0];
    if (!res) return { error: "no option chain" };
    const spot = res.quote?.regularMarketPrice;
    const dates = (res.expirationDates || []).slice(0, 3);   // nearest 3 expiries
    if (!spot || !dates.length) return { error: "no spot/dates" };

    const chains = (await Promise.all(dates.map(async d => {
      const rr = await fetch(`https://query1.finance.yahoo.com/v7/finance/options/${symbol}?date=${d}`, {
        headers: { "user-agent": YAHOO_UA },
      });
      if (!rr.ok) return null;
      const jj = await rr.json();
      return jj.optionChain?.result?.[0]?.options?.[0];
    }))).filter(Boolean);

    const now = Date.now() / 1000;
    const perStrike = new Map();
    let totalCallGex = 0, totalPutGex = 0, totalCallOI = 0, totalPutOI = 0;

    for (const chain of chains) {
      const T = Math.max((chain.expirationDate - now) / (365 * 86400), 1/365/2);
      for (const c of (chain.calls || [])) {
        const K = c.strike, OI = c.openInterest || 0, iv = c.impliedVolatility;
        if (!OI || OI < 50 || !iv || iv <= 0) continue;
        const g = bsGamma(spot, K, T, 0.045, iv);
        const gex = OI * g * spot * spot * 100;
        totalCallGex += gex; totalCallOI += OI;
        const cur = perStrike.get(K) || { callOI:0, putOI:0, gexCall:0, gexPut:0 };
        cur.callOI += OI; cur.gexCall += gex;
        perStrike.set(K, cur);
      }
      for (const p of (chain.puts || [])) {
        const K = p.strike, OI = p.openInterest || 0, iv = p.impliedVolatility;
        if (!OI || OI < 50 || !iv || iv <= 0) continue;
        const g = bsGamma(spot, K, T, 0.045, iv);
        const gex = OI * g * spot * spot * 100;
        totalPutGex += gex; totalPutOI += OI;
        const cur = perStrike.get(K) || { callOI:0, putOI:0, gexCall:0, gexPut:0 };
        cur.putOI += OI; cur.gexPut += gex;
        perStrike.set(K, cur);
      }
    }

    // Dealer-net gamma per strike
    const arr = Array.from(perStrike.entries()).map(([K, v]) => ({
      strike: K,
      callOI: v.callOI, putOI: v.putOI,
      net: v.gexCall - v.gexPut,       // dealer convention
      total: v.gexCall + v.gexPut,
    })).sort((a,b)=>a.strike-b.strike);

    // Gamma flip: cumulative net GEX crosses zero (walking from lowest strike up)
    let cumulative = 0, flip = null, prev = 0;
    for (const s of arr) {
      prev = cumulative;
      cumulative += s.net;
      if ((prev >= 0 && cumulative < 0) || (prev < 0 && cumulative >= 0)) {
        flip = s.strike;
      }
    }

    // Near-ATM magnets: strikes within ±3% of spot, ranked by |net|
    const nearATM = arr.filter(s => Math.abs(s.strike - spot) < spot * 0.03);
    const magnets = nearATM
      .slice()
      .sort((a,b) => Math.abs(b.net) - Math.abs(a.net))
      .slice(0, 8)
      .map(s => ({
        strikeSPY: +s.strike.toFixed(2),
        strikeSPX: +(s.strike * 10).toFixed(2),
        callOI: s.callOI, putOI: s.putOI,
        netGexMn: +(s.net / 1e6).toFixed(2),
      }));

    // Highest call OI strike above spot = major resistance
    const callWall = arr.filter(s => s.strike > spot).reduce((a,b) => (a.callOI > b.callOI ? a : b), {strike:0, callOI:0});
    // Highest put OI strike below spot = major support
    const putWall  = arr.filter(s => s.strike < spot).reduce((a,b) => (a.putOI > b.putOI ? a : b), {strike:0, putOI:0});

    const totalNet = totalCallGex - totalPutGex;

    return {
      symbol,
      spotSPY: +spot.toFixed(2),
      spotSPXequivalent: +(spot * 10).toFixed(2),
      expirationsUsed: chains.length,
      totalNetGexMn: +(totalNet / 1e6).toFixed(2),
      regime: totalNet > 0 ? "positive gamma (mean-reverting / pinning)"
                            : "negative gamma (trend-amplifying / breakout-prone)",
      gammaFlipSPY: flip != null ? +flip.toFixed(2) : null,
      gammaFlipSPX: flip != null ? +(flip * 10).toFixed(2) : null,
      callWallSPY: callWall.strike || null,
      callWallSPX: callWall.strike ? +(callWall.strike * 10).toFixed(2) : null,
      putWallSPY:  putWall.strike || null,
      putWallSPX:  putWall.strike ? +(putWall.strike * 10).toFixed(2) : null,
      magnetsNearATM: magnets,
      totalCallOI, totalPutOI,
      putCallRatioOI: totalCallOI ? +(totalPutOI/totalCallOI).toFixed(3) : null,
    };
  } catch (e) {
    return { error: String(e && e.message || e) };
  }
}

function normalPdf(x) { return Math.exp(-x*x/2) / Math.sqrt(2*Math.PI); }
function bsGamma(S, K, T, r, sigma) {
  if (T <= 0 || sigma <= 0 || S <= 0 || K <= 0) return 0;
  const d1 = (Math.log(S/K) + (r + 0.5*sigma*sigma)*T) / (sigma*Math.sqrt(T));
  return normalPdf(d1) / (S*sigma*Math.sqrt(T));
}

// ---------------- Claude ----------------

async function askClaude(facts, env) {
  if (!env.ANTHROPIC_API_KEY) throw new Error("ANTHROPIC_API_KEY not set");

  const system = [
    "You are a disciplined pre-market analyst covering the US S&P 500 index (^GSPC / SPY / ES=F).",
    "Your job is to produce a FALSIFIABLE briefing — every prediction must be a specific number or a probability that can be scored against the actual close.",
    "You NEVER produce conditional prose like 'if X then Y'. You commit to numbers.",
    "",
    "HARD RULES:",
    "1. ANCHOR ALL PRICE NUMBERS to `facts.anchors`. In particular:",
    "   - Previous SPX regular close is `facts.anchors.spxPreviousClose`",
    "   - Previous SPX day high is `facts.anchors.spxPreviousDayHigh`",
    "   - Previous SPX day low is `facts.anchors.spxPreviousDayLow`",
    "   - Implied SPX open from ES-futures is `facts.anchors.spxImpliedFromES`",
    "   Never cite a price you cannot trace back to one of those anchors. Never round in a way that changes the anchor's integer part.",
    "2. USE `facts.gex` for structural levels:",
    "   - `gammaFlipSPX` = above it dealers are long gamma (pinning), below it short gamma (breakouts)",
    "   - `callWallSPX` = major upside resistance",
    "   - `putWallSPX`  = major downside support",
    "   - `magnetsNearATM` = strongest gravity strikes (SPX-equivalent)",
    "   - If `regime` is positive gamma, expect narrower range and pinning near the largest magnet.",
    "3. Output ranges must be realistic: a normal SPX day moves ±0.4–0.9%; extreme days ±1.5%. Do not output ranges wider than 2% without a specific catalyst justifying it.",
    "4. `direction` probabilities MUST sum to 100. Pick the split that reflects your true belief — not a hedge (e.g. 60/30/10, not 40/35/25).",
    "5. `pointEstimate` is your single best guess for today's regular close in SPX index points, with `plusMinus` half-width of your 60%-probability interval.",
    "",
    "OUTPUT: a single JSON object matching the schema. No markdown, no prose outside the JSON.",
    "LANGUAGE: All free-text fields in Simplified Chinese (简体中文). Keep ticker symbols, index names, technical acronyms (ES=F, ^GSPC, VIX, DXY, ETF, BPS, FOMC, GEX, OI, IV, etc.) in original form.",
    "IMPORTANT: keep the `bias` value as one of the English literals below (they are enum keys, the frontend translates them).",
    "",
    "SCHEMA:",
    "{",
    '  "bias": "bullish" | "leicht bullish" | "neutral" | "leicht bearish" | "bearish",',
    '  "confidence": 0-100,',
    '  "direction": {"up": 0-100, "sideways": 0-100, "down": 0-100},   // MUST sum to 100',
    '  "pointEstimate": {"close": number, "plusMinus": number, "probability": 0-100},',
    '  "expectedRangeToday": {"low": number, "high": number},           // 90%-probability range in SPX pts',
    '  "priceTargetClose": number,',
    '  "expectedMoveVsPrevClose": {"absolute": number, "percent": number},',
    '  "gexNotes": "1-2 concise Chinese sentences on how GEX regime + walls shape today\'s tape",',
    '  "summary": "1-2 sentence Chinese headline; must reference specific numbers, not hedges",',
    '  "keyFactors": ["3-5 concrete reasons the bias is what it is — cite anchor numbers"],',
    '  "risks": ["2-4 things that would invalidate the point estimate — cite specific levels"],',
    '  "catalysts": ["scheduled events that could move the market today"],',
    '  "signals": {',
    '    "esFutures": "one-line ES=F pre-market description",',
    '    "vix": "one-line VIX regime",',
    '    "yields": "one-line 10Y / DXY dynamic",',
    '    "sectors": "one-line sector rotation",',
    '    "sentiment": "one-line retail sentiment (Reddit + StockTwits + F&G)",',
    '    "gex": "one-line GEX regime + key wall levels"',
    "  }",
    "}",
  ].join("\n");

  const user = [
    "市场数据包 (JSON, 来自公开数据源):",
    "```json",
    JSON.stringify(facts, null, 2).slice(0, 60_000), // hard cap for prompt size
    "```",
    "",
    "请分析当前 S&P 500 盘前情况，并按上述 JSON schema 返回结果。",
    "priceTargetClose 和 expectedRangeToday 请以 facts.spy 或 facts.futures 的最近常规收盘价为基准。",
    "如数据缺失或相互矛盾，请相应降低 confidence 并在 risks 中说明。",
    "所有文字字段（summary、keyFactors、risks、catalysts、signals）请使用简体中文。bias 保持为英文枚举值。",
  ].join("\n");

  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: CLAUDE_MODEL,
      max_tokens: 4096,
      system,
      messages: [{ role: "user", content: user }],
    }),
  });

  if (!r.ok) {
    const t = await r.text();
    throw new Error(`Claude API ${r.status}: ${t.slice(0, 500)}`);
  }
  const j = await r.json();
  // Find the text block (extended-thinking models emit a thinking block first)
  const textBlock = (j.content || []).find(b => b.type === "text");
  const text = textBlock?.text || "";
  const parsed = tryParseJSON(text);
  return {
    model: CLAUDE_MODEL,
    usage: j.usage,
    raw: parsed ? null : text,      // if we couldn't parse, keep raw for debugging
    ...(parsed || {}),
  };
}

function tryParseJSON(s) {
  // Claude might wrap in ```json fences even when told not to
  const m = s.match(/```(?:json)?\s*([\s\S]*?)```/);
  const candidate = (m ? m[1] : s).trim();
  try { return JSON.parse(candidate); } catch { return null; }
}

// ---------------- Time helpers ----------------

function berlinDateStr(d = new Date()) {
  // YYYY-MM-DD in Europe/Berlin
  const p = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Berlin", year:"numeric", month:"2-digit", day:"2-digit" }).format(d);
  return p; // already YYYY-MM-DD
}

function flowKey(d = new Date()) { return "flow:" + berlinDateStr(d); }

function isNowBerlin(hour, minute, toleranceMin = 5) {
  const s = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Berlin", hour:"2-digit", minute:"2-digit", hour12:false }).format(new Date());
  const [h, m] = s.split(":").map(Number);
  const nowMin = h*60 + m;
  const targetMin = hour*60 + minute;
  return Math.abs(nowMin - targetMin) <= toleranceMin;
}

// ---------------- HTTP helpers ----------------

function cors() {
  return {
    "access-control-allow-origin": "*",
    "access-control-allow-methods": "GET, OPTIONS",
    "access-control-allow-headers": "content-type",
  };
}
function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store", ...cors() },
  });
}
