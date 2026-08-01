import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';

const specialties = [
  { icon: '🏅', title: 'Business Excellence — CII-EXIM Bank Award', text: 'End-to-end guidance across the complete award assessment journey, from readiness to feedback.' },
  { icon: '⚙️', title: 'TPM Excellence Award Journey', text: 'Total Productive Maintenance deployment and structured award readiness for every category.' },
  { icon: '🏭', title: 'Manufacturing Excellence', text: 'Operational transformation projects that build genuinely world-class manufacturing.' },
  { icon: '🦺', title: 'Safety Excellence', text: 'Building a resilient, zero-harm safety culture recognized across the industry.' },
  { icon: '🎓', title: 'Education Excellence', text: 'Elevating institutional quality, governance, and learning outcomes to award standard.' },
  { icon: '🧭', title: 'DOJO & Vendor / MSME Upgradation', text: 'Capability building and strategy deployment that lift suppliers and MSMEs to recognition.' }
];

const journey = [
  { stage: 'Stage 01', title: 'Readiness & gap review', text: 'An honest assessment of where you stand against the award criteria, and what it will take to compete.' },
  { stage: 'Stage 02', title: 'Capability & deployment', text: 'Close priority gaps through advisory, DOJO training, and strategy deployment across teams.' },
  { stage: 'Stage 03', title: 'Application & documentation', text: 'Build a compelling, evidence-backed application that tells your excellence story clearly.' },
  { stage: 'Stage 04', title: 'Site visit & assessment', text: 'Prepare leaders and teams to showcase their work with confidence to external assessors.' },
  { stage: 'Stage 05', title: 'Recognition & beyond', text: 'Celebrate the award — then use the assessor feedback to fuel the next cycle of improvement.' }
];

const levels = [
  { mark: '★', title: 'Commitment to Excellence', text: 'Formal recognition of a credible, structured start on the journey.' },
  { mark: '★★', title: 'Recognized for Excellence', text: 'Demonstrated, benchmarked progress across multiple value-chain domains.' },
  { mark: '★★★', title: 'Excellence Award', text: 'Award-winning performance validated by independent external assessment.' },
  { mark: '👑', title: 'Role-Model / Sustained Excellence', text: 'World-class, sustained results that set the benchmark for the sector.' }
];

export default function Recognition() {
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
            <b>Recognition &amp; Awards</b>
          </Reveal>
          <Reveal as="span" className="eyebrow">
            Service 03
          </Reveal>
          <Reveal as="h1">
            Recognition that <span className="grad">accelerates</span> excellence
          </Reveal>
          <Reveal as="p" className="page-hero__lead">
            Award journeys and recognition programs that don't just celebrate what you've achieved — they structure the
            improvement that gets you there and inspire the whole organization to keep climbing.
          </Reveal>
          <Reveal className="page-hero__actions">
            <Link to="/contact" className="btn btn--primary">
              Begin your award journey
            </Link>
            <Link to="#specialties" className="btn btn--ghost">
              Our award expertise
            </Link>
          </Reveal>
        </div>
        <div className="page-hero__wave" />
      </section>

      {/* award specialties */}
      <section className="section" id="specialties">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--dark">Our Specialties</span>
            <h2 className="section__title">
              Proven expertise across the most respected <span className="grad">award frameworks</span>
            </h2>
            <p className="section__sub">A decade guiding organizations to national and world-class recognition.</p>
          </Reveal>
          <div className="feature-grid">
            {specialties.map((item, i) => (
              <Reveal as="article" className="feature" key={item.title} delay={(i % 3) * 80}>
                <div className="feature__ico">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* award journey timeline */}
      <section className="section section--tint">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--dark">The Award Journey</span>
            <h2 className="section__title">
              A guided path to <span className="grad">recognition</span>
            </h2>
            <p className="section__sub">We walk beside you at every stage — the journey itself builds the excellence.</p>
          </Reveal>
          <div className="timeline">
            {journey.map((step, i) => (
              <Reveal className="tl" key={step.stage} delay={i * 80}>
                <span className="tl__dot" />
                <div className="tl__year">{step.stage}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* recognition levels */}
      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--dark">Recognition Levels</span>
            <h2 className="section__title">Every milestone worth celebrating</h2>
          </Reveal>
          <div className="ladder">
            {levels.map((level, i) => (
              <Reveal className="rung" key={level.title} delay={i * 70}>
                <span className="rung__lvl">{level.mark}</span>
                <div>
                  <b>{level.title}</b>
                  <p>{level.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* testimonial */}
      <section className="section section--mint">
        <div className="container">
          <Reveal as="figure" className="quote">
            <div className="quote__mark">&ldquo;</div>
            <blockquote>
              The award journey didn't just win us recognition — it transformed how our plants operate. GASE turned the
              assessment criteria into a practical improvement engine.
            </blockquote>
            <figcaption>
              <span className="quote__avatar">VP</span>
              <span>
                <b>VP, Operations</b>
                <em>Automotive Components Manufacturer</em>
              </span>
            </figcaption>
          </Reveal>
        </div>
      </section>

      {/* cta band */}
      <section className="section band">
        <Reveal className="container band__inner">
          <h2>
            Your excellence <span className="grad">deserves recognition</span>
          </h2>
          <p>Start the journey to your first — or next — excellence award.</p>
          <div className="band__actions">
            <Link to="/contact" className="btn btn--primary">
              Begin your award journey
            </Link>
            <Link to="/advisory" className="btn btn--ghost">
              Next: Advisory →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
