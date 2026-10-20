/* City Archivist — single hotel review renderer.
   Reads /hotels.json, finds the hotel by the page's data-slug, fills every
   [data-rev*] hook, builds gallery/prev-next, and emits Schema.org (Hotel +
   Review) ONLY when the hotel is published with real scores and a verdict.
   Trilingual: localised {en,de,zh} fields follow <html lang>; re-renders on
   language change. Unpublished hotels show tasteful placeholders. */
(function () {
  var mainEl = document.querySelector('[data-slug]');
  var slug = mainEl ? mainEl.getAttribute('data-slug') : null;
  var DATA = null, H = null;

  function lang() { var l = document.documentElement.lang; return (l === 'de' || l === 'zh') ? l : 'en'; }
  function loc(o) { if (o == null) return ''; if (typeof o === 'string') return o; return o[lang()] || o.en || ''; }
  function t(id) { var e = document.getElementById(id); return e ? e.textContent : ''; }
  function q(s) { return document.querySelector(s); }
  function qa(s) { return Array.prototype.slice.call(document.querySelectorAll(s)); }
  function cityName(key) { var c = (DATA.cities || []).find(function (x) { return x.key === key; }); return c ? loc(c.name) : key; }
  function setRev(name, val) { qa('[data-rev="' + name + '"]').forEach(function (el) { el.textContent = val; }); }
  function fmt(n) { return n == null ? '–' : Number(n).toFixed(1); }
  function computeOverall(s) { var v = ['service', 'design', 'fnb', 'location'].map(function (k) { return s[k]; }); if (v.some(function (x) { return x == null; })) return null; return v.reduce(function (a, b) { return a + b; }, 0) / 4; }
  function yesno(b) { return b == null ? '–' : (b ? t('t-yes') : t('t-no')); }

  function fillList(name, obj) {
    var c = q('[data-rev-list="' + name + '"]'); if (!c) return;
    var arr = (obj && obj[lang()] && obj[lang()].length ? obj[lang()] : (obj && obj.en) || []);
    c.innerHTML = '';
    if (!arr.length) { var li = document.createElement('li'); li.textContent = t('t-tbd'); li.style.opacity = '0.6'; c.appendChild(li); return; }
    arr.forEach(function (x) { var li = document.createElement('li'); li.textContent = x; c.appendChild(li); });
  }
  function fillPay(arr) {
    var c = q('[data-rev-pay]'); if (!c) return; c.innerHTML = '';
    if (!arr || !arr.length) { var s = document.createElement('span'); s.textContent = '–'; c.appendChild(s); return; }
    arr.forEach(function (p) { var s = document.createElement('span'); s.textContent = p; c.appendChild(s); });
  }
  function fillGallery(arr) {
    var c = q('[data-rev-gallery]'); if (!c) return; c.innerHTML = '';
    var imgs = (arr && arr.length) ? arr : [];
    var n = imgs.length || 6;
    for (var i = 0; i < n; i++) {
      if (imgs[i]) { var im = document.createElement('img'); im.src = imgs[i]; im.alt = (H.name || '') + ' — photo ' + (i + 1); im.loading = 'lazy'; c.appendChild(im); }
      else { var d = document.createElement('div'); d.setAttribute('aria-hidden', 'true'); d.style.cssText = 'aspect-ratio:1/1;border:1px solid var(--line);background:var(--stone-3);'; c.appendChild(d); }
    }
  }
  function setLink(sel, h) {
    var a = q(sel); if (!a) return;
    if (!h) { a.hidden = true; return; }
    a.hidden = false; a.href = '/hotels/' + h.slug;
    var nm = a.querySelector('.nm'); if (nm) nm.textContent = h.name || t('t-tbd');
  }
  function fillPrevNext() {
    var list = (DATA.hotels || []).filter(function (h) { return h.city === H.city; });
    var idx = list.findIndex(function (h) { return h.slug === H.slug; });
    if (idx < 0 || list.length < 2) { setLink('[data-rev-prev]', null); setLink('[data-rev-next]', null); return; }
    setLink('[data-rev-prev]', list[(idx - 1 + list.length) % list.length]);
    setLink('[data-rev-next]', list[(idx + 1) % list.length]);
  }
  function fillMap() {
    var frame = q('[data-rev-map-frame]'), ph = q('[data-rev-map-ph]');
    if (H.address && frame) { frame.src = 'https://www.google.com/maps?q=' + encodeURIComponent(H.address) + '&output=embed'; frame.hidden = false; if (ph) ph.hidden = true; }
    else { if (frame) frame.hidden = true; if (ph) ph.hidden = false; }
  }
  function injectSchema(overall) {
    var old = document.getElementById('ld-review'); if (old) old.remove();
    if (!H.published || overall == null || !loc(H.verdict)) return;
    var ld = { '@context': 'https://schema.org', '@type': 'Hotel', 'name': H.name,
      'review': { '@type': 'Review', 'reviewRating': { '@type': 'Rating', 'ratingValue': Number(overall).toFixed(1), 'bestRating': '10', 'worstRating': '1' },
        'author': { '@type': 'Person', 'name': 'Konrad Xu' }, 'reviewBody': loc(H.verdict) } };
    if (H.address) ld.address = H.address;
    var sc = document.createElement('script'); sc.type = 'application/ld+json'; sc.id = 'ld-review'; sc.textContent = JSON.stringify(ld); document.head.appendChild(sc);
  }

  function render() {
    if (!H) return;
    var s = H.scores || {};
    var overall = H.overall != null ? H.overall : computeOverall(s);

    setRev('name', H.name || t('t-tbd'));
    setRev('cityNeighborhood', cityName(H.city) + (loc(H.neighborhood) ? ' · ' + loc(H.neighborhood) : ''));
    setRev('catPrice', [loc(H.category), H.price].filter(Boolean).join(' · ') || t('t-tbd'));
    setRev('f-city', cityName(H.city));
    setRev('f-neighborhood', loc(H.neighborhood) || '–');
    setRev('f-category', loc(H.category) || '–');
    setRev('f-price', H.price || '–');
    setRev('f-rooms', H.rooms != null ? H.rooms : '–');

    ['service', 'design', 'fnb', 'location'].forEach(function (k) {
      qa('[data-rev-score="' + k + '"]').forEach(function (el) { el.textContent = fmt(s[k]); });
    });
    qa('[data-rev="overall"]').forEach(function (el) {
      if (overall == null) { el.textContent = '–'; el.classList.add('is-tbd'); }
      else { el.innerHTML = Number(overall).toFixed(1) + '<small>/10</small>'; el.classList.remove('is-tbd'); }
    });

    var fig = q('[data-rev-hero]');
    if (fig) { var img = fig.querySelector('img'); if (H.heroImage) { img.src = H.heroImage; img.alt = H.name || ''; } }

    setRev('verdict', loc(H.verdict) || t('t-verdictTbd'));
    setRev('insider', loc(H.insiderView) || t('t-comingText'));
    fillList('idealFor', H.idealFor);
    fillList('notIdealFor', H.notIdealFor);

    var cg = H.chineseGuests || {};
    setRev('cn-mandarin', yesno(cg.mandarinStaff));
    fillPay(cg.payment);
    setRev('cn-breakfast', yesno(cg.chineseBreakfast));
    setRev('cn-shopping', loc(cg.shopping) || '–');
    setRev('cn-airport', loc(cg.airport) || '–');
    /* China block: Chinese language only. It starts hidden, so its reveal
       never fired — kick it off when it becomes visible, or it would show
       up as an empty (opacity:0) section. */
    var cnSec = q('[data-rev-cn]');
    if (cnSec) {
      var showCn = (lang() === 'zh');
      cnSec.hidden = !showCn;
      if (showCn) {
        if (window.caReveal) window.caReveal(cnSec);
        else Array.prototype.forEach.call(cnSec.querySelectorAll('.rv, .rv-group, .rv-line'), function (el) { el.classList.add('in'); });
      }
    }

    setRev('address', H.address || '–');
    setRev('visitDate', H.visitDate || '–');
    fillGallery(H.gallery);
    fillMap();
    fillPrevNext();

    var banner = q('[data-rev-banner]'); if (banner) banner.hidden = !!H.published;
    if (H.name) document.title = H.name + ' — City Archivist';
    var reqBtn = q('[data-rev-request]');
    if (reqBtn && H.name) reqBtn.href = 'mailto:hello@cityarchivist.com?subject=' + encodeURIComponent('Request — ' + H.name);

    injectSchema(overall);
  }

  if (!slug) return;
  fetch('/hotels.json').then(function (r) { return r.json(); }).then(function (d) {
    DATA = d; H = (d.hotels || []).find(function (h) { return h.slug === slug; });
    if (!H) { var b = q('[data-rev-banner]'); if (b) { b.hidden = false; b.textContent = 'Hotel not found.'; } return; }
    render();
    new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  }).catch(function () {});
})();
