import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Lightbox.css';

/**
 * Lightbox
 * Reusable fullscreen image viewer. Reused by the homepage Gallery
 * section and the dedicated /gallery page.
 *
 * Props:
 *  - images: array of { src, alt, category }
 *  - activeIndex: currently shown index, or null when closed
 *  - onClose, onPrev, onNext: handlers from the parent
 */
export default function Lightbox({ images, activeIndex, onClose, onPrev, onNext }) {
  const isOpen = activeIndex !== null && activeIndex !== undefined;
  const current = isOpen ? images[activeIndex] : null;

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    }
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose, onPrev, onNext]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <button type="button" className="lightbox__close" onClick={onClose} aria-label="Close image viewer">
            <i className="fa-solid fa-xmark" aria-hidden="true" />
          </button>

          <button
            type="button"
            className="lightbox__prev"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            aria-label="Previous image"
          >
            <i className="fa-solid fa-chevron-left" aria-hidden="true" />
          </button>

          <motion.div
            className="lightbox__img-wrap"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={current.src} alt={current.alt} />
            {current.category && <p className="lightbox__caption">{current.category}</p>}
          </motion.div>

          <button
            type="button"
            className="lightbox__next"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            aria-label="Next image"
          >
            <i className="fa-solid fa-chevron-right" aria-hidden="true" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
