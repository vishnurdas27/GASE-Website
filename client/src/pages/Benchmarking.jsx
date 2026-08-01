import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';

const positioning = [
  { label: 'Your organization', score: '78', w: '78%' },
  { label: 'Top quartile', score: '91', w: '91%', gold: true },
  { label: 'Sector average', score: '64', w: '64%' },
  { label: 'Sector median', score: '59', w: '59%' }
];

const approaches = [
  {
    id: 'internal',
    label: 'Internal',
    title: 'Internal benchmarking',
    text: 'Compare plants, units, or teams within your own organization to spread proven practice and lift every site to the level of your best.'
  },
  {
    id: 'competitive',
    label: 'Competitive',
    title: 'Competitive benchmarking',
    text: 'Measure directly against sector peers and rivals to understand your market position and defend or extend your lead.'
  },
  {
    id: 'functional',
    label: 'Functional',
    title: 'Functional benchmarking',
    text: 'Compare a specific function — supply chain, quality, HR — against strong performers in any industry doing it exceptionally well.'
  },
  {
    id: 'best',
    label: 'Best-in-class',
    title: 'Best-in-class benchmarking',
    text: 'Aim at world-class role models and award-winners to set the highest bar and define what truly great looks like.'
  }
];

const process = [
  { n: 1, title: 'Normalize', text: 'Map your metrics to a common, comparable framework and peer group.' },
  { n: 2, title: 'Compare', text: 'Position your performance against average, median, and top-quartile benchmarks.' },
  { n: 3, title: 'Target', text: 'Set realistic, evidence-based improvement targets and the actions to reach them.' }
];

const benefits = [
  { icon: '🎯', title: 'Prioritize with evidence', text: 'Invest where the gap to leaders is widest and the payoff greatest.' },
  { icon: '📈', title: 'Set credible targets', text: 'Goals grounded in what the best actually achieve, not guesswork.' },
  { icon: '🔎', title: 'Uncover blind spots', text: 'Discover where you quietly lag — before competitors exploit it.' },
  { icon: '🏆', title: 'Build the award case', text: 'Benchmarked evidence is the backbone of any recognition journey.' }
];

export default function Benchmarking() {
  const [activeTab, setActiveTab] = useState(approaches[0].id);

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
            <b>Benchmarking</b>
          </Reveal>
          <Reveal as="span" className="eyebrow">
            Service 02
          </Reveal>
          <Reveal as="h1">
            See how you compare to the <span className="grad">best</span>
          </Reveal>
          <Reveal as="p" className="page-hero__lead">
            Benchmarking turns your assessment into context — measuring your performance against sector peers, leaders,
            and world-class practice so you know exactly where the opportunity lies.
          </Reveal>
          <Reveal className="page-hero__actions">
            <Link to="/contact" className="btn btn--primary">
              Benchmark my organization
            </Link>
            <Link to="#position" className="btn btn--ghost">
              See an example
            </Link>
          </Reveal>
        </div>
        <div className="page-hero__wave" />
      </section>

      {/* peer positioning example */}
      <section className="section" id="position">
        <div className="container split split--rev">
          <Reveal className="split__media">
            <div className="gcard gcard--light">
              <b className="scorecard__label">Peer positioning</b>
              <p className="scorecard__caption">Operations maturity vs. sector</p>
              <div className="bars">
                {positioning.map((bar) => (
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
              <p className="scorecard__note">
                You lead the average by <b>+14 points</b> — 13 from the top quartile.
              </p>
            </div>
          </Reveal>

          <Reveal className="split__body">
            <span className="eyebrow eyebrow--dark">Context Is Everything</span>
            <h2>
              A score means little <span className="grad">without a peer group</span>
            </h2>
            <div className="prose">
              <p>
                Is a maturity of 3.8 good? It depends entirely on your sector, size, and ambition. Benchmarking places
                your results in a rigorous peer context so leadership can prioritize with confidence.
              </p>
              <p>
                We draw on cross-sector data and world-class frameworks to show not just where you are — but how far the
                best have gone, and what it took to get there.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* approaches (tabs) */}
      <section className="section section--tint">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--dark">Approaches</span>
            <h2 className="section__title">
              Four lenses on <span className="grad">performance</span>
            </h2>
            <p className="section__sub">We tailor the comparison to the question you need answered.</p>
          </Reveal>
          <Reveal>
            <div className="tabs">
              {approaches.map((a) => (
                <button
                  key={a.id}
                  className={`tab${activeTab === a.id ? ' active' : ''}`}
                  onClick={() => setActiveTab(a.id)}
                >
                  {a.label}
                </button>
              ))}
            </div>
            {approaches.map((a) => (
              <div className={`feature${activeTab === a.id ? ' active' : ''}`} data-panel={a.id} key={a.id}>
                <h3>{a.title}</h3>
                <p className="lead" style={{ marginTop: '.5rem' }}>
                  {a.text}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* how it works */}
      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--dark">How It Works</span>
            <h2 className="section__title">From data to decisions</h2>
          </Reveal>
          <div className="steps steps--3">
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

      {/* why benchmark */}
      <section className="section section--mint">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--dark">Why Benchmark</span>
            <h2 className="section__title">Turn comparison into competitive advantage</h2>
          </Reveal>
          <ul className="iconlist feature-grid feature-grid--2" style={{ gap: '1.6rem' }}>
            {benefits.map((item, i) => (
              <Reveal as="li" key={item.title} delay={(i % 2) * 80}>
                <span className="il__ico">{item.icon}</span>
                <div>
                  <b>{item.title}</b>
                  <p>{item.text}</p>
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
            Where do you stand <span className="grad">against the best?</span>
          </h2>
          <p>Let's build your peer group and reveal the real opportunity.</p>
          <div className="band__actions">
            <Link to="/contact" className="btn btn--primary">
              Start benchmarking
            </Link>
            <Link to="/recognition" className="btn btn--ghost">
              Next: Recognition →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
