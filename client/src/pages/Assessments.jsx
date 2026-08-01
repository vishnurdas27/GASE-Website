import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';

const ratingBars = [
  { label: 'Strategy', score: '4.2', w: '84%' },
  { label: 'Operations', score: '3.9', w: '78%' },
  { label: 'ESG', score: '3.1', w: '62%' },
  { label: 'Digital', score: '2.8', w: '56%', gold: true }
];

const ladder = [
  { lvl: 1, title: 'Initial', text: 'Ad-hoc and reactive — excellence depends on individuals, not systems.' },
  { lvl: 2, title: 'Developing', text: 'Basic processes exist but are inconsistent and rarely measured.' },
  { lvl: 3, title: 'Managed', text: 'Standardized, measured processes deliver reliable results across teams.' },
  { lvl: 4, title: 'Advanced', text: 'Data-driven, continuously improving, and benchmarked against leaders.' },
  { lvl: 5, title: 'Role Model', text: 'World-class, self-sustaining excellence — a benchmark for others.' }
];

const process = [
  { n: 1, title: 'Scope', text: 'Define units, functions, and domains to assess against your goals.' },
  { n: 2, title: 'Evidence', text: 'Assessors gather data, documents, and stakeholder interviews.' },
  { n: 3, title: 'Score', text: 'Independent maturity scoring against benchmarked criteria.' },
  { n: 4, title: 'Roadmap', text: 'Prioritized findings and an actionable improvement plan.' }
];

const deliverables = [
  { icon: '📊', title: 'Maturity scorecard', text: 'Domain-by-domain ratings with an overall organizational score.' },
  { icon: '🧭', title: 'Gap analysis', text: 'Where you are versus where world-class organizations operate.' },
  { icon: '🗺️', title: 'Improvement roadmap', text: 'Prioritized, sequenced actions with impact and effort ratings.' }
];

const promises = [
  'Independent, evidence-based scoring',
  'Function, unit & enterprise-level views',
  'Prioritized, costed improvement roadmap'
];

export default function Assessments() {
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
            <b>Assessments &amp; Ratings</b>
          </Reveal>
          <Reveal as="span" className="eyebrow">
            Service 01
          </Reveal>
          <Reveal as="h1">
            Know exactly where you <span className="grad">stand</span>
          </Reveal>
          <Reveal as="p" className="page-hero__lead">
            Evidence-based maturity assessments and independent ratings that map your organization's strengths and gaps
            across all 13 value-chain domains — with the clarity to act.
          </Reveal>
          <Reveal className="page-hero__actions">
            <Link to="/contact" className="btn btn--primary">
              Request an assessment
            </Link>
            <Link to="#ladder" className="btn btn--ghost">
              See maturity levels
            </Link>
          </Reveal>
        </div>
        <div className="page-hero__wave" />
      </section>

      {/* intro + sample scorecard */}
      <section className="section">
        <div className="container split">
          <Reveal className="split__body">
            <span className="eyebrow eyebrow--dark">The Assessment</span>
            <h2>
              Rigorous, benchmarked, and <span className="grad">actionable</span>
            </h2>
            <div className="prose">
              <p>
                A GASE assessment is far more than a checklist. Trained assessors gather evidence, interview
                stakeholders, and score your maturity against world-class standards — function by function, unit by
                unit.
              </p>
              <p>
                You receive an honest, independent rating and a prioritized roadmap, so leadership knows precisely where
                to invest for the greatest return.
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
            <div className="gcard gcard--light">
              <b className="scorecard__label">Sample rating</b>
              <div className="scorecard__score">
                3.8<span>/5</span>
              </div>
              <p className="scorecard__caption">
                Overall maturity — <b>Managed &amp; Improving</b>
              </p>
              <div className="bars">
                {ratingBars.map((bar) => (
                  <Reveal className={`bar${bar.gold ? ' bar--gold' : ''}`} key={bar.label} style={{ '--w': bar.w }}>
                    <div className="bar__label">
                      <span>{bar.label}</span>
                      <span>{bar.score}</span>
                    </div>
                    <div className="bar__track">
                      <div className="bar__fill" />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* maturity ladder */}
      <section className="section section--tint" id="ladder">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--dark">Maturity Model</span>
            <h2 className="section__title">
              Five levels from <span className="grad">reactive to role-model</span>
            </h2>
            <p className="section__sub">Every domain is scored on the same clear, benchmarked scale.</p>
          </Reveal>
          <div className="ladder">
            {ladder.map((rung, i) => (
              <Reveal className="rung" key={rung.lvl} delay={i * 70}>
                <span className="rung__lvl">{rung.lvl}</span>
                <div>
                  <b>{rung.title}</b>
                  <p>{rung.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* how it works */}
      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--dark">How It Works</span>
            <h2 className="section__title">From kick-off to roadmap in four steps</h2>
          </Reveal>
          <div className="steps">
            {process.map((step, i) => (
              <Reveal className="step" key={step.n} delay={i * 80}>
                <div className="step__n">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* deliverables */}
      <section className="section section--mint">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--dark">What You Receive</span>
            <h2 className="section__title">Clear deliverables leadership can act on</h2>
          </Reveal>
          <div className="feature-grid">
            {deliverables.map((item, i) => (
              <Reveal as="article" className="feature" key={item.title} delay={i * 80}>
                <div className="feature__ico">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* cta band */}
      <section className="section band">
        <Reveal className="container band__inner">
          <h2>
            Ready to see your <span className="grad">real maturity?</span>
          </h2>
          <p>Book an assessment and get an honest, benchmarked view of your value chain.</p>
          <div className="band__actions">
            <Link to="/contact" className="btn btn--primary">
              Request an assessment
            </Link>
            <Link to="/benchmarking" className="btn btn--ghost">
              Next: Benchmarking →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
