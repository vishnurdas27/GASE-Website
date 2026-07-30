import Reveal from '../Reveal.jsx';
import ContactForm from '../ContactForm.jsx';
import { site } from '../../data/nav.js';

export default function Cta() {
  return (
    <section className="cta section" id="contact">
      <div className="container cta__grid">
        <Reveal className="cta__body">
          <span className="eyebrow eyebrow--light">Start the conversation</span>
          <h2 className="section__title section__title--light">
            Ready to nurture excellence across your <span className="grad">value chain?</span>
          </h2>
          <p>
            Tell us about your organization and goals. Our excellence advisors will design the right assessment and
            journey for you.
          </p>

          <ul className="cta__contacts">
            <li>
              <span className="cta__ico">
                <svg viewBox="0 0 24 24">
                  <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.5.6 3.8.6a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.4a1 1 0 0 1 1 1c0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1l-2.1 2Z" />
                </svg>
              </span>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <span className="cta__ico">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h16v16H4z" />
                  <path d="m4 6 8 6 8-6" />
                </svg>
              </span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <span className="cta__ico">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </span>
              {site.industry}
            </li>
          </ul>
        </Reveal>

        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
