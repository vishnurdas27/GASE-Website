import { useEffect, useRef, useState } from 'react';

// Counts up from zero once the number scrolls into view.
export default function Counter({ to = 0, prefix = '', suffix = '', duration = 1600, className }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      setValue(to);
      return;
    }

    let raf;
    const run = () => {
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // ease out, fast start then settle
        setValue(Math.round(eased * to));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    };

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run();
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <b ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </b>
  );
}
