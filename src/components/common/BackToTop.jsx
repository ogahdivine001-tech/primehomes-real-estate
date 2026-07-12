import { AnimatePresence, motion } from 'framer-motion';
import useScrollPosition from '../../hooks/useScrollPosition.js';
import './BackToTop.css';

/**
 * BackToTop
 * Floating button that appears after scrolling past 500px and
 * smooth-scrolls back to the top of the page when clicked.
 */
export default function BackToTop() {
  const visible = useScrollPosition(500);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25 }}
        >
          <i className="fa-solid fa-arrow-up" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
