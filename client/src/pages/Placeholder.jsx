import Reveal from '../components/Reveal.jsx';

// Temporary page shell — replaced step by step as each real page is built.
export default function Placeholder({ title }) {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow eyebrow--dark">Coming up</span>
          <h1 className="section__title">
            {title} <span className="grad">page</span>
          </h1>
          <p className="section__sub">This page is built in an upcoming step.</p>
        </Reveal>
      </div>
    </section>
  );
}
