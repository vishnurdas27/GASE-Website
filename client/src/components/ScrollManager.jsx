import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Jump to the top on every navigation, unless the URL points at an
// anchor like /value-chain#esg, in which case scroll to that instead.
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
