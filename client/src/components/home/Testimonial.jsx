import Reveal from '../Reveal.jsx';

export default function Testimonial() {
  return (
    <section className="testimonial section">
      <div className="container">
        <Reveal as="figure" className="quote">
          <div className="quote__mark">&ldquo;</div>
          <blockquote>
            GASE gave us a single, coherent view of excellence across our entire value chain. The assessment was
            rigorous, the benchmarking eye-opening, and the advisory turned insight into real, measurable capability.
          </blockquote>
          <figcaption>
            <span className="quote__avatar">RS</span>
            <span>
              <b>Head of Operations</b>
              <em>Leading Manufacturing Enterprise</em>
            </span>
          </figcaption>
        </Reveal>
      </div>
    </section>
  );
}
