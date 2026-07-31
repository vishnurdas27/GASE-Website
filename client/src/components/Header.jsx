import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Emblem from './Emblem.jsx';
import { site, services, servicePaths, valueChainGroups, industryGroups, aboutLinks, slug } from '../data/nav.js';

const Caret = () => (
  <svg className="caret" viewBox="0 0 24 24">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="ico" viewBox="0 0 24 24">
    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.5.6 3.8.6a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.4a1 1 0 0 1 1 1c0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1l-2.1 2Z" />
  </svg>
);

export default function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // mobile accordion

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // close menus on route change
  useEffect(() => {
    setNavOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // On mobile the menu buttons open an accordion.
  // On desktop we leave it to the :hover rule in the CSS.
  function toggleMenu(e, key) {
    if (!window.matchMedia('(max-width:900px)').matches) return;
    e.preventDefault();
    setOpenMenu(openMenu === key ? null : key);
  }

  function isActive(paths) {
    return paths.some((path) => pathname === path || pathname.startsWith(path + '/'));
  }

  return (
    <div id="site-header">
      <div className="topbar">
        <div className="container topbar__inner">
          <span className="topbar__item">
            <svg className="ico" viewBox="0 0 24 24">
              <path d="M12 2 4 6v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10V6l-8-4Z" />
            </svg>{' '}
            {site.tagline}
          </span>
          <div className="topbar__links">
            <a href={site.phoneHref}>
              <PhoneIcon /> {site.phone}
            </a>
            <Link to="/contact" className="topbar__cta">
              Client Login
            </Link>
          </div>
        </div>
      </div>

      <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
        <div className="container header__inner">
          <Link to="/" className="brand" aria-label="GASE home">
            <span className="brand__mark" aria-hidden="true">
              <Emblem />
            </span>
            <span className="brand__text">
              <strong>GASE</strong>
              <em>Global Alliance for Sustainable Excellence</em>
            </span>
          </Link>

          <nav className={`nav${navOpen ? ' open' : ''}`} id="nav">
            <NavLink to="/" className={(nav) => (nav.isActive ? 'active' : '')} end>
              Home
            </NavLink>

            {/* About */}
            <div className={`nav__item${openMenu === 'about' ? ' open' : ''}`}>
              <button
                className={`nav__link${isActive(['/about']) ? ' active' : ''}`}
                aria-haspopup="true"
                aria-expanded={openMenu === 'about'}
                onClick={(e) => toggleMenu(e, 'about')}
              >
                About <Caret />
              </button>
              <div className="mega mega--simple">
                <div className="mega__inner">
                  {aboutLinks.map((l) => (
                    <Link key={l.to} to={l.to}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Services */}
            <div className={`nav__item${openMenu === 'services' ? ' open' : ''}`}>
              <button
                className={`nav__link${isActive(servicePaths) ? ' active' : ''}`}
                aria-haspopup="true"
                aria-expanded={openMenu === 'services'}
                onClick={(e) => toggleMenu(e, 'services')}
              >
                Services <Caret />
              </button>
              <div className="mega mega--services">
                <div className="mega__inner">
                  <div className="mega__grid">
                    {services.map((s) => (
                      <Link className="mega__card" to={s.to} key={s.to}>
                        <span className="mega__ico">
                          <svg viewBox="0 0 24 24">
                            {s.icon.map((d, i) => (
                              <path key={i} d={d} />
                            ))}
                          </svg>
                        </span>
                        <span className="mega__txt">
                          <b>{s.title}</b>
                          <em>{s.desc}</em>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="mega__aside">
                    <b>One integrated platform</b>
                    <p>From assessment to recognition — and everything in between.</p>
                    <Link to="/services" className="mega__all">
                      View all services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Value Chain */}
            <div className={`nav__item${openMenu === 'vc' ? ' open' : ''}`}>
              <button
                className={`nav__link${isActive(['/value-chain']) ? ' active' : ''}`}
                aria-haspopup="true"
                aria-expanded={openMenu === 'vc'}
                onClick={(e) => toggleMenu(e, 'vc')}
              >
                Value Chain <Caret />
              </button>
              <div className="mega mega--wide">
                <div className="mega__inner mega__cols">
                  {valueChainGroups.map((g) => (
                    <div className="mega__col" key={g.title}>
                      <h5>{g.title}</h5>
                      {g.items.map((d) => (
                        <Link key={d} to={`/value-chain#${slug(d)}`}>
                          {d}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <div className="mega__col mega__col--cta">
                    <h5>13 Domains</h5>
                    <p>Every function, unit &amp; stakeholder — assessed end to end.</p>
                    <Link to="/value-chain" className="mega__all">
                      Explore the value chain →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries */}
            <div className={`nav__item${openMenu === 'ind' ? ' open' : ''}`}>
              <button
                className={`nav__link${isActive(['/industries']) ? ' active' : ''}`}
                aria-haspopup="true"
                aria-expanded={openMenu === 'ind'}
                onClick={(e) => toggleMenu(e, 'ind')}
              >
                Industries <Caret />
              </button>
              <div className="mega mega--wide">
                <div className="mega__inner mega__cols">
                  {industryGroups.map((g) => (
                    <div className="mega__col" key={g.title}>
                      <h5>{g.title}</h5>
                      {g.items.map((d) => (
                        <Link key={d} to="/industries">
                          {d}
                        </Link>
                      ))}
                    </div>
                  ))}
                  <div className="mega__col mega__col--cta">
                    <h5>Every Sector</h5>
                    <p>Excellence for organizations of every size and stage.</p>
                    <Link to="/industries" className="mega__all">
                      See all industries →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/contact" className={`nav__cta${pathname === '/contact' ? ' active' : ''}`}>
              Request Assessment
            </Link>
          </nav>

          <button
            className={`nav-toggle${navOpen ? ' open' : ''}`}
            id="navToggle"
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
    </div>
  );
}
