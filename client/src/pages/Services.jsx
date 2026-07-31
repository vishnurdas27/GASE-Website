import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import Counter from '../components/Counter.jsx';

const serviceLines = [
  {
    to: '/assessments',
    title: 'Assessments & Ratings',
    desc: 'Rigorous, evidence-based maturity assessments and ratings across every function and business unit.',
    cta: 'Learn more',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M9 11l3 3 8-8" />
        <path d="M21 12a9 9 0 1 1-6-8.5" />
      </svg>
    )
  },
  {
    to: '/benchmarking',
    title: 'Benchmarking',
    desc: 'Compare performance against sector leaders and world-class practice to reveal the path forward.',
    cta: 'Learn more',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 3v18h18" />
        <path d="M7 14l3-4 3 3 5-7" />
      </svg>
    )
  },
  {
    to: '/recognition',
    title: 'Recognition & Awards',
    desc: 'Award journeys and recognition programs that celebrate and accelerate excellence.',
    cta: 'Learn more',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 15a4 4 0 0 0 4-4V4H8v7a4 4 0 0 0 4 4Z" />
        <path d="M8 4H5v3a3 3 0 0 0 3 3M16 4h3v3a3 3 0 0 1-3 3M12 15v4M9 21h6" />
      </svg>
    )
  },
  {
    to: '/advisory',
    title: 'Advisory & Consulting',
    desc: 'Hands-on advisory that translates diagnostics into strategy, deployment, and measurable outcomes.',
    cta: 'Learn more',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 20a8 8 0 1 0-8-8" />
        <path d="M12 12l4-2M12 12v5" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    )
  },
  {
    to: '/capability',
    title: 'Capability Building & DOJO',
    desc: 'Training, DOJO, and strategy deployment that embed excellence into everyday operations.',
    cta: 'Learn more',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 19V5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
        <path d="M9 13h6M9 17h6M9 9h3" />
      </svg>
    )
  }
];

const process = [
  { n: 1, title: 'Assess', text: 'Measure maturity across the value chain against world-class standards.' },
  { n: 2, title: 'Benchmark', text: 'Compare with peers and leaders to reveal gaps and opportunities.' },
  { n: 3, title: 'Advise & Build', text: 'Deploy strategy and build capability to close the gaps.' },
  { n: 4, title: 'Recognize', text: 'Rate, report, and win the recognition your progress deserves.' }
];

const strip = [
  { to: 13, label: 'Value-chain domains covered' },
  { to: 14, suffix: '+', label: 'Industry sectors served' },
  { to: 5, label: 'Integrated service lines' },
  { to: 100, suffix: '%', label: 'Organization coverage' }
];

export default function Services() {
  return (
    <>
      {/* hero */}
      <section className="page-hero center">
        <div className="page-hero__bg" />
        <div className="container page-hero__inner">
          <Reveal className="crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <b>Services</b>
          </Reveal>
          <Reveal as="span" className="eyebrow">
            What We Do
          </Reveal>
          <Reveal as="h1">
            One platform, five ways we drive <span className="grad">sustainable excellence</span>
          </Reveal>
          <Reveal as="p" className="page-hero__lead">
            Integrated services that move your organization from honest assessment to world-class recognition — and
            build the capability to stay there.
          </Reveal>
        </div>
        <div className="page-hero__wave" />
      </section>

      {/* service cards */}
      <section className="section">
        <div className="container">
          <div className="feature-grid">
            {serviceLines.map((s, i) => (
              <Reveal as={Link} to={s.to} className="feature" key={s.to} delay={(i % 3) * 80}>
                <div className="feature__ico">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="card__link">{s.cta} →</span>
              </Reveal>
            ))}

            {/* not a full service page yet — send this one to contact */}
            <Reveal as={Link} to="/contact" className="feature feature--dark" delay={160}>
              <div className="feature__ico">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2v20M2 12h20" />
                </svg>
              </div>
              <h3>Reporting & ESG</h3>
              <p>Sustainability & ESG reporting that turns assessment insight into transparent, credible disclosure.</p>
              <span className="card__link">Talk to us →</span>
            </Reveal>
          </div>
        </div>
      </section>

      {/* how it connects */}
      <section className="section section--tint">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--dark">How It Connects</span>
            <h2 className="section__title">
              A continuous loop of <span className="grad">excellence</span>
            </h2>
            <p className="section__sub">Each service strengthens the next — creating momentum, not one-off events.</p>
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

      {/* stat strip */}
      <section className="section">
        <div className="container">
          <div className="strip">
            {strip.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <Counter className="stat__num" to={s.to} suffix={s.suffix} />
                <span>{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* cta band */}
      <section className="section band">
        <Reveal className="container band__inner">
          <h2>
            Not sure where to <span className="grad">start?</span>
          </h2>
          <p>Take a free 15-minute maturity discovery call and we'll recommend the right first step.</p>
          <div className="band__actions">
            <Link to="/contact" className="btn btn--primary">
              Book a discovery call
            </Link>
            <Link to="/value-chain" className="btn btn--ghost">
              See the value chain
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
