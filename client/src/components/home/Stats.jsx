import Reveal from '../Reveal.jsx';
import Counter from '../Counter.jsx';
import { stats } from '../../data/home.js';

export default function Stats() {
  return (
    <section className="stats section">
      <div className="container stats__grid">
        {stats.map((s, i) => (
          <Reveal className="stat" key={s.label} delay={i * 60}>
            <Counter className="stat__num" to={s.to} suffix={s.suffix} />
            <span>{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
