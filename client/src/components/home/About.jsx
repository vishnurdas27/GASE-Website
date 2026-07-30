import Reveal from '../Reveal.jsx';

const coverage = ['Strategy & Governance', 'Operations & Innovation', 'Customer Experience', 'Sustainability & ESG'];

const Check = () => (
  <svg className="ico" viewBox="0 0 24 24">
    <path d="m20 6-11 11-5-5" />
  </svg>
);

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__grid">
        <Reveal className="about__media">
          <div className="about__card">
            <div className="about__stat">
              <b>End-to-End</b>
              <span>Value Chain Coverage</span>
            </div>
            <ul className="about__list">
              {coverage.map((c) => (
                <li key={c}>
                  <Check /> {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="about__badge">
            <strong>2014</strong>
            <span>Founded &amp; trusted</span>
          </div>
        </Reveal>

        <Reveal className="about__body">
          <span className="eyebrow">Who We Are</span>
          <h2 className="section__title">
            A comprehensive platform for excellence across your <span className="grad">entire organization</span>
          </h2>
          <p>
            GASE supports excellence across the full organizational value chain — from strategy and governance to
            operations, innovation, customer experience, and sustainability. Our assessments, recognition programs,
            benchmarking, and advisory services are designed to serve organizations of every size and sector.
          </p>
          <p>
            By covering every function, business unit, and stakeholder, GASE enables organizations to build resilient,
            high-performing, and future-ready enterprises.
          </p>

          <div className="about__points">
            <div className="point">
              <span className="point__ico">
                <svg viewBox="0 0 24 24">
                  <path d="M3 12h4l3 8 4-16 3 8h4" />
                </svg>
              </span>
              <div>
                <b>Assess &amp; Benchmark</b>
                <p>Measure maturity against world-class standards.</p>
              </div>
            </div>
            <div className="point">
              <span className="point__ico">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                  <path d="m2 17 10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </span>
              <div>
                <b>Advise &amp; Build</b>
                <p>Turn insight into capability and lasting value.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
