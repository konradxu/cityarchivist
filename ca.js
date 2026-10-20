/* City Archivist — shared behaviour: mobile menu, header state, and the
   scroll-reveal motion system (see the "Motion" block in ca.css).
   Language is handled separately by lang.js. Deliberately small. */
(function () {
  var root = document.documentElement;
  root.classList.add('js');

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
