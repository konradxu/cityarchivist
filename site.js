/* BEATWINGS – Seitenfunktionen (Stand 17.11.2026)
   Menü, Sprachumschalter, Einblenden, Reels (nur nach Einwilligung), Bildergalerie. */
(function(){
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var T = function(id, fb, v){ return window.BW_T ? window.BW_T(id, fb, v) : fb; };

  /* ---------- Einblenden beim Scrollen ---------- */
  document.documentElement.classList.add('anim');
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:.06});
  document.querySelectorAll('.up').forEach(function(el){ io.observe(el); });

  /* ---------- aktiver Menüpunkt (nur Anker auf derselben Seite) ---------- */
  var links = [].slice.call(document.querySelectorAll('nav.top a[href^="#"]'));
  var secs = links.map(function(a){ return document.querySelector(a.getAttribute('href')); });
  if(links.length){
    var so = new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ links.forEach(function(a, i){ a.setAttribute('aria-current', secs[i] === e.target ? 'true' : 'false'); }); } });
    }, {rootMargin:'-45% 0px -50% 0px'});
    secs.forEach(function(s){ if(s) so.observe(s); });
  }

  window.BW_READY(function(){

    /* ---------- Burger-Menü ---------- */
    var burger = document.getElementById('burger'), drawer = document.getElementById('drawer');
    if(burger && drawer){
      var menu = function(open){
        drawer.hidden = !open; burger.setAttribute('aria-expanded', String(open));
        burger.setAttribute('aria-label', open ? T('t.menu.close','Menü schließen') : T('t.menu.open','Menü öffnen'));
        document.body.classList.toggle('menu-open', open);
        if(open){ var f = drawer.querySelector('a'); if(f) f.focus(); }
      };
      burger.setAttribute('aria-label', T('t.menu.open','Menü öffnen'));
      burger.addEventListener('click', function(){ menu(drawer.hidden); });
      drawer.addEventListener('click', function(e){ if(e.target.closest('a')) menu(false); });
      document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && !drawer.hidden){ menu(false); burger.focus(); } });
      matchMedia('(min-width:861px)').addEventListener('change', function(m){ if(m.matches) menu(false); });
    }

    /* ---------- Sprachumschalter: Liste kommt aus der Sprachentabelle ---------- */
    var btn = document.getElementById('langbtn'), lm = document.getElementById('langmenu'),
        wrap = document.getElementById('lang'), cur = document.getElementById('langcur');
    if(btn && lm){
      var langs = window.BW_LANGS ? window.BW_LANGS() : [{code:'de', name:'Deutsch'}];
      var now = window.BW_LANG || 'de';
      var short = function(c){ return c.split('-')[0].toUpperCase(); };
      var name = (langs.filter(function(l){ return l.code === now; })[0] || {name:'Deutsch'}).name;
      cur.textContent = short(now);
      btn.setAttribute('aria-label', T('t.lang.label', '{code} – Sprache: {name}. Sprache wechseln', {code:short(now), name:name}));
      lm.setAttribute('aria-label', T('t.lang.menu', 'Sprache wählen'));
      lm.innerHTML = '';
      langs.forEach(function(l){
        var b = document.createElement('button');
        b.type = 'button'; b.setAttribute('role','menuitemradio'); b.tabIndex = -1;
        b.setAttribute('aria-checked', l.code === now ? 'true' : 'false');
        b.setAttribute('lang', l.code);
        b.innerHTML = '<b>' + short(l.code) + '</b><span></span>';
        b.querySelector('span').textContent = l.name;
        b.addEventListener('click', function(){ window.BW_SETLANG(l.code); });
        lm.appendChild(b);
      });
      var open = function(){ wrap.classList.add('open'); lm.hidden = false; btn.setAttribute('aria-expanded','true'); };
      var close = function(){ wrap.classList.remove('open'); lm.hidden = true; btn.setAttribute('aria-expanded','false'); };
      btn.addEventListener('click', function(e){ e.stopPropagation(); lm.hidden ? open() : close(); });
      document.addEventListener('click', function(e){ if(!wrap.contains(e.target)) close(); });
      document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && !lm.hidden){ close(); btn.focus(); } });
      btn.addEventListener('keydown', function(e){ if(e.key === 'ArrowDown'){ e.preventDefault(); open(); lm.querySelector('button').focus(); } });
      lm.addEventListener('keydown', function(e){
        var b = [].slice.call(lm.querySelectorAll('button')), i = b.indexOf(document.activeElement);
        if(e.key === 'ArrowDown'){ e.preventDefault(); b[(i + 1) % b.length].focus(); }
        if(e.key === 'ArrowUp'){ e.preventDefault(); b[(i - 1 + b.length) % b.length].focus(); }
        if(e.key === 'Home'){ e.preventDefault(); b[0].focus(); }
        if(e.key === 'End'){ e.preventDefault(); b[b.length - 1].focus(); }
        if(e.key === 'Tab'){ close(); }
      });
    }

    /* ---------- Einwilligung für Instagram/TikTok ---------- */
    var KEY = 'bw-consent-social';
    function consent(){ try{ return localStorage.getItem(KEY); }catch(e){ return null; } }
    function setConsent(v){ try{ localStorage.setItem(KEY, v); }catch(e){} }
    var bar = document.getElementById('consent');
    function showBar(){ if(bar){ bar.hidden = false; } }
    function hideBar(){ if(bar){ bar.hidden = true; } }
    document.querySelectorAll('[data-consent="yes"]').forEach(function(b){ b.addEventListener('click', function(){ setConsent('yes'); hideBar(); reels(); }); });
    document.querySelectorAll('[data-consent="no"]').forEach(function(b){ b.addEventListener('click', function(){ setConsent('no'); hideBar(); reels(); }); });
    document.querySelectorAll('[data-consent="open"]').forEach(function(b){ b.addEventListener('click', function(){ showBar(); var y = bar && bar.querySelector('button'); if(y) y.focus(); }); });
    if(bar && document.getElementById('reels-grid') && consent() === null) showBar();

    /* ---------- Reels ----------
       Die Liste steht in inhalte/reels.csv (Spalten: plattform;link). Neueste zuerst, höchstens 4 werden gezeigt.
       Ist die Liste leer, zeigt die Seite (nach Einwilligung) das TikTok-Profil mit den neuesten Videos. */
    var box = document.getElementById('reels-grid');
    var PROFIL = {instagram:'https://www.instagram.com/beatwingsadventure/', tiktok:'https://www.tiktok.com/@beatwingsadventure'};
    var NAME = {instagram:'Instagram', tiktok:'TikTok'};
    var POSTER = ['bw-night.jpg','bw-crowd.jpg','bw-rooftop.jpg','bw-beach.jpg'];
    var LIST = null;
    function src(r){
      var m;
      if(r.pf === 'tiktok' && (m = r.url.match(/video\/(\d+)/)))
        return 'https://www.tiktok.com/player/v1/' + m[1] + '?autoplay=1&loop=1&force_muted=1&controls=0&music_info=0&description=0&rel=0';
      if(r.pf === 'instagram' && (m = r.url.match(/instagram\.com\/(?:reel|reels|p)\/([\w-]+)/)))
        return 'https://www.instagram.com/reel/' + m[1] + '/embed';
      return null;
    }
    function reels(){
      if(!box || LIST === null) return;
      var ok = consent() === 'yes';
      box.innerHTML = ''; box.classList.toggle('consented', ok);
      var gate = document.getElementById('reels-gate');
      if(gate) gate.hidden = ok;
      if(ok && !LIST.length){
        box.className = 'creator up in';
        box.innerHTML = '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@beatwingsadventure" data-unique-id="beatwingsadventure" data-embed-type="creator" style="max-width:780px;min-width:288px;"><section><a target="_blank" rel="noopener" href="https://www.tiktok.com/@beatwingsadventure">@beatwingsadventure</a></section></blockquote>';
        var s = document.createElement('script'); s.src = 'https://www.tiktok.com/embed.js'; s.async = true; document.body.appendChild(s);
        return;
      }
      box.className = 'reels up in' + (ok ? ' consented' : '');
      var items = LIST.length ? LIST.slice(0, 4) : [{pf:'instagram',url:''},{pf:'tiktok',url:''},{pf:'instagram',url:''},{pf:'tiktok',url:''}];
      items.forEach(function(r, n){
        var el = document.createElement('div'), u = ok ? src(r) : null;
        el.className = 'reel' + (r.pf === 'instagram' ? ' ig' : '');
        if(u){
          var f = document.createElement('iframe');
          f.src = u; f.title = NAME[r.pf] + ' Reel ' + (n + 1); f.loading = 'lazy';
          f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
          el.appendChild(f);
        }else{
          el.innerHTML = '<img src="' + POSTER[n % POSTER.length] + '" alt="" loading="lazy"><span class="pf">' + NAME[r.pf] + '</span>' +
            '<div class="gate"><a href="' + (r.url || PROFIL[r.pf]) + '" target="_blank" rel="noopener">' + T('t.reel.open', 'Auf {pf} ansehen ↗', {pf:NAME[r.pf]}).replace(/ ↗$/, '\u00a0↗') + '</a></div>';
        }
        box.appendChild(el);
      });
    }
    if(box){
      fetch((document.querySelector('script[src*="site.js"]').src.replace(/assets\/site\.js.*$/, '')) + 'inhalte/reels.csv', {cache:'no-cache'})
        .then(function(r){ return r.ok ? r.text() : ''; })
        .then(function(t){
          LIST = t.replace(/^﻿/, '').split(/\r?\n/).slice(1).map(function(l){
            var p = l.split(/[;,\t]/); return {pf:(p[0] || '').trim().toLowerCase(), url:(p[1] || '').trim()};
          }).filter(function(r){ return (r.pf === 'instagram' || r.pf === 'tiktok') && /^https:\/\//.test(r.url); });
          reels();
        }).catch(function(){ LIST = []; reels(); });
    }

    /* ---------- Bildergalerie (Moments) ---------- */
    var lb = document.getElementById('lightbox');
    if(lb && lb.showModal){
      var img = lb.querySelector('img'), cap = lb.querySelector('p');
      document.querySelectorAll('.gallery .m').forEach(function(m){
        m.addEventListener('click', function(){
          var i = m.querySelector('img'), c = m.querySelector('figcaption, .cap');
          img.src = i.src; img.alt = i.alt; cap.textContent = c ? c.textContent : '';
          lb.showModal();
        });
      });
      lb.querySelector('.x').addEventListener('click', function(){ lb.close(); });
      lb.addEventListener('click', function(e){ if(e.target === lb) lb.close(); });
    }
  });
})();

/* ---------- Bilderkarussell (Startseite) ---------- */
(function(){
  var track = document.getElementById('track'); if(!track) return;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var pauseBtn = document.getElementById('car-pause'), prev = document.getElementById('car-prev'), next = document.getElementById('car-next');
  var T = function(id, fb){ return window.BW_T ? window.BW_T(id, fb) : fb; };
  var rtl = function(){ return document.documentElement.dir === 'rtl'; };
  function step(){ var s = track.querySelector('.slide'); return s ? s.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0) : 300; }
  function go(dir){
    var max = track.scrollWidth - track.clientWidth, pos = Math.abs(track.scrollLeft), sign = rtl() ? -1 : 1;
    if(dir > 0 && pos >= max - 4) track.scrollTo({left:0, behavior:'smooth'});
    else if(dir < 0 && pos <= 4) track.scrollTo({left:sign * max, behavior:'smooth'});
    else track.scrollBy({left:sign * dir * step(), behavior:'smooth'});
  }
  prev.addEventListener('click', function(){ go(-1); });
  next.addEventListener('click', function(){ go(1); });
  track.addEventListener('keydown', function(e){
    if(e.key === 'ArrowRight'){ e.preventDefault(); go(rtl() ? -1 : 1); }
    if(e.key === 'ArrowLeft'){ e.preventDefault(); go(rtl() ? 1 : -1); }
  });
  var timer = null, userPaused = reduce, hover = false;
  function label(){
    pauseBtn.classList.toggle('paused', userPaused);
    pauseBtn.setAttribute('aria-label', userPaused ? T('t.car.play','Karussell abspielen') : T('t.car.pause','Karussell anhalten'));
  }
  function run(){ clearInterval(timer); if(!userPaused && !hover && !document.hidden) timer = setInterval(function(){ go(1); }, 4500); }
  pauseBtn.addEventListener('click', function(){ userPaused = !userPaused; label(); run(); });
  [track].forEach(function(el){
    el.addEventListener('mouseenter', function(){ hover = true; run(); });
    el.addEventListener('mouseleave', function(){ hover = false; run(); });
    el.addEventListener('focusin', function(){ hover = true; run(); });
    el.addEventListener('focusout', function(){ hover = false; run(); });
    el.addEventListener('touchstart', function(){ hover = true; run(); }, {passive:true});
    el.addEventListener('touchend', function(){ hover = false; setTimeout(run, 4000); }, {passive:true});
  });
  document.addEventListener('visibilitychange', run);
  window.BW_READY ? window.BW_READY(function(){ label(); run(); }) : (label(), run());
})();
