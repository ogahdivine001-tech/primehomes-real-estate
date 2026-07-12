import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollManager
 * Two responsibilities on every route change:
 *  1. If the URL has a hash (e.g. /services#buying), smooth-scroll to
 *     that element, offset for the sticky header.
 *  2. Otherwise, scroll to the top of the page — React Router does not
 *     do this automatically, and without it, navigating to a new page
 *     would keep the previous page's scroll position.
 * Renders nothing; it's a behavioral-only component mounted once in App.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a tick for the new page's content to render before measuring
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          const headerOffset = 100;
          const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 80);
      return () => clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname, hash]);

  return null;
}
