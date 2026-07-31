import { useEffect, useRef, useState } from 'react';

// Counts up from 0 when the number scrolls into view.
export default function Counter({ to = 0, prefix = '', suffix = '', duration = 1600, className }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to);
      return;
    }

    let frame;

    function animate() {
      const start = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // starts quick, slows at the end
        setValue(Math.round(eased * to));
        if (progress < 1) frame = requestAnimationFrame(tick);
      }

      frame = requestAnimationFrame(tick);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    io.observe(ref.current);

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
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
