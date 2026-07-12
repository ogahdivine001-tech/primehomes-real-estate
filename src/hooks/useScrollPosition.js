import { useEffect, useState } from 'react';

/**
 * useScrollPosition
 * Returns true once the page has scrolled past `threshold` pixels.
 * Used by the Header to switch from transparent -> glassmorphism.
 */
export default function useScrollPosition(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    handleScroll(); // set initial state on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrolled;
}
