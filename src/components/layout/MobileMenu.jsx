import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../data/navLinks.js';

/**
 * MobileMenu
 * Fullscreen overlay navigation for small screens.
 * Animates in/out with Framer Motion; closes on link click or outside action.
 */
export default function MobileMenu({ isOpen, onClose }) {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <nav className="mobile-menu__nav">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <Link
                  to={link.path}
                  className="mobile-menu__link"
                  onClick={onClose}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="mobile-menu__actions">
            <a href="tel:+18005550199" className="header__call">
              <i className="fa-solid fa-phone" aria-hidden="true" />
              +1 (800) 555-0199
            </a>
            <Link to="/contact" className="header__cta" onClick={onClose}>
              Book Inspection
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
