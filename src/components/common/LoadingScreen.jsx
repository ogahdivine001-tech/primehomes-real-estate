import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './LoadingScreen.css';

/**
 * LoadingScreen
 * Brief branded splash screen shown while the initial app shell mounts.
 * Uses a minimum display time so it doesn't flash too quickly, then
 * fades out. In production this is also where you'd wait on critical
 * assets (e.g. hero image) if desired.
 */
export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const MIN_DISPLAY_MS = 900;
    const timer = setTimeout(() => setVisible(false), MIN_DISPLAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="loading-screen__logo">
            <i className="fa-solid fa-building-columns" aria-hidden="true" />
            <span>PrimeHomes</span>
          </div>
          <div className="loading-screen__bar">
            <div className="loading-screen__bar-fill" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
