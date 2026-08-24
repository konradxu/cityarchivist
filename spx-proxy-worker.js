// Tiny Cloudflare Worker that proxies Yahoo Finance chart data
// so that us500.html can fetch ^GSPC (and friends) without CORS issues.
//
// Usage from the browser:
//   fetch("https://<your-worker>.workers.dev/?symbol=^GSPC&range=3mo&interval=1d")
//
// Whitelist keeps it locked to a handful of index symbols so the worker
// can't be abused as a general-purpose open proxy.

const ALLOWED_SYMBOLS = new Set([
  "^GSPC",  // S&P 500
  "^DJI",   // Dow Jones
  "^IXIC",  // Nasdaq Composite
  "^NDX",   // Nasdaq 100
  "^VIX",   // Volatility
  "^RUT",   // Russell 2000
]);

const ALLOWED_RANGES   = new Set(["5d","1mo","3mo","6mo","1y","2y","5y","ytd","max"]);
const ALLOWED_INTERVAL = new Set(["1d","1wk","1mo"]);

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: cors() });
    }

    const symbol   = url.searchParams.get("symbol")   ?? "^GSPC";
    const range    = url.searchParams.get("range")    ?? "3mo";
    const interval = url.searchParams.get("interval") ?? "1d";

    if (!ALLOWED_SYMBOLS.has(symbol) || !ALLOWED_RANGES.has(range) || !ALLOWED_INTERVAL.has(interval)) {
      return json({ error: "invalid symbol/range/interval" }, 400);
    }

    const upstream =
      `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}` +
      `?range=${range}&interval=${interval}`;

    try {
      const r = await fetch(upstream, {
        headers: {
          // Yahoo blocks default fetch UA; a browser-ish UA sails through.
          "user-agent": "Mozilla/5.0 (compatible; CityArchivist/1.0)",
          "accept": "application/json",
        },
        cf: { cacheTtl: 60, cacheEverything: true },
      });
      if (!r.ok) return json({ error: "upstream " + r.status }, 502);
      const body = await r.text();
      return new Response(body, {
        headers: {
          "content-type": "application/json; charset=utf-8",
          "cache-control": "public, max-age=60",
          ...cors(),
        },
      });
    } catch (e) {
      return json({ error: String(e) }, 502);
    }
  },
};

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
    headers: { "content-type": "application/json; charset=utf-8", ...cors() },
  });
}
