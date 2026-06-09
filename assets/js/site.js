/* Refined Concrete — shared site behavior (nav + scroll reveal) */
(function () {
  'use strict';

  var nav = document.querySelector('.site-nav');

  if (nav) {
    var onScroll = function () { nav.classList.toggle('scrolled', window.scrollY > 40); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    var toggle = nav.querySelector('.nav-toggle');
    var backdrop = nav.querySelector('.nav-backdrop');

    var setMenu = function (open) {
      nav.classList.toggle('nav-open', open);
      if (toggle) {
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      }
      document.body.style.overflow = open ? 'hidden' : '';
    };

    if (toggle) toggle.addEventListener('click', function () { setMenu(!nav.classList.contains('nav-open')); });
    if (backdrop) backdrop.addEventListener('click', function () { setMenu(false); });
    nav.querySelectorAll('.nav-right a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

    // scroll-spy (only fires when nav links target in-page sections)
    var anchors = [].slice.call(nav.querySelectorAll('.nav-links a[href^="#"]'));
    var targets = anchors.map(function (a) { return document.querySelector(a.getAttribute('href')); }).filter(Boolean);
    if (targets.length) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            anchors.forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id); });
          }
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      targets.forEach(function (t) { spy.observe(t); });
    }
  }

  // scroll reveal
  var reveals = [].slice.call(document.querySelectorAll('.reveal'));
  if (reveals.length && 'IntersectionObserver' in window) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var siblings = [].slice.call(e.target.parentElement.children).filter(function (c) { return c.classList.contains('reveal'); });
          e.target.style.transitionDelay = (siblings.indexOf(e.target) * 80) + 'ms';
          e.target.classList.add('in-view');
          ro.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { ro.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in-view'); });
  }

  // loading skeletons for content photos + hero backgrounds
  var imgSel = '.split-media img, .service-media img, .intro-img img, .area-img img, .team-img img, .gallery-figure img';
  [].forEach.call(document.querySelectorAll(imgSel), function (img) {
    var host = img.parentElement;
    if (!host) return;
    img.classList.add('skeleton-img');
    host.classList.add('skeleton');
    var done = function () { host.classList.remove('skeleton'); img.classList.add('is-loaded'); };
    if (img.complete && img.naturalWidth > 0) { done(); }
    else { img.addEventListener('load', done); img.addEventListener('error', done); }
  });
  [].forEach.call(document.querySelectorAll('.hero-slide, .page-hero-bg, .service-card-bg'), function (el) {
    var m = (el.style.backgroundImage || '').match(/url\(["']?(.*?)["']?\)/);
    if (!m) return;
    el.classList.add('bg-loading');
    var im = new Image();
    im.onload = im.onerror = function () { el.classList.remove('bg-loading'); };
    im.src = m[1];
  });
})();
