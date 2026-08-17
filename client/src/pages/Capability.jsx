import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import Counter from '../components/Counter.jsx';

const cycle = [
  { n: 1, title: 'Aware', text: 'Understand the why, the standard, and what great looks like.' },
  { n: 2, title: 'Skill', text: 'Learn the method hands-on in the DOJO, free from live-line pressure.' },
  { n: 3, title: 'Practise', text: 'Apply on the job with coaching until it becomes second nature.' },
  { n: 4, title: 'Master', text: 'Perform to standard consistently and independently.' },
  { n: 5, title: 'Coach', text: 'Teach the next cohort — capability multiplies itself.' }
];

const programs = [
  { title: 'DOJO Training & Simulation', text: 'Hands-on skill dojos for quality, maintenance, safety, and standard work — teams practise real tasks with real tools until performance meets standard.' },
  { title: 'TPM Pillar Development', text: 'Build the eight pillars of Total Productive Maintenance, from autonomous maintenance to focused improvement — the foundation of any TPM Excellence award journey.' },
  { title: 'Lean, Kaizen & Problem Solving', text: 'Practical waste elimination, kaizen events, and structured problem-solving (A3, why-why, PDCA) that teams can run themselves.' },
  { title: 'Safety & Behavioural Training', text: 'Skill-building for a zero-harm culture — hazard identification, safe standard work, and behaviour-based safety leadership.' },
  { title: 'Leadership & Strategy Deployment', text: 'Equip leaders to cascade strategy, run daily management, and coach improvement — so excellence is led, not just mandated.' },
  { title: 'Vendor / MSME Upgradation', text: 'Structured capability programs that lift suppliers and MSMEs to the standards your value chain demands.' }
];

const stats = [
  { to: 6, label: 'Core program tracks' },
  { to: 3, label: 'Learning formats' },
  { to: 8, label: 'TPM pillars covered' },
  { to: 100, suffix: '%', label: 'Hands-on, practical' }
];

export default function Capability() {
  const [openIndex, setOpenIndex] = useState(0);

  function toggleProgram(i) {
    setOpenIndex(openIndex === i ? -1 : i);
  }

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
            <b>Capability Building &amp; DOJO</b>
          </Reveal>
          <Reveal as="span" className="eyebrow">
            Service 05
          </Reveal>
          <Reveal as="h1">
            Excellence you can <span className="grad">practise</span>
          </Reveal>
          <Reveal as="p" className="page-hero__lead">
            Lasting excellence lives in people, not PowerPoint. Our DOJO training and capability programs let teams learn
            by doing — building the skills, habits, and confidence to sustain excellence long after we leave.
          </Reveal>
          <Reveal className="page-hero__actions">
            <Link to="/contact" className="btn btn--primary">
              Build your team's capability
            </Link>
            <Link to="#programs" className="btn btn--ghost">
              Explore programs
            </Link>
          </Reveal>
        </div>
        <div className="page-hero__wave" />
      </section>

      {/* what is a dojo */}
      <section className="section">
        <div className="container split">
          <Reveal className="split__media">
            <div className="gcard">
              <div className="gcard__emoji">🥋</div>
              <h3 className="gcard__title">What is a DOJO?</h3>
              <p className="gcard__text">
                Borrowed from the martial-arts hall, a DOJO is a hands-on practice space where teams rehearse real tasks
                in a safe, simulated environment — mastering a skill before applying it on the live line.
              </p>
              <p className="gcard__text">
                See one. Do one. Teach one. Skills stick because they're practised, not just presented.
              </p>
            </div>
          </Reveal>

          <Reveal className="split__body">
            <span className="eyebrow eyebrow--dark">Learn By Doing</span>
            <h2>
              Training that changes <span className="grad">behaviour</span>, not just knowledge
            </h2>
            <div className="prose">
              <p>
                Classroom theory fades within days. DOJO-based learning uses real tools, real materials, and real
                scenarios so that new standards become muscle memory across the workforce.
              </p>
              <p>
                We combine DOJO simulation with on-the-job coaching and structured strategy deployment — the same
                approach that powers award-winning TPM and manufacturing-excellence journeys.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* learning cycle */}
      <section className="section section--tint">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--dark">The Learning Cycle</span>
            <h2 className="section__title">
              From awareness to <span className="grad">self-sustaining mastery</span>
            </h2>
          </Reveal>
          <div className="steps steps--5">
            {cycle.map((step, i) => (
              <Reveal className="step" key={step.n} delay={i * 70}>
                <div className="step__n">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* programs accordion */}
      <section className="section" id="programs">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--dark">Programs</span>
            <h2 className="section__title">
              A curriculum for the whole <span className="grad">value chain</span>
            </h2>
            <p className="section__sub">Tailored to your sector, maturity, and goals.</p>
          </Reveal>
          <Reveal className="acc">
            {programs.map((program, i) => (
              <div className={`acc__item${openIndex === i ? ' open' : ''}`} key={program.title}>
                <button className="acc__head" aria-expanded={openIndex === i} onClick={() => toggleProgram(i)}>
                  {program.title} <span className="plus" />
                </button>
                <div className="acc__body">
                  <p>{program.text}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

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
            Build capability that <span className="grad">outlasts the project</span>
          </h2>
          <p>Give your teams the skills to sustain excellence on their own.</p>
          <div className="band__actions">
            <Link to="/contact" className="btn btn--primary">
              Start a program
            </Link>
            <Link to="/value-chain" className="btn btn--ghost">
              Explore the value chain
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
