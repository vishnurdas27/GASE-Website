import { Link } from 'react-router-dom';
import Reveal from '../Reveal.jsx';
import { homeServices } from '../../data/home.js';

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">What We Do</span>
          <h2 className="section__title">
            One platform, five ways we drive <span className="grad">sustainable excellence</span>
          </h2>
          <p className="section__sub">
            Integrated services that move you from assessment to recognition — and everything in between.
          </p>
        </Reveal>

        <div className="cards">
          {homeServices.map((s, i) => (
            <Reveal as="article" className={`card${s.featured ? ' card--featured' : ''}`} key={s.to} delay={i * 60}>
              {s.tag && <span className="card__tag">{s.tag}</span>}
              <div className="card__ico">
                <svg viewBox="0 0 24 24">
                  {s.icon.map((d, k) => (
                    <path key={k} d={d} />
                  ))}
                </svg>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <Link to={s.to} className="card__link">
                {s.cta} →
              </Link>
            </Reveal>
          ))}

          <Reveal as="article" className="card card--cta" delay={300}>
            <h3>Not sure where to start?</h3>
            <p>Take a free 15-minute maturity discovery call with our excellence advisors.</p>
            <Link to="/contact" className="btn btn--primary btn--sm">
              Book a discovery call
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
