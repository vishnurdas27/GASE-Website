/* =========================================================
   GASE — shared header (mega-menu) + footer, injected on every page
   ========================================================= */
(function () {
  'use strict';

  const EMBLEM =
    '<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">' +
    '<path class="ring" d="M47 25 A19 19 0 1 0 47 43" fill="none" stroke-width="7.5" stroke-linecap="round"/>' +
    '<rect x="31" y="29.5" width="18" height="5.6" rx="2.8" fill="#c9a227"/>' +
    '<rect x="31" y="38" width="12.5" height="5" rx="2.5" fill="#d9b84a"/>' +
    '<path d="M30 13 C22 11 15 14 12 20 C20 22 27 19 30 13 Z" fill="#4e9d34"/>' +
    '<path d="M33 11 C35 4 42 1 48 3 C47 10 41 14 33 11 Z" fill="#6bb843"/></svg>';

  const caret = '<svg class="caret" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>';

  /* ---- Services data (used by mega-menu) ---- */
  const services = [
    ['assessments.html', 'Assessments &amp; Ratings', 'Evidence-based maturity assessments across every function.',
      'M9 11l3 3 8-8', 'M21 12a9 9 0 1 1-6-8.5'],
    ['benchmarking.html', 'Benchmarking', 'Compare performance against sector leaders and best practice.',
      'M3 3v18h18', 'M7 14l3-4 3 3 5-7'],
    ['recognition.html', 'Recognition &amp; Awards', 'Award journeys that celebrate and accelerate excellence.',
      'M12 15a4 4 0 0 0 4-4V4H8v7a4 4 0 0 0 4 4Z', 'M8 4H5v3a3 3 0 0 0 3 3M16 4h3v3a3 3 0 0 1-3 3M12 15v4M9 21h6'],
    ['advisory.html', 'Advisory &amp; Consulting', 'Turn diagnostics into strategy, deployment and outcomes.',
      'M12 20a8 8 0 1 0-8-8', 'M12 12l4-2M12 12v5'],
    ['capability.html', 'Capability Building &amp; DOJO', 'Training and DOJO to embed excellence into operations.',
      'M4 19V5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z', 'M9 13h6M9 17h6']
  ];

  const serviceCards = services.map(function (s) {
    return (
      '<a class="mega__card" href="' + s[0] + '">' +
        '<span class="mega__ico"><svg viewBox="0 0 24 24"><path d="' + s[3] + '"/><path d="' + s[4] + '"/></svg></span>' +
        '<span class="mega__txt"><b>' + s[1] + '</b><em>' + s[2] + '</em></span>' +
      '</a>'
    );
  }).join('');

  /* ---- Value-chain domains grouped ---- */
  const vcGroups = [
    ['Strategy &amp; Direction', ['Strategy', 'Leadership', 'Innovation']],
    ['Operations &amp; Delivery', ['Operations', 'Supply Chain', 'Quality', 'Customer Experience']],
    ['Digital &amp; Sustainability', ['Digital Transformation', 'ESG']],
    ['Risk &amp; Enablers', ['Risk', 'Human Resources', 'Finance', 'Governance']]
  ];
  const vcCols = vcGroups.map(function (g) {
    const links = g[1].map(function (d) {
      const anchor = d.toLowerCase().replace(/[^a-z]+/g, '-');
      return '<a href="value-chain.html#' + anchor + '">' + d + '</a>';
    }).join('');
    return '<div class="mega__col"><h5>' + g[0] + '</h5>' + links + '</div>';
  }).join('');

  /* ---- Industries grouped ---- */
  const indGroups = [
    ['Industrial', ['Manufacturing', 'Energy', 'Infrastructure', 'Logistics']],
    ['Services', ['IT &amp; Services', 'Healthcare', 'Retail', 'Hospitality', 'BFSI']],
    ['Public &amp; Social', ['Government &amp; PSUs', 'Education', 'NGOs', 'Agriculture', 'Startups']]
  ];
  const indCols = indGroups.map(function (g) {
    const links = g[1].map(function (d) {
      return '<a href="industries.html">' + d + '</a>';
    }).join('');
    return '<div class="mega__col"><h5>' + g[0] + '</h5>' + links + '</div>';
  }).join('');

  /* ---- Header markup ---- */
  const header =
    '<div class="topbar"><div class="container topbar__inner">' +
      '<span class="topbar__item"><svg class="ico" viewBox="0 0 24 24"><path d="M12 2 4 6v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10V6l-8-4Z"/></svg> Building a Better Future Through Excellence</span>' +
      '<div class="topbar__links">' +
        '<a href="tel:+919811585877"><svg class="ico" viewBox="0 0 24 24"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.5.6 3.8.6a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.4a1 1 0 0 1 1 1c0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1l-2.1 2Z"/></svg> +91 98115 85877</a>' +
        '<a href="contact.html" class="topbar__cta">Client Login</a>' +
      '</div>' +
    '</div></div>' +

    '<header class="header" id="header"><div class="container header__inner">' +
      '<a href="index.html" class="brand" aria-label="GASE home">' +
        '<span class="brand__mark" aria-hidden="true">' + EMBLEM + '</span>' +
        '<span class="brand__text"><strong>GASE</strong><em>Global Alliance for Sustainable Excellence</em></span>' +
      '</a>' +

      '<nav class="nav" id="nav">' +
        '<a href="index.html" data-page="home">Home</a>' +

        '<div class="nav__item">' +
          '<button class="nav__link" data-page="about" aria-haspopup="true" aria-expanded="false">About ' + caret + '</button>' +
          '<div class="mega mega--simple"><div class="mega__inner">' +
            '<a href="about.html#who">Who We Are</a>' +
            '<a href="about.html#journey">Our Journey</a>' +
            '<a href="about.html#why">Why GASE</a>' +
            '<a href="about.html#values">Our Values</a>' +
          '</div></div>' +
        '</div>' +

        '<div class="nav__item">' +
          '<button class="nav__link" data-page="services" aria-haspopup="true" aria-expanded="false">Services ' + caret + '</button>' +
          '<div class="mega mega--services"><div class="mega__inner">' +
            '<div class="mega__grid">' + serviceCards + '</div>' +
            '<div class="mega__aside">' +
              '<b>One integrated platform</b>' +
              '<p>From assessment to recognition — and everything in between.</p>' +
              '<a href="services.html" class="mega__all">View all services →</a>' +
            '</div>' +
          '</div></div>' +
        '</div>' +

        '<div class="nav__item">' +
          '<button class="nav__link" data-page="value-chain" aria-haspopup="true" aria-expanded="false">Value Chain ' + caret + '</button>' +
          '<div class="mega mega--wide"><div class="mega__inner mega__cols">' + vcCols +
            '<div class="mega__col mega__col--cta"><h5>13 Domains</h5><p>Every function, unit &amp; stakeholder — assessed end to end.</p><a href="value-chain.html" class="mega__all">Explore the value chain →</a></div>' +
          '</div></div>' +
        '</div>' +

        '<div class="nav__item">' +
          '<button class="nav__link" data-page="industries" aria-haspopup="true" aria-expanded="false">Industries ' + caret + '</button>' +
          '<div class="mega mega--wide"><div class="mega__inner mega__cols">' + indCols +
            '<div class="mega__col mega__col--cta"><h5>Every Sector</h5><p>Excellence for organizations of every size and stage.</p><a href="industries.html" class="mega__all">See all industries →</a></div>' +
          '</div></div>' +
        '</div>' +

        '<a href="contact.html" class="nav__cta" data-page="contact">Request Assessment</a>' +
      '</nav>' +

      '<button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false"><span></span><span></span><span></span></button>' +
    '</div></header>';

  /* ---- Footer markup ---- */
  const footer =
    '<div class="container footer__grid">' +
      '<div class="footer__brand">' +
        '<a href="index.html" class="brand brand--footer">' +
          '<span class="brand__mark" aria-hidden="true">' + EMBLEM + '</span>' +
          '<span class="brand__text"><strong>GASE</strong></span>' +
        '</a>' +
        '<p class="footer__tagline">Building a Better Future Through Excellence</p>' +
        '<p>Empowering excellence across every sector, every function, and every stage of the value chain.</p>' +
        '<div class="footer__social">' +
          '<a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24"><path d="M4 4h4v16H4zM4 4h4v3H4zM10 8h4v2c.7-1.2 2-2 3.5-2 3 0 3.5 2 3.5 5v7h-4v-6c0-1.5-.5-2.5-2-2.5s-2.5 1-2.5 2.5v6h-4z"/><circle cx="6" cy="4" r="2"/></svg></a>' +
          '<a href="mailto:info@gase.global" aria-label="Email"><svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="m4 6 8 6 8-6"/></svg></a>' +
          '<a href="tel:+919811585877" aria-label="Phone"><svg viewBox="0 0 24 24"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.5.6 3.8.6a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.4a1 1 0 0 1 1 1c0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1l-2.1 2Z"/></svg></a>' +
        '</div>' +
      '</div>' +
      '<div class="footer__col"><h4>Services</h4>' +
        '<a href="assessments.html">Assessments &amp; Ratings</a>' +
        '<a href="benchmarking.html">Benchmarking</a>' +
        '<a href="recognition.html">Recognition &amp; Awards</a>' +
        '<a href="advisory.html">Advisory &amp; Consulting</a>' +
        '<a href="capability.html">Capability Building</a>' +
      '</div>' +
      '<div class="footer__col"><h4>Explore</h4>' +
        '<a href="about.html">About GASE</a>' +
        '<a href="value-chain.html">Value Chain</a>' +
        '<a href="industries.html">Industries</a>' +
        '<a href="services.html">All Services</a>' +
        '<a href="contact.html">Contact</a>' +
      '</div>' +
      '<div class="footer__col footer__col--contact"><h4>Get in touch</h4>' +
        '<a href="tel:+919811585877">+91 98115 85877</a>' +
        '<a href="mailto:info@gase.global">info@gase.global</a>' +
        '<span>International Trade &amp; Development</span>' +
        '<span>Founded 2014</span>' +
      '</div>' +
    '</div>' +
    '<div class="footer__bottom"><div class="container footer__bottom-inner">' +
      '<span>© <span id="year"></span> GASE — Global Alliance for Sustainable Excellence. All rights reserved.</span>' +
      '<div class="footer__legal"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Accessibility</a></div>' +
    '</div></div>';

  /* ---- Lets build-figma.js require this markup from Node. Ignored in the browser. ---- */
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { header: header, footer: footer, EMBLEM: EMBLEM };
  }
  if (typeof document === 'undefined') return;

  /* ---- Inject ---- */
  const hEl = document.getElementById('site-header');
  const fEl = document.getElementById('site-footer');
  if (hEl) hEl.innerHTML = header;
  if (fEl) { fEl.className = 'footer'; fEl.innerHTML = footer; }

  // back-to-top
  const top = document.createElement('a');
  top.href = '#top';
  top.id = 'toTop';
  top.className = 'to-top';
  top.setAttribute('aria-label', 'Back to top');
  top.innerHTML = '<svg viewBox="0 0 24 24"><path d="m6 15 6-6 6 6"/></svg>';
  document.body.appendChild(top);

  /* ---- Active page highlight ---- */
  const page = document.body.dataset.page || 'home';
  document.querySelectorAll('[data-page]').forEach(function (el) {
    if (el.dataset.page === page) el.classList.add('active');
  });

  /* ---- Mobile nav toggle ---- */
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  /* ---- Dropdown toggles (click on mobile, hover on desktop via CSS) ---- */
  document.querySelectorAll('.nav__item > .nav__link').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      if (window.matchMedia('(max-width:900px)').matches) {
        e.preventDefault();
        const item = btn.parentElement;
        const isOpen = item.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(isOpen));
        // close siblings
        document.querySelectorAll('.nav__item').forEach(function (o) {
          if (o !== item) { o.classList.remove('open'); }
        });
      }
    });
  });

  // close mobile nav when a real link is clicked
  nav && nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle && toggle.classList.remove('open');
    });
  });

  /* ---- Header shadow + back-to-top on scroll ---- */
  const header2 = document.getElementById('header');
  const onScroll = function () {
    const y = window.scrollY;
    if (header2) header2.classList.toggle('scrolled', y > 8);
    top.classList.toggle('show', y > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Footer year ---- */
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
