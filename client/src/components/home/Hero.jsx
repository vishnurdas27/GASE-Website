import { Link } from 'react-router-dom';
import Reveal from '../Reveal.jsx';
import { orbitChips } from '../../data/home.js';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__mesh" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <Reveal as="span" className="eyebrow">
            Global Alliance for Sustainable Excellence
          </Reveal>

          <Reveal as="h1" className="hero__title">
            Nurturing Sustainable Excellence Across the <span className="grad">Value Chain</span>
          </Reveal>

          <Reveal as="p" className="hero__lead">
            One platform integrating assessment, benchmarking, consulting, capability building, ratings, reporting,
            recognition, and awards — to build resilient, high-performing, future-ready enterprises.
          </Reveal>

          <Reveal className="hero__actions">
            <Link to="/services" className="btn btn--primary">
              Explore Our Platform
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              <svg className="ico" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7L8 5Z" />
              </svg>
              Start Your Journey
            </Link>
          </Reveal>

          <Reveal className="hero__trust">
            <span>Recognized capability across</span>
            <div className="hero__trust-tags">
              <b>CII-EXIM Bank</b>
              <span>·</span>
              <b>TPM Excellence</b>
              <span>·</span>
              <b>ESG &amp; Sustainability</b>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero__panel">
          <div className="orbit">
            <div className="orbit__core">
              <span>GASE</span>
              <small>Value Chain</small>
            </div>
            <div className="orbit__ring orbit__ring--1" />
            <div className="orbit__ring orbit__ring--2" />
            {orbitChips.map((chip, i) => (
              <i className={`chip chip--${i + 1}`} key={chip}>
                {chip}
              </i>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="hero__wave" aria-hidden="true" />
    </section>
  );
}
