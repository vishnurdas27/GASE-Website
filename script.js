/* =========================================================
   GASE — page interactions (reveal, counters, form, tabs, accordion)
   Header/footer/nav live in assets/partials.js
   ========================================================= */
(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Reveal on scroll --- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !prefersReduced) {
    const io = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.delay || '0', 10);
            entry.target.style.transitionDelay = delay + 'ms';
            entry.target.classList.add('in');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* --- Animated counters --- */
  const nums = document.querySelectorAll('[data-count]');
  const animateCount = function (el) {
    const target = parseFloat(el.dataset.count || '0');
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const dur = 1600;
    const start = performance.now();
    const step = function (now) {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = prefix + target + suffix;
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window && !prefersReduced) {
    const statIo = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { animateCount(entry.target); obs.unobserve(entry.target); }
        });
      },
      { threshold: 0.6 }
    );
    nums.forEach(function (n) { statIo.observe(n); });
  } else {
    nums.forEach(function (n) { n.textContent = (n.dataset.prefix || '') + n.dataset.count + (n.dataset.suffix || ''); });
  }

  /* --- Animated comparison bars --- */
  const bars = document.querySelectorAll('.bar');
  if ('IntersectionObserver' in window && !prefersReduced) {
    const barIo = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add('in'); obs.unobserve(entry.target); }
        });
      },
      { threshold: 0.4 }
    );
    bars.forEach(function (b) { barIo.observe(b); });
  } else {
    bars.forEach(function (b) { b.classList.add('in'); });
  }

  /* --- Tabs (data-tabs) --- */
  document.querySelectorAll('[data-tabs]').forEach(function (group) {
    const btns = group.querySelectorAll('[data-tab]');
    const panels = group.querySelectorAll('[data-panel]');
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const key = btn.dataset.tab;
        btns.forEach(function (b) { b.classList.toggle('active', b === btn); });
        panels.forEach(function (p) { p.classList.toggle('active', p.dataset.panel === key); });
      });
    });
  });

  /* --- Accordion (data-accordion) --- */
  document.querySelectorAll('[data-accordion] .acc__item').forEach(function (item) {
    const head = item.querySelector('.acc__head');
    if (!head) return;
    head.addEventListener('click', function () {
      const open = item.classList.toggle('open');
      head.setAttribute('aria-expanded', String(open));
    });
  });

  /* --- Contact form (front-end demo) --- */
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = form.querySelector('#name');
      const email = form.querySelector('#email');
      const org = form.querySelector('#org');
      const valid =
        name.value.trim() &&
        (!org || org.value.trim()) &&
        /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim());
      if (!valid) {
        note.style.color = '#c0392b';
        note.textContent = 'Please fill in your name, organization and a valid email.';
        return;
      }
      note.style.color = '';
      note.textContent = 'Thank you, ' + name.value.trim().split(' ')[0] +
        '! Our excellence advisors will be in touch shortly.';
      form.reset();
    });
  }
})();
