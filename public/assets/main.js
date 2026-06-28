/* ============================================================
   NaS Website — Interactions & Animations
   ============================================================ */
(function () {
  'use strict';

  /* ---- Header shadow on scroll ---- */
  var header = document.querySelector('.site-header');
  var toTop = document.querySelector('.to-top');
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle('scrolled', y > 8);
    if (toTop) toTop.classList.toggle('show', y > 480);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Back to top ---- */
  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---- Mobile menu ---- */
  var toggle = document.querySelector('.nav-toggle');
  if (toggle && header) {
    toggle.addEventListener('click', function () {
      header.classList.toggle('open');
    });
    header.querySelectorAll('.mobile-menu a').forEach(function (a) {
      a.addEventListener('click', function () { header.classList.remove('open'); });
    });
  }

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-scale');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---- Count up numbers ---- */
  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var dur = 1300, start = null;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toString();
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target.toString();
    }
    requestAnimationFrame(step);
  }
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { countUp(e.target); co.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { co.observe(c); });
  }

  /* ---- Accordion (FAQ / news etc.) ---- */
  document.querySelectorAll('.acc-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.acc-item');
      var panel = item.querySelector('.acc-a');
      var isOpen = item.classList.contains('open');
      if (isOpen) {
        panel.style.maxHeight = null;
        item.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        panel.style.maxHeight = panel.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---- News category filter ---- */
  var filterBtns = document.querySelectorAll('[data-filter]');
  if (filterBtns.length) {
    var newsItems = document.querySelectorAll('[data-cat]');
    var emptyMsg = document.querySelector('.news-empty');
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var cat = btn.getAttribute('data-filter');
        filterBtns.forEach(function (b) {
          var on = b === btn;
          b.classList.toggle('active', on);
          b.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        var shown = 0;
        newsItems.forEach(function (item) {
          var match = cat === 'all' || item.getAttribute('data-cat') === cat;
          item.hidden = !match;
          if (match) {
            shown++;
          } else if (item.classList.contains('open')) {
            // collapse hidden panels so they reopen cleanly
            item.classList.remove('open');
            var p = item.querySelector('.acc-a');
            if (p) p.style.maxHeight = null;
            var q = item.querySelector('.acc-q');
            if (q) q.setAttribute('aria-expanded', 'false');
          }
        });
        if (emptyMsg) emptyMsg.classList.toggle('show', shown === 0);
      });
    });
  }

  /* ---- Simple form feedback ---- */
  document.querySelectorAll('form[data-mock]').forEach(function (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var done = form.querySelector('.form-done');
      form.querySelectorAll('input,textarea,select,button').forEach(function (el) { el.disabled = true; });
      if (done) { done.style.display = 'block'; done.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    });
  });
})();
