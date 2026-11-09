/* Yekev Zeev · Domaine du loup — page behaviour (no dependencies). */
(function () {
  'use strict';

  var I18N = window.I18N || {};
  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  var lang = window.__LANG || 'fr';
  var t = function (key) { return (I18N[lang] && I18N[lang][key]) || (I18N.en && I18N.en[key]) || ''; };

  /* ------------------------------------------------------------------
     Language
     ------------------------------------------------------------------ */
  var OG_LOCALE = { en: 'en_US', he: 'he_IL', fr: 'fr_FR' };

  function applyLang(next, opts) {
    if (!I18N[next]) return;
    lang = next;
    root.lang = next;
    root.dir = next === 'he' ? 'rtl' : 'ltr';

    $$('[data-i18n]').forEach(function (el) {
      var v = t(el.getAttribute('data-i18n'));
      if (v) el.textContent = v;
    });
    $$('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':');
        var v = t(p[1]);
        if (p[0] && v) el.setAttribute(p[0].trim(), v);
      });
    });

    document.title = t('meta-title');
    var desc = $('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('meta-desc'));
    var ogl = $('meta[property="og:locale"]');
    if (ogl) ogl.setAttribute('content', OG_LOCALE[next]);

    $$('[data-lang]').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === next));
    });

    syncMenuLabel();
    updateCount();
    if (lightbox && lightbox.open) renderLightbox();

    try { localStorage.setItem('lang', next); } catch (e) {}
    if (opts && opts.user) {
      try {
        var url = new URL(location.href);
        if (url.searchParams.has('lang')) { url.searchParams.set('lang', next); history.replaceState(null, '', url); }
      } catch (e) {}
    }
    root.classList.remove('i18n-wait');
  }

  $$('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      if (b.getAttribute('data-lang') !== lang) applyLang(b.getAttribute('data-lang'), { user: true });
    });
  });

  /* ------------------------------------------------------------------
     Header + mobile menu
     ------------------------------------------------------------------ */
  var header = $('[data-header]');
  var menu = $('[data-menu]');
  var toggle = $('[data-menu-toggle]');
  var desktopMQ = window.matchMedia('(min-width: 1200px)');

  function syncMenuLabel() {
    if (!toggle) return;
    var open = toggle.getAttribute('aria-expanded') === 'true';
    var label = $('.sr-only', toggle);
    if (label) label.textContent = t(open ? 'ui-menu-close' : 'ui-menu-open');
  }
  function setMenu(open, focusToggle) {
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('is-open', open);
    root.classList.toggle('menu-open', open);
    $('main').inert = open;
    syncMenuLabel();
    if (open) { var first = $('a', menu); if (first) first.focus(); }
    else if (focusToggle) toggle.focus();
  }
  if (toggle && menu) {
    toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
    menu.addEventListener('click', function (e) { if (e.target.closest('a') && !desktopMQ.matches) setMenu(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setMenu(false, true);
    });
    desktopMQ.addEventListener('change', function () { if (desktopMQ.matches) setMenu(false); });
  }

  function onScrollHeader() { header.classList.toggle('is-scrolled', window.scrollY > 24); }
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();

  /* Active section in the nav */
  var navLinks = $$('.nav-list a');
  if ('IntersectionObserver' in window) {
    var sectionIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = en.target.id;
        navLinks.forEach(function (a) {
          if (a.getAttribute('href') === '#' + id) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['about', 'story', 'wines', 'tasting', 'gallery', 'contact'].forEach(function (id) {
      var s = document.getElementById(id);
      if (s) sectionIO.observe(s);
    });
  }

  /* ------------------------------------------------------------------
     Reveal on scroll
     ------------------------------------------------------------------ */
  var reveals = $$('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); revealIO.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { revealIO.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ------------------------------------------------------------------
     Gentle parallax inside image frames
     ------------------------------------------------------------------ */
  var px = $$('[data-parallax]');
  var visiblePx = new Set();
  var ticking = false;
  function updateParallax() {
    ticking = false;
    var vh = window.innerHeight;
    visiblePx.forEach(function (img) {
      var r = img.parentElement.getBoundingClientRect();
      var progress = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2); // -1 … 1
      progress = Math.max(-1, Math.min(1, progress));
      img.style.setProperty('--py', (progress * r.height * 0.045).toFixed(1) + 'px');
    });
  }
  function requestParallax() { if (!ticking) { ticking = true; requestAnimationFrame(updateParallax); } }
  if (px.length && 'IntersectionObserver' in window && !reduceMotion.matches) {
    var pxIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        var img = en.target;
        if (en.isIntersecting) visiblePx.add(img); else visiblePx.delete(img);
      });
      requestParallax();
    });
    px.forEach(function (img) { pxIO.observe(img); });
    window.addEventListener('scroll', requestParallax, { passive: true });
    window.addEventListener('resize', requestParallax);
  }

  /* ------------------------------------------------------------------
     Sticky CTA (mobile): after the hero, hidden once contact is on screen
     ------------------------------------------------------------------ */
  var sticky = $('[data-sticky-cta]');
  if (sticky && 'IntersectionObserver' in window) {
    var heroVisible = true, contactVisible = false;
    var stickyIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.target.id === 'top') heroVisible = en.isIntersecting;
        if (en.target.id === 'contact' || en.target.classList.contains('site-footer')) {
          contactVisible = en.isIntersecting || (en.target.id === 'contact' && en.boundingClientRect.top < 0);
        }
      });
      sticky.classList.toggle('is-visible', !heroVisible && !contactVisible);
    }, { threshold: 0 });
    stickyIO.observe($('#top'));
    stickyIO.observe($('#contact'));
  }

  /* Links that preselect the topic in the contact form */
  $$('[data-topic]').forEach(function (a) {
    a.addEventListener('click', function () {
      var r = $('input[name="topic"][value="' + a.getAttribute('data-topic') + '"]');
      if (r) r.checked = true;
    });
  });

  /* ------------------------------------------------------------------
     Gallery + lightbox
     ------------------------------------------------------------------ */
  var gallery = $('[data-gallery]');
  var items = $$('.g-item');
  var lightbox = $('[data-lightbox]');
  var current = 0;

  var posEl = $('[data-gallery-pos]');
  var totalEl = $('[data-gallery-total]');
  if (totalEl) totalEl.textContent = items.length;
  if (gallery && posEl) {
    gallery.addEventListener('scroll', function () {
      var first = gallery.firstElementChild;
      if (!first) return;
      var step = first.getBoundingClientRect().width + 12;
      var idx = Math.round(Math.abs(gallery.scrollLeft) / step);
      posEl.textContent = Math.min(items.length, idx + 1);
    }, { passive: true });
  }

  function srcset(name, max, ext) {
    return [480, 800, 1200, 1800].filter(function (w) { return w <= max; })
      .map(function (w) { return 'assets/img/' + name + '-' + w + '.' + ext + ' ' + w + 'w'; }).join(', ');
  }

  function renderLightbox() {
    var it = items[current];
    var name = it.getAttribute('data-img');
    var max = +it.getAttribute('data-max') || 1800;
    var pic = $('[data-lb-picture]', lightbox);
    var alt = t(it.getAttribute('data-alt'));
    pic.innerHTML =
      '<source type="image/avif" srcset="' + srcset(name, max, 'avif') + '" sizes="100vw">' +
      '<source type="image/webp" srcset="' + srcset(name, max, 'webp') + '" sizes="100vw">' +
      '<img src="assets/img/' + name + '-1200.jpg" alt="">';
    $('img', pic).alt = alt;
    $('[data-lb-caption]', lightbox).textContent = alt;
    $('[data-lb-count]', lightbox).textContent = (current + 1) + ' / ' + items.length;
  }
  function openLightbox(i) {
    current = i;
    renderLightbox();
    if (typeof lightbox.showModal === 'function') lightbox.showModal(); else lightbox.setAttribute('open', '');
    root.style.overflow = 'hidden';
  }
  function go(delta) { current = (current + delta + items.length) % items.length; renderLightbox(); }

  if (lightbox && items.length) {
    var opener = null;
    items.forEach(function (btn, i) {
      btn.addEventListener('click', function () { opener = btn; openLightbox(i); });
    });
    $('[data-lb-close]', lightbox).addEventListener('click', function () { lightbox.close(); });
    $('[data-lb-prev]', lightbox).addEventListener('click', function () { go(-1); });
    $('[data-lb-next]', lightbox).addEventListener('click', function () { go(1); });
    lightbox.addEventListener('close', function () {
      root.style.overflow = '';
      if (opener) opener.focus();
    });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lb-figure')) lightbox.close();
    });
    lightbox.addEventListener('keydown', function (e) {
      var rtl = root.dir === 'rtl';
      if (e.key === 'ArrowRight') go(rtl ? -1 : 1);
      else if (e.key === 'ArrowLeft') go(rtl ? 1 : -1);
    });
    var x0 = null;
    lightbox.addEventListener('pointerdown', function (e) { x0 = e.clientX; });
    lightbox.addEventListener('pointerup', function (e) {
      if (x0 === null) return;
      var dx = e.clientX - x0; x0 = null;
      if (Math.abs(dx) > 50) {
        var rtl = root.dir === 'rtl';
        go((dx < 0) !== rtl ? 1 : -1);
      }
    });
  }

  /* ------------------------------------------------------------------
     Contact form → mailto
     ------------------------------------------------------------------ */
  var form = $('[data-form]');
  var msg = $('#message');
  var countEl = $('[data-count]');
  function updateCount() { if (msg && countEl) countEl.textContent = msg.value.length + '/500'; }
  if (msg) msg.addEventListener('input', updateCount);

  function setError(input, errId, bad) {
    input.setAttribute('aria-invalid', String(bad));
    var err = document.getElementById(errId);
    if (err) err.hidden = !bad;
  }

  if (form) {
    ['first-name', 'email', 'message'].forEach(function (id) {
      var el = document.getElementById(id);
      el.addEventListener('input', function () { if (el.getAttribute('aria-invalid') === 'true') setError(el, 'err-' + id, false); });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var first = $('#first-name'), email = $('#email');
      var badName = !first.value.trim();
      var badEmail = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
      var badMsg = !msg.value.trim();
      setError(first, 'err-first-name', badName);
      setError(email, 'err-email', badEmail);
      setError(msg, 'err-message', badMsg);
      var firstBad = badName ? first : badEmail ? email : badMsg ? msg : null;
      if (firstBad) { firstBad.focus(); return; }

      var topicInput = $('input[name="topic"]:checked');
      var topic = topicInput ? t('form-topic-' + topicInput.value) : '';
      var name = (first.value + ' ' + $('#last-name').value).trim();
      var lines = [
        t('form-topic') + ' ' + topic,
        t('contact-name') + ' / ' + t('contact-last-name') + ': ' + name,
        t('contact-email') + ': ' + email.value.trim(),
        t('contact-phone') + ': ' + $('#phone').value.trim(),
        t('contact-how') + ' ' + $('#heard').value.trim(),
        '',
        msg.value.trim()
      ];
      var subject = t('mail-subject') + (topic ? ' — ' + topic : '');
      var href = 'mailto:yekevzeev@gmail.com?subject=' + encodeURIComponent(subject) +
                 '&body=' + encodeURIComponent(lines.join('\n'));
      $('[data-form-status]').textContent = t('form-sent');
      window.location.href = href;
    });
  }

  /* Footer year */
  var y = $('[data-year]');
  if (y) y.textContent = new Date().getFullYear();

  applyLang(lang);
})();
