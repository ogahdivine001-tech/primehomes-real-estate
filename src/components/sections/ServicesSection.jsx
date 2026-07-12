import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle.jsx';
import services from '../../data/services.js';
import './ServicesSection.css';

/**
 * ServicesSection
 * Homepage section (#8 in the spec): dark luxury card grid outlining
 * PrimeHomes' core service offerings. Each card links to an anchor on
 * the full /services page (built in a later step) for more detail.
 */
export default function ServicesSection() {
  return (
    <section className="section services-section" aria-label="Our services">
      <div className="container">
        <SectionTitle
          eyebrow="What We Offer"
          title="Comprehensive Real Estate Services"
          subtitle="From your first search to long-term portfolio growth, PrimeHomes supports every stage of your luxury real estate journey."
          light
        />

        <div className="services-section__grid">
          {services.map((service, i) => (
            <motion.div
              className="service-card"
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="service-card__number">{String(service.id).padStart(2, '0')}</span>
              <div className="service-card__icon">
                <i className={service.icon} aria-hidden="true" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.shortText}</p>
              <Link to={`/services#${service.slug}`} className="service-card__link">
                Learn More <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
