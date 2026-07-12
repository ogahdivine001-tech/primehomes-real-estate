import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Accordion.css';

/**
 * Accordion
 * Reusable single-open accordion (opening a new item closes the previous).
 * Used by the homepage FAQ section and the full /faq page.
 *
 * Props:
 *  - items: array of { id, question, answer }
 *  - defaultOpenId: id of the item open on first render (optional)
 */
export default function Accordion({ items, defaultOpenId = null }) {
  const [openId, setOpenId] = useState(defaultOpenId);

  function toggle(id) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className={`accordion-item ${isOpen ? 'accordion-item--open' : ''}`}>
            <button
              type="button"
              className="accordion-item__trigger"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              id={`faq-trigger-${item.id}`}
            >
              <span className="accordion-item__question">{item.question}</span>
              <span className="accordion-item__icon">
                <i className="fa-solid fa-plus" aria-hidden="true" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="accordion-item__panel"
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="accordion-item__answer">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
