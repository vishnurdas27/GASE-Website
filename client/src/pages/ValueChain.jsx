import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import Counter from '../components/Counter.jsx';

// Four clusters, thirteen domains. Each domain id matches the anchor the
// header's Value Chain menu links to (e.g. /value-chain#supply-chain).
const clusters = [
  {
    num: '01',
    eyebrow: 'Strategy & Direction',
    title: 'Setting the course',
    grid: '',
    domains: [
      { id: 'strategy', icon: '🧭', title: 'Strategy', text: 'Clear direction, goals, and competitive positioning that align the entire enterprise behind a common ambition.' },
      { id: 'leadership', icon: '👥', title: 'Leadership', text: 'Visible, capable leaders who set direction, model the values, and grow the next generation of talent.' },
      { id: 'innovation', icon: '💡', title: 'Innovation', text: 'Systematic idea generation, R&D, and experimentation that keep you ahead of a changing market.' }
    ]
  },
  {
    num: '02',
    eyebrow: 'Operations & Delivery',
    title: 'Delivering the value',
    grid: 'feature-grid--4',
    domains: [
      { id: 'operations', icon: '⚙️', title: 'Operations', text: 'Efficient, reliable core processes that deliver value consistently, day in and day out.' },
      { id: 'supply-chain', icon: '🔗', title: 'Supply Chain', text: 'Resilient, responsive sourcing, logistics, and vendor networks that flex with demand.' },
      { id: 'quality', icon: '✅', title: 'Quality', text: 'Built-in quality systems that delight customers, cut waste, and protect your reputation.' },
      { id: 'customer-experience', icon: '💚', title: 'Customer Experience', text: 'Every touchpoint designed around genuine customer value and loyalty.' }
    ]
  },
  {
    num: '03',
    eyebrow: 'Digital & Sustainability',
    title: 'Future-proofing the enterprise',
    grid: 'feature-grid--2',
    domains: [
      { id: 'digital-transformation', icon: '📲', title: 'Digital Transformation', text: 'Practical, outcome-focused technology adoption that modernizes operations and decision-making — without transformation fatigue.' },
      { id: 'esg', icon: '🌍', title: 'ESG & Sustainability', text: 'Environmental, social, and governance practice — measured, reported, and genuinely embedded for the long term.' }
    ]
  },
  {
    num: '04',
    eyebrow: 'Risk & Enablers',
    title: 'The foundations that hold it together',
    grid: 'feature-grid--4',
    domains: [
      { id: 'risk', icon: '🛡️', title: 'Risk', text: 'Proactive identification, assessment, and management of enterprise risk before it bites.' },
      { id: 'human-resources', icon: '🤝', title: 'Human Resources', text: 'Attract, develop, and retain the people that excellence ultimately depends on.' },
      { id: 'finance', icon: '📊', title: 'Finance', text: 'Disciplined financial management and capital allocation that fuel sustainable growth.' },
      { id: 'governance', icon: '⚖️', title: 'Governance', text: 'Transparent, accountable oversight and controls that earn stakeholder trust.' }
    ]
  }
];

const stats = [
  { to: 13, label: 'Domains assessed' },
  { to: 4, label: 'Integrated clusters' },
  { to: 5, label: 'Maturity levels each' },
  { to: 1, label: 'Connected value chain' }
];

export default function ValueChain() {
  return (
    <>
      {/* hero */}
      <section className="page-hero center">
        <div className="page-hero__bg" />
        <div className="container page-hero__inner">
          <Reveal className="crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <b>Value Chain</b>
          </Reveal>
          <Reveal as="span" className="eyebrow">
            End-to-End Assessment
          </Reveal>
          <Reveal as="h1">
            Every function. Every unit. <span className="grad">Every stakeholder.</span>
          </Reveal>
          <Reveal as="p" className="page-hero__lead">
            GASE assesses and elevates all thirteen domains that define a future-ready enterprise — as one connected
            value chain, not thirteen disconnected silos.
          </Reveal>
        </div>
        <div className="page-hero__wave" />
      </section>

      {/* intro */}
      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--dark">The GASE Approach</span>
            <h2 className="section__title">
              Excellence is a <span className="grad">chain</span>, only as strong as its weakest link
            </h2>
            <p className="section__sub">
              A brilliant strategy fails on weak operations; world-class quality is undone by poor governance. We look at
              the whole system — so improvement in one domain strengthens the rest.
            </p>
          </Reveal>
        </div>
      </section>

      {/* the four clusters of domains */}
      {clusters.map((cluster, i) => (
        <section className={`section${i % 2 === 0 ? ' section--tint' : ''}`} key={cluster.num}>
          <div className="container">
            <Reveal className="section__head section__head--left">
              <span className="eyebrow eyebrow--dark">
                {cluster.num} — {cluster.eyebrow}
              </span>
              <h2 className="section__title">{cluster.title}</h2>
            </Reveal>
            <div className={`feature-grid ${cluster.grid}`}>
              {cluster.domains.map((domain, j) => (
                <Reveal as="article" className="feature domain" id={domain.id} key={domain.id} delay={(j % 4) * 70}>
                  <div className="feature__ico">{domain.icon}</div>
                  <h3>{domain.title}</h3>
                  <p>{domain.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* stats */}
      <section className="section section--mint">
        <div className="container">
          <div className="strip">
            {stats.map((s, i) => (
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
            Assess your whole <span className="grad">value chain</span>
          </h2>
          <p>Discover the strengths and gaps across all thirteen domains — and how they connect.</p>
          <div className="band__actions">
            <Link to="/contact" className="btn btn--primary">
              Request an assessment
            </Link>
            <Link to="/assessments" className="btn btn--ghost">
              How assessment works
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
