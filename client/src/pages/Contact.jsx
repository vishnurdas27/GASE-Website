import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { site } from '../data/nav.js';

const steps = [
  { n: 1, title: 'We listen', text: 'A short discovery call to understand your organization, goals, and context.' },
  { n: 2, title: 'We propose', text: 'A tailored recommendation — the right service, scope, and journey for you.' },
  { n: 3, title: 'We begin', text: 'Kick off your assessment or program with a clear plan and timeline.' }
];

const faqs = [
  { q: 'How long does an assessment take?', a: "It depends on scope — a single function can be assessed in a couple of weeks, while an enterprise-wide, multi-site assessment may run over several weeks. We'll give you a clear timeline in the proposal." },
  { q: 'Do you work with small organizations?', a: 'Absolutely. We right-size our approach for MSMEs and startups just as readily as for multinationals and PSUs — the framework scales to fit your size and budget.' },
  { q: 'Can you guide us to a specific award?', a: 'Yes. We have deep, hands-on expertise with CII-EXIM Bank Business Excellence, TPM Excellence, and manufacturing, safety, and education excellence award journeys.' },
  { q: 'Which sectors do you cover?', a: 'All of them — from manufacturing, healthcare, and education to energy, IT, BFSI, government, NGOs, and startups. Our framework is universal and tailored to your sector.' },
  { q: 'Is the first conversation free?', a: "Yes — the initial discovery call is free and with no obligation. It's simply the best way for both of us to see if there's a fit." }
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(0);

  function toggleFaq(i) {
    setOpenFaq(openFaq === i ? -1 : i);
  }

  return (
    <>
      {/* hero */}
      <section className="page-hero center">
        <div className="page-hero__bg" />
        <div className="container page-hero__inner">
          <Reveal className="crumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <b>Contact</b>
          </Reveal>
          <Reveal as="span" className="eyebrow">
            Start the Conversation
          </Reveal>
          <Reveal as="h1">
            Let's nurture excellence across your <span className="grad">value chain</span>
          </Reveal>
          <Reveal as="p" className="page-hero__lead">
            Tell us about your organization and goals. Our excellence advisors will design the right assessment and
            journey for you — usually within one working day.
          </Reveal>
        </div>
        <div className="page-hero__wave" />
      </section>

      {/* contact info + form */}
      <section className="section">
        <div className="container cta__grid" style={{ alignItems: 'start' }}>
          <Reveal>
            <span className="eyebrow eyebrow--dark">Get In Touch</span>
            <h2 className="section__title">We'd love to hear from you</h2>
            <p className="lead" style={{ margin: '1rem 0 2rem' }}>
              Whether you're ready for a full assessment or just exploring, reach out — no obligation, no jargon.
            </p>
            <ul className="iconlist">
              <li>
                <span className="il__ico">
                  <svg viewBox="0 0 24 24">
                    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.5.6 3.8.6a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.4a1 1 0 0 1 1 1c0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1l-2.1 2Z" />
                  </svg>
                </span>
                <div>
                  <b>Call us</b>
                  <p>
                    <a href={site.phoneHref}>{site.phone}</a>
                  </p>
                </div>
              </li>
              <li>
                <span className="il__ico">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 4h16v16H4z" />
                    <path d="m4 6 8 6 8-6" />
                  </svg>
                </span>
                <div>
                  <b>Email us</b>
                  <p>
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </p>
                </div>
              </li>
              <li>
                <span className="il__ico">🏢</span>
                <div>
                  <b>Industry</b>
                  <p>{site.industry}</p>
                </div>
              </li>
              <li>
                <span className="il__ico">📅</span>
                <div>
                  <b>Trusted since</b>
                  <p>{site.founded} · serving 16+ sectors</p>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal>
            <ContactForm submitLabel="Send message" />
          </Reveal>
        </div>
      </section>

      {/* what happens next */}
      <section className="section section--tint">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--dark">What Happens Next</span>
            <h2 className="section__title">Three simple steps to get started</h2>
          </Reveal>
          <div className="steps steps--3">
            {steps.map((step, i) => (
              <Reveal className="step" key={step.n} delay={i * 80}>
                <div className="step__n">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="section">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--dark">FAQ</span>
            <h2 className="section__title">
              Questions, <span className="grad">answered</span>
            </h2>
          </Reveal>
          <Reveal className="acc faq">
            {faqs.map((item, i) => (
              <div className={`acc__item${openFaq === i ? ' open' : ''}`} key={item.q}>
                <button className="acc__head" aria-expanded={openFaq === i} onClick={() => toggleFaq(i)}>
                  {item.q} <span className="plus" />
                </button>
                <div className="acc__body">
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
