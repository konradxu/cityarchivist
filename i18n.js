/* BEATWINGS – Sprachen aus einer Tabelle (Stand 17.11.2026)
   Alle Texte der Website stehen in i18n/sprachen.csv: eine Zeile pro Text, eine Spalte pro Sprache.
   - Text ändern: Zelle in der Tabelle ändern, speichern, hochladen. Fertig.
   - Neue Sprache: neue Spalte mit Sprachcode (z. B. "sv") anlegen und Zeile "_name" ausfüllen (z. B. "Svenska").
     Der Sprachumschalter zeigt automatisch alle Spalten der Tabelle.
   - Leere Zelle: Es erscheint der deutsche Text.
   Rechtstexte (Impressum, Datenschutz, AGB) sind mit data-i18n-skip="legal" markiert und bleiben deutsch;
   davor erscheint ein Hinweis in der gewählten Sprache. */
(function(){
  var me = document.currentScript && document.currentScript.src || '';
  var BASE = me.replace(/i18n\.js(\?.*)?$/, '');
  var TABLE = BASE + 'sprachen.csv';
  var root = document.documentElement;

  function wanted(){
    var q = (location.search.match(/[?&]lang=([A-Za-z-]+)/) || [])[1], s = null;
    try{ s = localStorage.getItem('bw-lang'); }catch(e){}
    return q || s || 'de';
  }
  var lang = wanted();
  window.BW_LANG = lang;

  /* Während die Tabelle lädt, nichts Falsches zeigen (höchstens 1,5 s) */
  if(lang !== 'de'){
    var st0 = document.createElement('style');
    st0.id = 'bw-i18n-wait';
    st0.textContent = 'html.bw-wait body{visibility:hidden}';
    document.head.appendChild(st0);
    root.classList.add('bw-wait');
    setTimeout(function(){ root.classList.remove('bw-wait'); }, 1500);
  }

  /* alte Google-Translate-Einstellung entfernen */
  if(/googtrans=/.test(document.cookie)){
    var host = location.hostname;
    ['', '; domain=' + host, '; domain=.' + host.replace(/^www\./,'')].forEach(function(d){
      document.cookie = 'googtrans=; path=/' + d + '; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    });
  }

  /* ---------- CSV lesen (Trennzeichen ; , oder Tab, Anführungszeichen, Zeilenumbrüche in Zellen) ---------- */
  function parseCSV(t){
    t = t.replace(/^﻿/, '');
    var first = t.split(/\r?\n/)[0], d = ';';
    if(first.split('\t').length > first.split(d).length) d = '\t';
    if(first.split(',').length > first.split(d).length) d = ',';
    var rows = [], row = [], cell = '', q = false;
    for(var i = 0; i < t.length; i++){
      var c = t[i];
      if(q){
        if(c === '"'){ if(t[i + 1] === '"'){ cell += '"'; i++; } else q = false; }
        else cell += c;
      }else{
        if(c === '"' && cell === '') q = true;
        else if(c === d){ row.push(cell); cell = ''; }
        else if(c === '\n' || c === '\r'){
          if(c === '\r' && t[i + 1] === '\n') i++;
          row.push(cell); rows.push(row); row = []; cell = '';
        }
        else cell += c;
      }
    }
    if(cell !== '' || row.length){ row.push(cell); rows.push(row); }
    return rows.filter(function(r){ return r.join('').trim() !== ''; });
  }

  var DB = {}, LANGS = [], NAMES = {}, DIRS = {}, ready = false, queue = [];

  function load(rows){
    var head = rows[0].map(function(h){ return h.trim(); });
    var col = {};
    head.forEach(function(h, i){ if(i > 0 && h) { col[h] = i; } });
    LANGS = head.slice(1).filter(Boolean).filter(function(h){ return h.charAt(0) !== '_' && h !== 'hinweis'; });
    rows.slice(1).forEach(function(r){
      var id = (r[0] || '').trim(); if(!id) return;
      var e = {};
      LANGS.forEach(function(l){ var v = r[col[l]]; if(v != null && v.trim() !== '') e[l] = v; });
      DB[id] = e;
    });
    LANGS.forEach(function(l){
      NAMES[l] = (DB._name && DB._name[l]) || l;
      DIRS[l] = (DB._dir && DB._dir[l]) || 'ltr';
    });
  }

  function T(id, fallback, vars){
    var e = DB[id], s = e ? (e[lang] || e.de) : null;
    if(s == null) s = fallback != null ? fallback : '';
    if(vars){ s = s.replace(/\{(\w+)\}/g, function(m, k){ return vars[k] != null ? vars[k] : m; }); }
    return s;
  }
  window.BW_T = T;
  window.BW_LANGS = function(){ return LANGS.map(function(l){ return {code:l, name:NAMES[l]}; }); };
  window.BW_SETLANG = function(l){
    try{ localStorage.setItem('bw-lang', l); }catch(e){}
    var u = location.href.replace(/([?&])lang=[A-Za-z-]+&?/, '$1').replace(/[?&]$/, '');
    if(u === location.href){ location.reload(); } else { location.href = u; }
  };
  /* Seiten-Skripte, die Texte brauchen, warten hiermit auf die Tabelle */
  window.BW_READY = function(fn){ if(ready) fn(); else queue.push(fn); };

  function has(id){ return DB[id] && (DB[id][lang] || DB[id].de) != null; }

  function apply(){
    if(LANGS.indexOf(lang) < 0) lang = window.BW_LANG = 'de';
    root.lang = lang;
    root.dir = DIRS[lang] === 'rtl' ? 'rtl' : 'ltr';
    if(root.dir === 'rtl'){
      var s = document.createElement('style');
      s.textContent = 'html[dir="rtl"] .skip:not(:focus){left:auto !important; right:-9999px !important;} html[dir="rtl"] body{overflow-x:clip;}';
      document.head.appendChild(s);
    }
    document.querySelectorAll('[data-t]').forEach(function(el){
      var id = el.getAttribute('data-t');
      if(!has(id)) return;
      if(el.tagName === 'TITLE') document.title = T(id); else el.innerHTML = T(id);
    });
    document.querySelectorAll('[data-ta]').forEach(function(el){
      el.getAttribute('data-ta').split('|').forEach(function(p){
        var i = p.indexOf('='); if(i < 0) return;
        var a = p.slice(0, i), id = p.slice(i + 1);
        if(has(id)) el.setAttribute(a, T(id));
      });
    });
    if(lang !== 'de'){
      var legal = document.querySelectorAll('[data-i18n-skip="legal"]');
      for(var i = 0; i < legal.length; i++){
        var p = document.createElement('p');
        p.className = 'i18n-note'; p.setAttribute('lang', lang);
        p.textContent = T('legal.note', 'Dieser Abschnitt ist nur auf Deutsch verfügbar. Rechtlich maßgeblich ist die deutsche Fassung.');
        legal[i].insertBefore(p, legal[i].firstChild);
      }
      var st = document.createElement('style');
      st.textContent = '.i18n-note{margin:0 0 1.4rem;padding:.75rem 1rem;border:1px solid #E1E1E1;border-radius:.5rem;font-size:.85rem;line-height:1.5;color:#464646;background:#FFFFFF;}[dir="rtl"] .i18n-note{text-align:right;}';
      document.head.appendChild(st);
    }
  }

  function finish(){
    ready = true;
    root.classList.remove('bw-wait');
    queue.splice(0).forEach(function(fn){ try{ fn(); }catch(e){ console.error(e); } });
  }

  function start(text){
    try{ load(parseCSV(text)); }catch(e){ console.error('sprachen.csv', e); }
    var go = function(){ if(LANGS.length) apply(); else { lang = window.BW_LANG = 'de'; } finish(); };
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
  }

  fetch(TABLE, {cache:'no-cache'}).then(function(r){ if(!r.ok) throw new Error(r.status); return r.text(); })
    .then(start)
    .catch(function(e){
      console.warn('Sprachtabelle nicht geladen – Seite bleibt deutsch.', e);
      lang = window.BW_LANG = 'de';
      var go = function(){ LANGS = ['de']; NAMES.de = 'Deutsch'; finish(); };
      if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', go); else go();
    });
})();
