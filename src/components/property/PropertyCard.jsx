import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../context/FavoritesContext.jsx';
import { formatPrice } from '../../utils/formatPrice.js';
import './PropertyCard.css';

const statusLabels = {
  'for-sale': 'For Sale',
  'for-rent': 'For Rent',
  sold: 'Sold',
};

/**
 * PropertyCard
 * Luxury listing card: image, status badge, save/share actions, price tag,
 * title, location, key features (beds/baths/area), and a View Details link.
 * Used in grids (Featured Properties, Properties page) and Swiper sliders.
 */
export default function PropertyCard({ property }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const saved = isFavorite(property.id);

  async function handleShare(e) {
    e.preventDefault();
    const url = `${window.location.origin}/properties/${property.slug}`;
    const shareData = {
      title: property.title,
      text: `Check out ${property.title} in ${property.city}, ${property.state} on PrimeHomes.`,
      url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        /* user cancelled share — no action needed */
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      } catch {
        /* clipboard unavailable — silently ignore */
      }
    }
  }

  function handleSave(e) {
    e.preventDefault();
    toggleFavorite(property.id);
  }

  return (
    <motion.article
      className="property-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/properties/${property.slug}`} className="property-card__media" aria-label={`View details for ${property.title}`}>
        <img src={property.image} alt={`${property.title} in ${property.city}, ${property.state}`} loading="lazy" />

        <span className={`property-card__badge property-card__badge--${property.status}`}>
          {statusLabels[property.status]}
        </span>

        <span className="property-card__price-tag">
          {formatPrice(property.price, { perMonth: property.status === 'for-rent' })}
        </span>
      </Link>

      <div className="property-card__actions">
        <button
          type="button"
          className={`property-card__icon-btn ${saved ? 'property-card__icon-btn--active' : ''}`}
          onClick={handleSave}
          aria-pressed={saved}
          aria-label={saved ? 'Remove from saved properties' : 'Save property'}
        >
          <i className={`${saved ? 'fa-solid' : 'fa-regular'} fa-heart`} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="property-card__icon-btn"
          onClick={handleShare}
          aria-label="Share property"
        >
          <i className="fa-solid fa-share-nodes" aria-hidden="true" />
        </button>
      </div>

      <div className="property-card__body">
        <h3 className="property-card__title">{property.title}</h3>
        <div className="property-card__location">
          <i className="fa-solid fa-location-dot" aria-hidden="true" />
          <span>{property.city}, {property.state}</span>
        </div>

        <div className="property-card__features">
          <span className="property-card__feature">
            <i className="fa-solid fa-bed" aria-hidden="true" />
            {property.bedrooms} Beds
          </span>
          <span className="property-card__feature">
            <i className="fa-solid fa-bath" aria-hidden="true" />
            {property.bathrooms} Baths
          </span>
          <span className="property-card__feature">
            <i className="fa-solid fa-vector-square" aria-hidden="true" />
            {property.area.toLocaleString()} sqft
          </span>
        </div>

        <div className="property-card__footer">
          <Link to={`/properties/${property.slug}`} className="property-card__view-btn">
            View Details
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
