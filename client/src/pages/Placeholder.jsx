import Reveal from '../components/Reveal.jsx';

// Stand-in for pages that aren't built yet.
export default function Placeholder({ title }) {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow eyebrow--dark">Coming up</span>
          <h1 className="section__title">
            {title} <span className="grad">page</span>
          </h1>
          <p className="section__sub">This page is still being put together.</p>
        </Reveal>
      </div>
    </section>
  );
}
