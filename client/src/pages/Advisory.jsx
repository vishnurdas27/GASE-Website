import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import Counter from '../components/Counter.jsx';

const promises = [
  'Embedded, hands-on delivery',
  'Strategy formulation & deployment',
  'Capability transferred to your teams'
];

const outcomes = [
  { to: 30, suffix: '%', label: 'Cycle-time reduction' },
  { to: 2, suffix: 'x', label: 'Faster award readiness' },
  { to: 90, suffix: '%', label: 'Actions sustained at 12 mo.' },
  { to: 13, suffix: '', label: 'Domains we advise across' }
];

const phases = [
  { n: 1, title: 'Diagnose', text: 'Ground the work in assessment and benchmarking evidence and align on goals.' },
  { n: 2, title: 'Design', text: 'Co-create the strategy, roadmap, and target operating model with your leaders.' },
  { n: 3, title: 'Deploy', text: 'Run improvement events, coach teams, and drive change on the ground.' },
  { n: 4, title: 'Sustain', text: 'Embed governance, metrics, and capability so gains hold and compound.' }
];

const focusAreas = [
  { icon: '🧭', title: 'Strategy Formulation & Deployment', text: 'Translate vision into cascaded, measurable goals across the enterprise.' },
  { icon: '⚙️', title: 'Operational & Manufacturing Excellence', text: 'TPM, lean, and quality systems that lift productivity and reliability.' },
  { icon: '🦺', title: 'Safety Excellence', text: 'Build the systems and culture for a resilient, zero-harm workplace.' },
  { icon: '🌱', title: 'ESG & Sustainability', text: 'Embed sustainable practice and prepare credible, benchmarked disclosure.' },
  { icon: '🔗', title: 'Supply Chain & Vendor / MSME', text: 'Upgrade suppliers and MSMEs to strengthen the whole value chain.' },
  { icon: '💡', title: 'Digital Transformation', text: 'Modernize operations with practical, outcome-focused digital adoption.' }
];

export default function Advisory() {
  return (
    <>
      {/* hero */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__inner">
          <Reveal className="crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/services">Services</Link>
            <span>/</span>
            <b>Advisory &amp; Consulting</b>
          </Reveal>
          <Reveal as="span" className="eyebrow">
            Service 04
          </Reveal>
          <Reveal as="h1">
            From insight to <span className="grad">measurable impact</span>
          </Reveal>
          <Reveal as="p" className="page-hero__lead">
            An assessment tells you what to fix. Our advisors help you actually fix it — translating diagnostics into
            strategy, hands-on deployment, and results your board can see.
          </Reveal>
          <Reveal className="page-hero__actions">
            <Link to="/contact" className="btn btn--primary">
              Talk to an advisor
            </Link>
            <Link to="#model" className="btn btn--ghost">
              Our engagement model
            </Link>
          </Reveal>
        </div>
        <div className="page-hero__wave" />
      </section>

      {/* intro + outcomes card */}
      <section className="section">
        <div className="container split">
          <Reveal className="split__body">
            <span className="eyebrow eyebrow--dark">Consulting, Not Just Advice</span>
            <h2>
              We work <span className="grad">alongside your teams</span>, not above them
            </h2>
            <div className="prose">
              <p>
                Reports gather dust; capability endures. GASE advisors embed with your people — coaching leaders,
                running improvement events, and deploying strategy so change sticks long after we've gone.
              </p>
              <p>
                Every engagement is grounded in evidence from your assessment and benchmarking, and measured against
                outcomes that matter to your business.
              </p>
            </div>
            <ul className="checks" style={{ marginTop: '1.4rem' }}>
              {promises.map((item) => (
                <li key={item}>
                  <svg viewBox="0 0 24 24">
                    <path d="m20 6-11 11-5-5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="split__media">
            <div className="gcard">
              <b className="gcard__label">Typical outcomes</b>
              <div className="strip strip--card">
                {outcomes.map((o) => (
                  <div key={o.label}>
                    <Counter className="stat__num" to={o.to} suffix={o.suffix} />
                    <span>{o.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* engagement model */}
      <section className="section section--tint" id="model">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--dark">Engagement Model</span>
            <h2 className="section__title">
              Four phases from <span className="grad">diagnosis to durability</span>
            </h2>
          </Reveal>
          <div className="steps">
            {phases.map((phase, i) => (
              <Reveal className="step" key={phase.n} delay={i * 80}>
                <div className="step__n">{phase.n}</div>
                <h3>{phase.title}</h3>
                <p>{phase.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* focus areas */}
      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--dark">Where We Advise</span>
            <h2 className="section__title">Deep expertise across the value chain</h2>
          </Reveal>
          <div className="feature-grid">
            {focusAreas.map((area, i) => (
              <Reveal as="article" className="feature" key={area.title} delay={(i % 3) * 80}>
                <div className="feature__ico">{area.icon}</div>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* cta band */}
      <section className="section band">
        <Reveal className="container band__inner">
          <h2>
            Turn your roadmap into <span className="grad">results</span>
          </h2>
          <p>Bring in advisors who deliver change on the ground — and leave capability behind.</p>
          <div className="band__actions">
            <Link to="/contact" className="btn btn--primary">
              Talk to an advisor
            </Link>
            <Link to="/capability" className="btn btn--ghost">
              Next: Capability Building →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
