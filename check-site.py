#!/usr/bin/env python3
"""
City Archivist — Qualitätsprüfung.

    python3 check-site.py

Prüft:
  1. Übersetzungen: fehlende oder doppelte Keys in de / en / zh
  2. Keys, die im HTML benutzt werden, aber in lang.js fehlen
  3. Tote Links: href="#" und interne Ziele, die es nicht gibt
  4. Asset-Versionen (ca.css / ca.js / review.js / lang.js) konsistent
  5. hotels.json: gültig + Pflichtfelder vor dem Veröffentlichen

Exit-Code 1, wenn etwas gefunden wurde — damit taugt es auch für CI.
"""
import io, json, os, re, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
PAGES = ["index.html", "hotels.html", "score.html"] + [
    os.path.join("hotels", f) for f in sorted(os.listdir(os.path.join(ROOT, "hotels")))
    if f.endswith(".html")
] if os.path.isdir(os.path.join(ROOT, "hotels")) else ["index.html", "hotels.html", "score.html"]

problems = []
def fail(msg): problems.append(msg)
def head(t): print("\n" + "─" * 60 + f"\n{t}\n" + "─" * 60)


# ── 1 · Übersetzungen ────────────────────────────────────────────────
head("1 · Übersetzungen (de / en / zh)")
src = io.open(os.path.join(ROOT, "lang.js"), encoding="utf-8").read()

def block(name):
    m = re.search(r"\n  %s:\s*\{" % name, src)
    if not m: return ""
    start, depth, i = m.end(), 1, m.end()
    while depth > 0 and i < len(src):
        if src[i] == "{": depth += 1
        elif src[i] == "}": depth -= 1
        i += 1
    return src[start:i - 1]

keys = {n: re.findall(r"^\s*'([^']+)'\s*:", block(n), re.M) for n in ("en", "de", "zh")}
union = set().union(*[set(v) for v in keys.values()]) if keys else set()
for n, v in keys.items():
    dupes = sorted({k for k in v if v.count(k) > 1})
    missing = sorted(union - set(v))
    print(f"  {n}: {len(v)} Keys | Dubletten: {len(dupes)} | fehlend: {len(missing)}")
    if dupes:   fail(f"{n}: doppelte Keys: {', '.join(dupes[:10])}")
    if missing: fail(f"{n}: fehlende Keys: {', '.join(missing[:10])}")

# ── 2 · Im HTML benutzte Keys, die es nicht gibt ─────────────────────
head("2 · data-i18n-Keys im HTML vs. lang.js")
used = set()
for p in PAGES:
    s = io.open(os.path.join(ROOT, p), encoding="utf-8").read()
    used |= set(re.findall(r'data-i18n(?:-placeholder)?="([^"]+)"', s))
unknown = sorted(used - union)
print(f"  benutzt: {len(used)} | unbekannt: {len(unknown)}")
for k in unknown:
    fail(f"HTML nutzt Key, der in lang.js fehlt: {k}")
    print("   FEHLT:", k)

# ── 3 · Links ────────────────────────────────────────────────────────
head("3 · Links")
hash_total = 0
for p in PAGES:
    s = io.open(os.path.join(ROOT, p), encoding="utf-8").read()
    n = len(re.findall(r'href="#"', s))
    hash_total += n
    if n: fail(f'{p}: {n}× href="#"')
    for h in set(re.findall(r'href="([^"]+)"', s)):
        if h.startswith(("http", "mailto:", "#", "data:")): continue
        path = h.split("#")[0].split("?")[0].lstrip("/")
        if not path: continue
        if not (os.path.exists(os.path.join(ROOT, path))
                or os.path.exists(os.path.join(ROOT, path + ".html"))
                or os.path.exists(os.path.join(ROOT, path, "index.html"))):
            fail(f"{p}: totes Ziel {h}")
            print("   TOT:", p, h)
print(f'  href="#": {hash_total}')

# ── 4 · Asset-Versionen ──────────────────────────────────────────────
head("4 · Asset-Versionen")
vers = {}
for p in PAGES:
    s = io.open(os.path.join(ROOT, p), encoding="utf-8").read()
    for m in re.finditer(r'(ca\.css|ca\.js|review\.js|lang\.js)\?v=(\d+)', s):
        vers.setdefault(m.group(1), set()).add(m.group(2))
for asset, vs in sorted(vers.items()):
    print(f"  {asset}: v={','.join(sorted(vs))}")
    if len(vs) > 1: fail(f"{asset} hat uneinheitliche Versionen: {sorted(vs)}")

# ── 5 · hotels.json ──────────────────────────────────────────────────
head("5 · hotels.json")
try:
    d = json.load(open(os.path.join(ROOT, "hotels.json"), encoding="utf-8"))
    pub = [h for h in d["hotels"] if h.get("published")]
    print(f"  Hotels: {len(d['hotels'])} | veröffentlicht: {len(pub)}")
    req = ["name", "visitDate", "stayType", "paidBy", "announced", "verdict", "scores"]
    for h in pub:
        for f in req:
            v = h.get(f)
            if v in ("", None) or (f == "scores" and any(x is None for x in v.values())):
                fail(f"veröffentlichtes Hotel '{h['slug']}': Feld '{f}' fehlt")
                print(f"   FEHLT: {h['slug']} → {f}")
    if not pub:
        print("  (nichts veröffentlicht → Startseite + /hotels zeigen den Hinweis-Zustand)")
except Exception as e:
    fail(f"hotels.json nicht lesbar: {e}")

# ── Ergebnis ─────────────────────────────────────────────────────────
print("\n" + "═" * 60)
if problems:
    print(f"{len(problems)} PROBLEM(E):")
    for p in problems: print("  •", p)
    sys.exit(1)
print("Alles sauber ✓")
