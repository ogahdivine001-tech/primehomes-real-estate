import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './VideoSection.css';

/**
 * VideoSection
 * Homepage section (#12 in the spec): full-width cinematic banner with
 * a pulsing play button that opens a modal video player. Closes on the
 * X button, backdrop click, or Escape key.
 */
export default function VideoSection() {
  const [open, setOpen] = useState(false);

  // Allow closing the modal with the Escape key for accessibility
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <section className="video-section" aria-label="Company story video">
      <div className="video-section__content">
        <span className="video-section__eyebrow">Our Story</span>
        <h2 className="video-section__title">
          Discover What Makes PrimeHomes Different
        </h2>

        <button
          type="button"
          className="video-section__play-btn"
          onClick={() => setOpen(true)}
          aria-label="Play company story video"
        >
          <i className="fa-solid fa-play" aria-hidden="true" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="video-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Video player"
          >
            <motion.div
              className="video-modal__inner"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="video-modal__close"
                onClick={() => setOpen(false)}
                aria-label="Close video"
              >
                <i className="fa-solid fa-xmark" aria-hidden="true" />
              </button>
              <video
                src="/src/assets/videos/company-intro.mp4"
                controls
                autoPlay
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
