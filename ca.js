/* City Archivist — shared behaviour: mobile menu, header state, and the
   scroll-reveal motion system (see the "Motion" block in ca.css).
   Language is handled separately by lang.js. Deliberately small. */
/* ═══════════════════════════════════════════════════════════════════
   TODO KONRAD — SOCIAL-PROFILE
   Trag hier deine echten URLs ein. Ein Eintrag, der leer ("") bleibt,
   wird auf der ganzen Website automatisch AUSGEBLENDET — es erscheinen
   also nie tote "#"-Links. Das ist die einzige Stelle, die du dafür
   anfassen musst.
     instagram:    "https://instagram.com/deinprofil"
     xiaohongshu:  "https://xiaohongshu.com/user/profile/…"
     wechat:       "https://…"  (oder leer lassen und QR-Bild nutzen)
     wechatQr:     "wechat-qr.png"  (Bilddatei im Hauptverzeichnis)
   ═══════════════════════════════════════════════════════════════════ */
var CA_SOCIAL = {
  instagram:   '',
  xiaohongshu: '',
  wechat:      '',
  wechatQr:    ''
};

/* ═══════════════════════════════════════════════════════════════════
   TODO KONRAD — NEWSLETTER
   Solange `endpoint` leer ist, wird NICHTS ins Leere gesendet: das
   Formular zeigt einen ehrlichen Hinweis und bietet stattdessen eine
   E-Mail an. Sobald du den Endpoint einträgst, geht es live.

   EMPFOHLEN: Brevo (ehemals Sendinblue), DSGVO-konform, EU-Server.
     1. brevo.com → kostenlos anmelden → Kontakte → Liste anlegen
     2. Kontakte → Formulare → Formular erstellen → Double-Opt-in AN
     3. "Teilen" → die Aktions-URL des Formulars kopieren
        (sieht aus wie: https://xxxxx.sibforms.com/serve/MUIF...)
     4. Hier unten bei `endpoint` einsetzen, `provider` auf 'brevo'

   ALTERNATIVE: Buttondown → https://api.buttondown.email/v1/subscribe
   (dann zusätzlich deinen API-Key beim Anbieter hinterlegen)

   WICHTIG: Double-Opt-in beim Anbieter aktivieren (DSGVO-Pflicht) —
   der Hinweistext dazu steht bereits unter dem Formular.
   ═══════════════════════════════════════════════════════════════════ */
var CA_NEWSLETTER = {
  provider: 'brevo',
  endpoint: '',                        // ← HIER die Formular-URL eintragen
  mailto:   'hello@cityarchivist.com'  // ← Fallback, solange endpoint leer ist
};

(function () {
  var root = document.documentElement;
  root.classList.add('js');

  /* ── Social links: render only what actually has a URL ── */
  (function () {
    var hosts = document.querySelectorAll('[data-social]');
    if (!hosts.length) return;
    var items = [
      { key: 'instagram',   label: 'Instagram' },
      { key: 'xiaohongshu', label: '小红书' },
      { key: 'wechat',      label: 'WeChat' }
    ].filter(function (i) { return CA_SOCIAL[i.key] && String(CA_SOCIAL[i.key]).trim(); });

    Array.prototype.forEach.call(hosts, function (host) {
      host.innerHTML = '';
      if (!items.length) { host.hidden = true; return; }   // nothing configured → hide entirely
      host.hidden = false;
      items.forEach(function (i) {
        var a = document.createElement('a');
        a.href = CA_SOCIAL[i.key];
        a.textContent = i.label;
        a.rel = 'me noopener';
        a.target = '_blank';
        if (host.classList.contains('about-social')) a.className = 'about-soc';
        host.appendChild(a);
      });
    });
  })();

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SEL = '.rv, .rv-group, .rv-mask, .rv-img, .rv-line';

  /* ── Mobile menu ── */
  var burger = document.querySelector('.nav-burger');
  if (burger) {
    burger.addEventListener('click', function () {
      var open = root.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    Array.prototype.forEach.call(document.querySelectorAll('.nav-overlay a'), function (a) {
      a.addEventListener('click', function () {
        root.classList.remove('nav-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && root.classList.contains('nav-open')) {
        root.classList.remove('nav-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Header settles once you leave the top ── */
  var header = document.querySelector('.site-header');
  if (header) {
    var ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        header.classList.toggle('is-scrolled', (window.scrollY || root.scrollTop || 0) > 40);
        ticking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Reveal system ── */
  var io = null;
  function observer() {
    if (!io) {
      io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    }
    return io;
  }

  /* Reveals everything inside `scope` (default: the document).
     Exposed as window.caReveal so pages that render content with JS
     (e.g. the review list) can animate it in too. */
  function reveal(scope) {
    scope = scope || document;
    var els = scope.querySelectorAll(SEL);

    /* stagger the direct children of every group */
    Array.prototype.forEach.call(scope.querySelectorAll('.rv-group'), function (g) {
      Array.prototype.forEach.call(g.children, function (c, i) {
        c.style.setProperty('--rv-d', (i * 0.09).toFixed(2) + 's');
      });
    });

    if (reduce || !('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(els, function (el) { el.classList.add('in'); });
      return;
    }
    var o = observer();
    Array.prototype.forEach.call(els, function (el) {
      if (!el.classList.contains('in')) o.observe(el);
    });
  }

  window.caReveal = reveal;
  reveal(document);
})();
