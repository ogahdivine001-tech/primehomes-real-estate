import { motion } from 'framer-motion';
import './SectionTitle.css';

/**
 * SectionTitle
 * Consistent heading block used at the top of every section
 * (eyebrow label + large heading + optional supporting text).
 *
 * Props:
 *  - eyebrow: small gold label above the heading
 *  - title: main heading text (string or JSX, e.g. with a <span> highlight)
 *  - subtitle: supporting paragraph text
 *  - align: 'center' | 'left'
 *  - light: true when used on a dark background section
 */
export default function SectionTitle({ eyebrow, title, subtitle, align = 'center', light = false }) {
  return (
    <motion.div
      className={`section-title section-title--${align} ${light ? 'section-title--light' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {eyebrow && <span className="section-title__eyebrow">{eyebrow}</span>}
      <h2 className="section-title__heading">{title}</h2>
      {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
    </motion.div>
  );
}
