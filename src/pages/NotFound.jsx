import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO.jsx';
import Button from '../components/ui/Button.jsx';
import './NotFound.css';

/**
 * NotFound
 * On-brand 404 page. Also reused directly (not just via routing) by
 * PropertyDetails, AgentDetails, and BlogPost when a slug doesn't match
 * any existing record.
 */
export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | PrimeHomes Real Estate"
        description="The page you're looking for could not be found."
      />

      <section className="not-found">
        <motion.div
          className="not-found__content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="not-found__code">404</div>
          <i className="fa-solid fa-house-chimney-crack not-found__icon" aria-hidden="true" />
          <h1>This Property Isn't Listed</h1>
          <p>
            The page you're looking for may have been moved, sold, or never existed.
            Let's get you back to somewhere extraordinary.
          </p>

          <div className="not-found__actions">
            <Button to="/" variant="primary" size="lg" icon="fa-solid fa-house" iconPosition="left">
              Back to Home
            </Button>
            <Button to="/properties" variant="outline" size="lg" icon="fa-solid fa-magnifying-glass" iconPosition="left">
              Browse Properties
            </Button>
          </div>

          <div className="not-found__links">
            <Link to="/about">About Us</Link>
            <Link to="/agents">Our Agents</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/faq">FAQ</Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
