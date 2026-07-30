import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-reveal wrapper. Renders `as` (default div) with the `.reveal` class and
 * adds `.in` when it scrolls into view. Honours prefers-reduced-motion.
 *
 *   <Reveal as="h2" className="section__title" delay={80}>Title</Reveal>
 */
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = ['reveal', shown ? 'in' : '', className].filter(Boolean).join(' ');
  return (
    <Tag ref={ref} className={cls} style={delay ? { transitionDelay: `${delay}ms` } : undefined} {...rest}>
      {children}
    </Tag>
  );
}
