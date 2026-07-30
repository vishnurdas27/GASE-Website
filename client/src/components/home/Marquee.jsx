import { sectors } from '../../data/home.js';

// Scrolling list of sectors. The list runs twice so the loop has no visible seam.
export default function Marquee() {
  return (
    <section className="marquee" aria-label="Sectors served">
      <div className="marquee__track">
        {sectors.map((s) => (
          <span key={s}>{s}</span>
        ))}
        {sectors.map((s) => (
          <span key={`dup-${s}`} aria-hidden="true">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
