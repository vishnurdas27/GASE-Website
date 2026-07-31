import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import Counter from '../components/Counter.jsx';

// Small numbers under the hero headline.
const heroMeta = [
  { to: 2014, label: 'Founded' },
  { to: 14, suffix: '+', label: 'Sectors served' },
  { to: 13, label: 'Value-chain domains' }
];

const journey = [
  {
    year: '2014',
    title: 'The alliance is founded',
    text: 'GASE is established to bring world-class excellence frameworks within reach of every organization, beginning with manufacturing and business-excellence journeys.'
  },
  {
    year: '2016',
    title: 'Award journeys scale',
    text: 'Deep expertise in CII-EXIM Bank Business Excellence and TPM Excellence award assessments guides organizations to national recognition.'
  },
  {
    year: '2019',
    title: 'Beyond the factory floor',
    text: 'Coverage expands into safety, education, and vendor / MSME upgradation — extending excellence across the full value chain.'
  },
  {
    year: '2022',
    title: 'ESG & digital added',
    text: 'Sustainability, ESG reporting, and digital transformation become core assessment domains for future-ready enterprises.'
  },
  {
    year: 'Today',
    title: 'One integrated platform',
    text: 'A single alliance uniting assessment, benchmarking, advisory, capability building, and recognition across 13 value-chain domains and every sector.'
  }
];

const whyPoints = [
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2 2 7l10 5 10-5-10-5Z" />
        <path d="m2 17 10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'End-to-end coverage',
    text: 'Every function and business unit assessed as one connected value chain — not isolated silos.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M9 11l3 3 8-8" />
        <path d="M21 12a9 9 0 1 1-6-8.5" />
      </svg>
    ),
    title: 'Evidence-based',
    text: 'Rigorous, benchmarked assessments grounded in world-class standards and real data.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    title: 'Every size & sector',
    text: 'From MSMEs to multinationals, PSUs to startups — the platform scales to fit.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 19V5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" />
        <path d="M9 13h6M9 17h6" />
      </svg>
    ),
    title: 'Assess to recognize',
    text: 'One journey from diagnostic to capability building to award-winning recognition.'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    title: 'Proven pedigree',
    text: "A decade guiding organizations through the industry's most respected frameworks."
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 3v18M5 10l7-7 7 7" />
      </svg>
    ),
    title: 'Built for the future',
    text: "ESG, digital, and risk embedded so today's excellence stays relevant tomorrow."
  }
];

const values = [
  {
    icon: '🎯',
    title: 'Excellence, always',
    text: 'We hold ourselves and our partners to world-class standards — measurable, benchmarked, and continuously improving.'
  },
  {
    icon: '🌱',
    title: 'Sustainability at the core',
    text: 'Building a better future means excellence that endures — economically, environmentally, and socially.'
  },
  {
    icon: '🤝',
    title: 'Partnership, not audit',
    text: 'We work alongside teams, transferring capability so improvement outlives the engagement.'
  },
  {
    icon: '🔍',
    title: 'Integrity & evidence',
    text: 'Honest, data-grounded assessment — no shortcuts, no vanity metrics, no compromise.'
  }
];

const coverage = ['Assessment & ratings', 'Benchmarking', 'Advisory & consulting', 'Recognition & awards'];

export default function About() {
  return (
    <>
      {/* hero */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__inner">
          <Reveal className="crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <b>About</b>
          </Reveal>
          <Reveal as="span" className="eyebrow">
            Who We Are
          </Reveal>
          <Reveal as="h1">
            A global alliance built to <span className="grad">nurture excellence</span>
          </Reveal>
          <Reveal as="p" className="page-hero__lead">
            Since 2014, GASE has helped organizations of every size and sector turn ambition into measurable,
            sustainable excellence — across every function, unit, and stakeholder in the value chain.
          </Reveal>
          <Reveal className="page-hero__meta">
            {heroMeta.map((m) => (
              <div key={m.label}>
                <Counter to={m.to} suffix={m.suffix} />
                <span>{m.label}</span>
              </div>
            ))}
          </Reveal>
        </div>
        <div className="page-hero__wave" />
      </section>

      {/* who we are + mission/vision */}
      <section className="section" id="who">
        <div className="container split">
          <Reveal className="split__body">
            <span className="eyebrow eyebrow--dark">Our Purpose</span>
            <h2>
              One platform for excellence across the <span className="grad">entire organization</span>
            </h2>
            <div className="prose">
              <p>
                GASE — the Global Alliance for Sustainable Excellence — provides a comprehensive platform that supports
                excellence across the whole organizational value chain, from strategy and governance to operations,
                innovation, customer experience, and sustainability.
              </p>
              <p>
                Our assessments, recognition programs, benchmarking, and advisory services are designed to serve
                organizations of every size and sector. By covering every function, business unit, and stakeholder, we
                help enterprises become resilient, high-performing, and future-ready.
              </p>
            </div>
            <ul className="checks checks--2" style={{ marginTop: '1.5rem' }}>
              {coverage.map((item) => (
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
              <h3 className="gcard__title">Mission</h3>
              <p className="gcard__text">
                To empower excellence across every sector, every function, and every stage of the value chain —
                integrating assessment, benchmarking, consulting, capability building, ratings, reporting, recognition,
                and awards into lasting organizational value.
              </p>
              <hr className="gcard__rule" />
              <h3 className="gcard__title">Vision</h3>
              <p className="gcard__text">
                A world where every organization — from startup to multinational — builds a better future through
                sustainable, benchmarked, and recognized excellence.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* journey timeline */}
      <section className="section section--tint" id="journey">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--dark">Our Journey</span>
            <h2 className="section__title">
              A decade of driving <span className="grad">measurable excellence</span>
            </h2>
          </Reveal>
          <div className="timeline">
            {journey.map((step, i) => (
              <Reveal className="tl" key={step.year} delay={i * 80}>
                <span className="tl__dot" />
                <div className="tl__year">{step.year}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* why gase */}
      <section className="section" id="why">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--dark">Why GASE</span>
            <h2 className="section__title">
              What makes our approach <span className="grad">different</span>
            </h2>
            <p className="section__sub">Not a single audit or a one-off award — an integrated system for lasting value.</p>
          </Reveal>
          <div className="feature-grid">
            {whyPoints.map((point, i) => (
              <Reveal as="article" className="feature" key={point.title} delay={(i % 3) * 80}>
                <span className="feature__num">{String(i + 1).padStart(2, '0')}</span>
                <div className="feature__ico">{point.icon}</div>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* values */}
      <section className="section section--mint" id="values">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--dark">Our Values</span>
            <h2 className="section__title">The principles behind every engagement</h2>
          </Reveal>
          <ul className="iconlist feature-grid feature-grid--2" style={{ gap: '1.6rem' }}>
            {values.map((value, i) => (
              <Reveal as="li" key={value.title} delay={(i % 2) * 80}>
                <span className="il__ico">{value.icon}</span>
                <div>
                  <b>{value.title}</b>
                  <p>{value.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* cta band */}
      <section className="section band">
        <Reveal className="container band__inner">
          <h2>
            Let's build a <span className="grad">better future</span> together
          </h2>
          <p>Discover where your organization stands today — and how far it can go.</p>
          <div className="band__actions">
            <Link to="/contact" className="btn btn--primary">
              Request an assessment
            </Link>
            <Link to="/services" className="btn btn--ghost">
              Explore our services
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
