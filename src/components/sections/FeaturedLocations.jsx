import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle.jsx';
import featuredLocations from '../../data/locations.js';
import './FeaturedLocations.css';

/**
 * FeaturedLocations
 * Homepage section (#9 in the spec): editorial mosaic grid spotlighting
 * the key cities/regions PrimeHomes operates in, with live property counts.
 */
export default function FeaturedLocations() {
  return (
    <section className="section featured-locations" aria-label="Featured locations">
      <div className="container">
        <SectionTitle
          eyebrow="Explore By Destination"
          title="Featured Locations"
          subtitle="From coastal retreats to skyline residences, discover the destinations where PrimeHomes has an established, trusted presence."
        />

        <div className="featured-locations__grid">
          {featuredLocations.map((loc, i) => (
            <motion.div
              className={`location-card ${loc.size === 'large' ? 'location-card--large' : ''}`}
              key={loc.city}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link to={`/properties?location=${encodeURIComponent(loc.city)}`}>
                <div className="location-card__img">
                  <img src={loc.image} alt={`${loc.city}, ${loc.state} skyline`} loading="lazy" />
                </div>
                <div className="location-card__overlay" />
                <span className="location-card__count">{loc.count} Listings</span>
                <div className="location-card__content">
                  <h3>{loc.city}</h3>
                  <span>{loc.state}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
