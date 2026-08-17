import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';

const sectors = [
  { icon: '🏭', name: 'Manufacturing' },
  { icon: '🛎️', name: 'Services' },
  { icon: '🏥', name: 'Healthcare' },
  { icon: '🎓', name: 'Education' },
  { icon: '🏗️', name: 'Infrastructure' },
  { icon: '⚡', name: 'Energy' },
  { icon: '💻', name: 'Information Technology' },
  { icon: '🛍️', name: 'Retail' },
  { icon: '🌾', name: 'Agriculture' },
  { icon: '🚚', name: 'Logistics' },
  { icon: '🏨', name: 'Hospitality' },
  { icon: '🏦', name: 'BFSI' },
  { icon: '🏛️', name: 'Government' },
  { icon: '🏢', name: 'PSUs' },
  { icon: '🤲', name: 'NGOs' },
  { icon: '🚀', name: 'Startups' }
];

const orgTypes = [
  { icon: '🏪', title: 'MSMEs', text: 'Right-sized assessments and capability building that fit smaller teams and budgets.' },
  { icon: '🏢', title: 'Large Enterprises', text: 'Enterprise-wide programs spanning many plants, functions, and business units.' },
  { icon: '🌐', title: 'Multinational Corporations', text: 'Consistent excellence standards deployed across geographies and cultures.' },
  { icon: '🏛️', title: 'Public Sector Organizations', text: 'Governance-first excellence for PSUs and government bodies.' },
  { icon: '🎓', title: 'Educational Institutions', text: 'Education-excellence frameworks that raise quality and outcomes.' },
  { icon: '🤝', title: 'Non-Profit Organizations', text: 'Mission-aligned excellence that maximizes impact per rupee.' }
];

const coverage = [
  'Individuals', 'Teams', 'Departments', 'Functions',
  'Plants', 'Business Units', 'Corporate Offices', 'Enterprise-wide'
];

const reasons = [
  'One proven framework, 16 sectors',
  'Sector-specific criteria & benchmarks',
  'Right-sized for MSME to multinational',
  'Individual to enterprise-wide scope',
  'Cross-sector benchmarking insight'
];

export default function Industries() {
  return (
    <>
      {/* hero */}
      <section className="page-hero center">
        <div className="page-hero__bg" />
        <div className="container page-hero__inner">
          <Reveal className="crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <b>Industries</b>
          </Reveal>
          <Reveal as="span" className="eyebrow">
            Who We Serve
          </Reveal>
          <Reveal as="h1">
            Excellence for every <span className="grad">sector, size, and stage</span>
          </Reveal>
          <Reveal as="p" className="page-hero__lead">
            The principles of sustainable excellence are universal. That's why GASE serves organizations of every kind —
            from a single plant to a global enterprise, from a startup to a government body.
          </Reveal>
        </div>
        <div className="page-hero__wave" />
      </section>

      {/* sectors */}
      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--dark">All Industry Sectors</span>
            <h2 className="section__title">
              Deep coverage across <span className="grad">sixteen sectors</span>
            </h2>
          </Reveal>
          <div className="feature-grid feature-grid--4">
            {sectors.map((sector, i) => (
              <Reveal as="article" className="feature" key={sector.name} delay={(i % 4) * 60}>
                <div className="feature__ico">{sector.icon}</div>
                <h3>{sector.name}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* organization types */}
      <section className="section section--tint">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--dark">All Types of Organizations</span>
            <h2 className="section__title">
              Whatever your <span className="grad">scale or structure</span>
            </h2>
          </Reveal>
          <ul className="iconlist feature-grid feature-grid--3" style={{ gap: '1.6rem' }}>
            {orgTypes.map((org, i) => (
              <Reveal as="li" key={org.title} delay={(i % 3) * 70}>
                <span className="il__ico">{org.icon}</span>
                <div>
                  <b>{org.title}</b>
                  <p>{org.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* coverage scale */}
      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--dark">Complete Organizational Coverage</span>
            <h2 className="section__title">
              From one <span className="grad">individual</span> to the <span className="grad">whole enterprise</span>
            </h2>
            <p className="section__sub">Assess and elevate excellence at any level — and connect them all.</p>
          </Reveal>
          <Reveal className="pills pills--center">
            {coverage.map((level) => (
              <span className="pill pill--solid" key={level}>
                {level}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* why it works */}
      <section className="section section--mint">
        <div className="container split">
          <Reveal className="split__body">
            <span className="eyebrow eyebrow--dark">Sector-Agnostic, Sector-Smart</span>
            <h2>
              Universal principles, <span className="grad">tailored delivery</span>
            </h2>
            <div className="prose">
              <p>
                The fundamentals of excellence — strategy, leadership, quality, sustainability — hold true everywhere.
                But how they show up in a hospital differs from a foundry or a fintech.
              </p>
              <p>
                GASE brings a proven, universal framework and adapts it to the language, regulations, and realities of
                your sector — so the assessment feels made for you, because it is.
              </p>
            </div>
          </Reveal>

          <Reveal className="split__media">
            <ul className="checks checks--card">
              {reasons.map((reason) => (
                <li key={reason}>
                  <svg viewBox="0 0 24 24">
                    <path d="m20 6-11 11-5-5" />
                  </svg>
                  {reason}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* cta band */}
      <section className="section band">
        <Reveal className="container band__inner">
          <h2>
            Excellence, tailored to <span className="grad">your world</span>
          </h2>
          <p>Tell us your sector and goals — we'll design the right journey for you.</p>
          <div className="band__actions">
            <Link to="/contact" className="btn btn--primary">
              Talk to our team
            </Link>
            <Link to="/services" className="btn btn--ghost">
              Explore services
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
