import { Link } from 'react-router-dom';
import Emblem from './Emblem.jsx';
import { site } from '../data/nav.js';

const cols = [
  {
    title: 'Services',
    links: [
      ['/assessments', 'Assessments & Ratings'],
      ['/benchmarking', 'Benchmarking'],
      ['/recognition', 'Recognition & Awards'],
      ['/advisory', 'Advisory & Consulting'],
      ['/capability', 'Capability Building']
    ]
  },
  {
    title: 'Explore',
    links: [
      ['/about', 'About GASE'],
      ['/value-chain', 'Value Chain'],
      ['/industries', 'Industries'],
      ['/services', 'All Services'],
      ['/contact', 'Contact']
    ]
  }
];

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="brand brand--footer">
            <span className="brand__mark" aria-hidden="true">
              <Emblem />
            </span>
            <span className="brand__text">
              <strong>GASE</strong>
            </span>
          </Link>
          <p className="footer__tagline">{site.tagline}</p>
          <p>Empowering excellence across every sector, every function, and every stage of the value chain.</p>
          <div className="footer__social">
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24">
                <path d="M4 4h4v16H4zM4 4h4v3H4zM10 8h4v2c.7-1.2 2-2 3.5-2 3 0 3.5 2 3.5 5v7h-4v-6c0-1.5-.5-2.5-2-2.5s-2.5 1-2.5 2.5v6h-4z" />
                <circle cx="6" cy="4" r="2" />
              </svg>
            </a>
            <a href={`mailto:${site.email}`} aria-label="Email">
              <svg viewBox="0 0 24 24">
                <path d="M4 4h16v16H4z" />
                <path d="m4 6 8 6 8-6" />
              </svg>
            </a>
            <a href={site.phoneHref} aria-label="Phone">
              <svg viewBox="0 0 24 24">
                <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.5.6 3.8.6a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.4a1 1 0 0 1 1 1c0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1l-2.1 2Z" />
              </svg>
            </a>
          </div>
        </div>

        {cols.map((c) => (
          <div className="footer__col" key={c.title}>
            <h4>{c.title}</h4>
            {c.links.map(([to, label]) => (
              <Link key={to} to={to}>
                {label}
              </Link>
            ))}
          </div>
        ))}

        <div className="footer__col footer__col--contact">
          <h4>Get in touch</h4>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.industry}</span>
          <span>Founded {site.founded}</span>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>© {new Date().getFullYear()} GASE — Global Alliance for Sustainable Excellence. All rights reserved.</span>
          <div className="footer__legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
