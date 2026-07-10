/**
 * ============================================================
 *  City Archivist — AI Trip Planner  (Cloudflare Worker)
 * ------------------------------------------------------------
 *  This tiny backend keeps your Anthropic API key SECRET.
 *  The static website never sees the key — it only talks to
 *  this worker, which talks to Claude.
 *
 *  ── ONE-TIME SETUP (≈15 min, free) ─────────────────────────
 *  1. Create a free account at https://dash.cloudflare.com
 *  2. Get an Anthropic API key: https://console.anthropic.com/settings/keys
 *  3. Install the CLI:   npm install -g wrangler
 *  4. In this folder:    wrangler login
 *  5. Deploy:            wrangler deploy trip-planner-worker.js --name cityarchivist-trip
 *  6. Store the key as a secret (NOT in this file):
 *                        wrangler secret put ANTHROPIC_API_KEY --name cityarchivist-trip
 *     (paste your sk-ant-... key when prompted)
 *  7. Wrangler prints a URL like
 *        https://cityarchivist-trip.<your-subdomain>.workers.dev
 *     Paste that URL into index.html → TRIP_PLANNER_ENDPOINT.
 *
 *  ── COST ────────────────────────────────────────────────────
 *  Model is set below. Claude Haiku 4.5 is fast + cheap
 *  (≈ $1 / 1M input, $5 / 1M output → a fraction of a cent per
 *  itinerary). For richer, more creative trips swap MODEL to
 *  'claude-opus-4-8' (best quality) or 'claude-sonnet-4-6'
 *  (balanced) — one-line change, higher per-request cost.
 * ============================================================
 */

const MODEL         = 'claude-haiku-4-5';               // ← swap for 'claude-opus-4-8' / 'claude-sonnet-4-6'
const MAX_TOKENS     = 2000;
const ANTHROPIC_URL = 'https://api.anthropic.com/v1/messages';

/* Browser origins allowed to call this worker (CORS).
   Add your real domain(s); keep localhost for testing.       */
const ALLOWED_ORIGINS = [
  'https://cityarchivist.com',
  'https://www.cityarchivist.com',
  // 'https://<your-user>.github.io',   // ← uncomment if you use the github.io URL
  'http://localhost:8000',
  'http://127.0.0.1:8000',
];

const LANG_NAME = {
  en: 'English',
  de: 'German (Deutsch)',
  zh: 'Simplified Chinese (简体中文)',
};

function corsHeaders(origin) {
  const allow = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin',
  };
}

function json(obj, status, origin) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
  });
}

const clampStr = (v, max) => (typeof v === 'string' ? v : '').slice(0, max).trim();
function clampNum(v, min, max, dflt) {
  const n = parseInt(v, 10);
  if (Number.isNaN(n)) return dflt;
  return Math.min(max, Math.max(min, n));
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }
    if (request.method !== 'POST') {
      return json({ error: 'method_not_allowed' }, 405, origin);
    }
    if (!env.ANTHROPIC_API_KEY) {
      return json({ error: 'server_not_configured' }, 500, origin);
    }

    let body;
    try { body = await request.json(); }
    catch { return json({ error: 'bad_request' }, 400, origin); }

    // Honeypot: real visitors leave this empty; bots fill it.
    if (body._gotcha) return json({ error: 'rejected' }, 400, origin);

    const lang        = ['en', 'de', 'zh'].includes(body.lang) ? body.lang : 'en';
    const tripType    = clampStr(body.tripType, 120);
    const destination = clampStr(body.destination, 120);
    const budget      = clampStr(body.budget, 40);
    const month       = clampStr(body.month, 40);
    const notes       = clampStr(body.notes, 400);
    const days        = clampNum(body.days, 1, 30, 4);
    const travellers  = clampNum(body.travellers, 1, 20, 2);

    if (!tripType && !destination) {
      return json({ error: 'missing_input' }, 400, origin);
    }

    const system =
`You are the travel concierge for "City Archivist", a curated, editorial luxury-lifestyle travel magazine.
Given a traveller's brief, compose a tasteful, realistic day-by-day itinerary.
Write ENTIRELY in ${LANG_NAME[lang]}.
Format as clean Markdown, nothing else:
- Line 1: "## " followed by an evocative trip title.
- One short intro paragraph (2–3 sentences).
- Then one "### Day N — <theme>" heading per day, each followed by a short paragraph or 2–4 bullet points covering morning / afternoon / evening. Use **bold** for the names of venues, neighbourhoods, hotels and restaurants.
- End with a "### Good to know" section: 2–4 bullets on where to stay, the budget feel, and one genuine insider tip.
Name real, plausible places for the destination. Be elegant and concrete. No preamble, no sign-off, no disclaimers, no mention of being an AI. Keep it under ~450 words.`;

    const parts = [];
    if (tripType)    parts.push(`Trip type / vibe: ${tripType}`);
    if (destination) parts.push(`Destination: ${destination}`);
    parts.push(`Duration: ${days} day(s)`);
    parts.push(`Travellers: ${travellers}`);
    if (budget) parts.push(`Budget level: ${budget}`);
    if (month)  parts.push(`When: ${month}`);
    if (notes)  parts.push(`Extra wishes: ${notes}`);

    let aiRes;
    try {
      aiRes = await fetch(ANTHROPIC_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: MAX_TOKENS,
          system,
          messages: [{ role: 'user', content: `Plan this trip:\n${parts.join('\n')}` }],
        }),
      });
    } catch {
      return json({ error: 'upstream_unreachable' }, 502, origin);
    }

    if (!aiRes.ok) {
      const detail = await aiRes.text().catch(() => '');
      return json({ error: 'ai_request_failed', status: aiRes.status, detail: detail.slice(0, 300) }, 502, origin);
    }

    const data = await aiRes.json();
    const itinerary = (data.content || [])
      .filter(b => b.type === 'text')
      .map(b => b.text)
      .join('\n')
      .trim();

    if (!itinerary) return json({ error: 'empty_response' }, 502, origin);

    return json({ itinerary }, 200, origin);
  },
};
