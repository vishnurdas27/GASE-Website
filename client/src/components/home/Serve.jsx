import Reveal from '../Reveal.jsx';
import { audiences } from '../../data/home.js';

export default function Serve() {
  return (
    <section className="serve section" id="serve">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow">Who We Serve</span>
          <h2 className="section__title">
            Excellence for every <span className="grad">sector, size, and stage</span>
          </h2>
          <p className="section__sub">
            From startups to multinationals, from individuals to enterprise-wide operations.
          </p>
        </Reveal>

        <div className="serve__grid">
          {audiences.map((a, i) => (
            <Reveal as="article" className="serve__card" key={a.title} delay={i * 70}>
              <div className="serve__ico">{a.icon}</div>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
