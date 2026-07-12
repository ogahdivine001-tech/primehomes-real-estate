import { motion } from 'framer-motion';
import PropertyFilterBar from '../property/PropertyFilterBar.jsx';
import '../property/PropertyFilterBar.css';

/**
 * PropertySearchSection
 * Homepage section (#3 in the spec) that presents the full 6-field
 * advanced search as an elevated card overlapping the Hero's bottom edge —
 * a signature layout pattern in premium real estate sites.
 */
export default function PropertySearchSection() {
  return (
    <section className="property-search-section" aria-label="Property search">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <PropertyFilterBar variant="elevated" />
        </motion.div>
      </div>
    </section>
  );
}
