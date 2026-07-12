import { motion } from 'framer-motion';
import useCountUp from '../../hooks/useCountUp.js';
import './Stats.css';

/**
 * StatItem
 * A single animated counter (icon + number + label).
 * Separated so each item can independently trigger its own
 * useInView/useCountUp animation as it scrolls into the viewport.
 */
function StatItem({ icon, value, suffix, label, index }) {
  const [ref, count] = useCountUp(value, 1800 + index * 150);

  return (
    <motion.div
      ref={ref}
      className="stats__item"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="stats__icon">
        <i className={icon} aria-hidden="true" />
      </div>
      <div className="stats__number">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="stats__label">{label}</div>
    </motion.div>
  );
}

/**
 * Stats
 * Reusable animated-counter row/grid. Pass any array of
 * { icon, value, suffix, label } items.
 */
export default function Stats({ items }) {
  return (
    <div className="stats">
      {items.map((stat, i) => (
        <StatItem key={stat.id} index={i} {...stat} />
      ))}
    </div>
  );
}
