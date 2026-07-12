import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * useCountUp
 * Animates a number from 0 up to `end` once the element scrolls into view.
 * Runs only once per mount (won't re-trigger on repeated scroll in/out).
 *
 * @param {number} end - target value to count up to
 * @param {number} duration - animation duration in ms (default 2000)
 * @returns {[React.RefObject, number]} - [ref to attach to element, current count]
 */
export default function useCountUp(end, duration = 2000) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    let frameId;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic for a smooth deceleration toward the final number
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    }

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, end, duration]);

  return [ref, count];
}
