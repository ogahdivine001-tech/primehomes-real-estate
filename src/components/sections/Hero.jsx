import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from '../ui/Button.jsx';
import './Hero.css';

// Simple stagger/fade-up animation variants for the headline block
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

/**
 * Hero
 * Fullscreen homepage hero: background image with dark gradient overlay,
 * animated headline, compact quick-search bar, and dual CTAs.
 * A dedicated, more detailed <PropertySearch /> section follows below it
 * on the homepage for full filtering (location, type, price, beds, baths, status).
 */
export default function Hero() {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');

  function handleSearch(e) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.set('location', location);
    if (type) params.set('type', type);
    if (status) params.set('status', status);
    navigate(`/properties?${params.toString()}`);
  }

  return (
    <section className="hero" aria-label="Homepage hero">
      <div className="hero__bg" role="img" aria-label="Luxury modern estate exterior at dusk" />

      <motion.div
        className="hero__content"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span className="hero__eyebrow" variants={item}>
          Exceptional Properties, Curated
        </motion.span>

        <motion.h1 className="hero__title" variants={item}>
          Find Your Next <span>Extraordinary</span> Home
        </motion.h1>

        <motion.p className="hero__subtitle" variants={item}>
          PrimeHomes connects discerning buyers with the world's most remarkable
          estates, penthouses, and residences — handpicked, verified, and ready for you.
        </motion.p>

        <motion.div className="hero__cta-group" variants={item}>
          <Button to="/properties" variant="primary" size="lg" icon="fa-solid fa-arrow-right">
            Explore Properties
          </Button>
          <Button to="/contact" variant="outline" size="lg" icon="fa-solid fa-calendar-check" iconPosition="left">
            Book Inspection
          </Button>
        </motion.div>

        <motion.form
          className="hero__search"
          variants={item}
          onSubmit={handleSearch}
          role="search"
          aria-label="Quick property search"
        >
          <div className="hero__search-field">
            <label htmlFor="hero-location">Location</label>
            <input
              id="hero-location"
              type="text"
              placeholder="City, neighborhood..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="hero__search-field">
            <label htmlFor="hero-type">Property Type</label>
            <select id="hero-type" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Any Type</option>
              <option value="villa">Villa</option>
              <option value="penthouse">Penthouse</option>
              <option value="apartment">Apartment</option>
              <option value="mansion">Mansion</option>
              <option value="estate">Estate</option>
            </select>
          </div>

          <div className="hero__search-field">
            <label htmlFor="hero-status">Status</label>
            <select id="hero-status" value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="">Any Status</option>
              <option value="for-sale">For Sale</option>
              <option value="for-rent">For Rent</option>
              <option value="sold">Sold</option>
            </select>
          </div>

          <button type="submit" className="hero__search-btn">
            <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
            Search
          </button>
        </motion.form>
      </motion.div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="hero__scroll-icon">
          <span className="hero__scroll-dot" />
        </span>
        Scroll
      </motion.div>
    </section>
  );
}
