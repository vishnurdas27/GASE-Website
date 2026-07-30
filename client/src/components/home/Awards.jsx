import { Link } from 'react-router-dom';
import Reveal from '../Reveal.jsx';
import { awards } from '../../data/home.js';

export default function Awards() {
  return (
    <section className="awards section" id="awards">
      <div className="container awards__grid">
        <Reveal className="awards__intro">
          <span className="eyebrow">Our Specialties</span>
          <h2 className="section__title">
            Proven award &amp; excellence <span className="grad">journeys</span>
          </h2>
          <p>
            Decades of hands-on expertise guiding organizations through the most respected excellence frameworks and
            award programs in the industry.
          </p>
          <Link to="/recognition" className="btn btn--primary">
            Begin your award journey
          </Link>
        </Reveal>

        <div className="awards__list">
          {awards.map((a, i) => (
            <Reveal className="award" key={a.title} delay={i * 60}>
              <span className="award__ico">{a.icon}</span>
              <div>
                <b>{a.title}</b>
                <p>{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
