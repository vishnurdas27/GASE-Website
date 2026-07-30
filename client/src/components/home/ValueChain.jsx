import { Link } from 'react-router-dom';
import Reveal from '../Reveal.jsx';
import { domains } from '../../data/home.js';
import { slug } from '../../data/nav.js';

export default function ValueChain() {
  return (
    <section className="valuechain section" id="valuechain">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow eyebrow--light">End-to-End Value Chain Assessment</span>
          <h2 className="section__title section__title--light">
            Every function. Every unit. <span className="grad">Every stakeholder.</span>
          </h2>
          <p className="section__sub section__sub--light">
            GASE assesses and elevates all thirteen domains that define a future-ready enterprise.
          </p>
        </Reveal>

        <div className="vc-grid">
          {domains.map((d, i) => (
            <Reveal as={Link} to={`/value-chain#${slug(d)}`} className="vc" key={d} delay={(i % 4) * 60}>
              <span className="vc__num">{String(i + 1).padStart(2, '0')}</span>
              <b>{d}</b>
            </Reveal>
          ))}

          <Reveal as={Link} to="/value-chain" className="vc vc--all" delay={180}>
            <b>+ Enterprise-wide</b>
            <span>Integrated coverage</span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
