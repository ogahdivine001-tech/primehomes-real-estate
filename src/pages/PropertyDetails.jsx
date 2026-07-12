import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SEO from '../components/common/SEO.jsx';
import Button from '../components/ui/Button.jsx';
import PropertyGrid from '../components/property/PropertyGrid.jsx';
import Loader from '../components/ui/Loader.jsx';
import { usePropertyBySlug, useProperties } from '../hooks/useProperties.js';
import { getAgentById } from '../data/agents.js';
import amenities from '../data/amenities.js';
import { formatPrice } from '../utils/formatPrice.js';
import { useFavorites } from '../context/FavoritesContext.jsx';
import NotFound from './NotFound.jsx';
import './PropertyDetails.css';

const statusLabels = { 'for-sale': 'For Sale', 'for-rent': 'For Rent', sold: 'Sold' };

/**
 * PropertyDetails
 * Single property page: image gallery slider, price/specs, description,
 * amenities, map, agent contact card, inquiry form, and similar listings.
 * Data comes live from Sanity if connected, otherwise the sample dataset.
 */
export default function PropertyDetails() {
  const { slug } = useParams();
  const { property, loading } = usePropertyBySlug(slug);
  const { properties: allProperties } = useProperties('all');
  const { isFavorite, toggleFavorite } = useFavorites();

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (loading) {
    return <Loader label="Loading property..." />;
  }

  // Unknown slug -> render the 404 page in place (keeps the URL, matches spec)
  if (!property) {
    return <NotFound />;
  }

  // Sanity-sourced properties carry a fully embedded agent object already;
  // sample-data properties only have an agentId, so look it up statically.
  const agent = property.agent || getAgentById(property.agentId);
  const saved = isFavorite(property.id);

  const similar = allProperties
    .filter((p) => p.id !== property.id && (p.type === property.type || p.city === property.city))
    .slice(0, 3);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
  }

  async function handleShare() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: property.title, url });
      } catch {
        /* user cancelled */
      }
    } else {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  }

  return (
    <>
      <SEO
        title={`${property.title} | ${property.city}, ${property.state} | PrimeHomes`}
        description={property.description}
      />

      {/* ---- Image Gallery ---- */}
      <div className="property-details__gallery">
        <span className={`property-details__gallery-badge`}>{statusLabels[property.status]}</span>
        <div className="property-details__gallery-actions">
          <button
            type="button"
            className={saved ? 'active' : ''}
            onClick={() => toggleFavorite(property.id)}
            aria-pressed={saved}
            aria-label={saved ? 'Remove from saved properties' : 'Save property'}
          >
            <i className={`${saved ? 'fa-solid' : 'fa-regular'} fa-heart`} aria-hidden="true" />
          </button>
          <button type="button" onClick={handleShare} aria-label="Share property">
            <i className="fa-solid fa-share-nodes" aria-hidden="true" />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={property.gallery.length > 1}
        >
          {property.gallery.map((src, i) => (
            <SwiperSlide key={i}>
              <img src={src} alt={`${property.title} — photo ${i + 1}`} loading={i === 0 ? 'eager' : 'lazy'} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ---- Main content ---- */}
      <section className="section">
        <div className="container property-details__layout">
          <div>
            <div className="property-details__header">
              <div>
                <h1>{property.title}</h1>
                <div className="property-details__location">
                  <i className="fa-solid fa-location-dot" aria-hidden="true" />
                  <span>{property.address}, {property.city}, {property.state}</span>
                </div>
              </div>
              <div className="property-details__price">
                {formatPrice(property.price, { perMonth: property.status === 'for-rent' })}
              </div>
            </div>

            <div className="property-details__specs">
              <div className="property-details__spec">
                <i className="fa-solid fa-bed" aria-hidden="true" />
                <strong>{property.bedrooms}</strong>
                <span>Bedrooms</span>
              </div>
              <div className="property-details__spec">
                <i className="fa-solid fa-bath" aria-hidden="true" />
                <strong>{property.bathrooms}</strong>
                <span>Bathrooms</span>
              </div>
              <div className="property-details__spec">
                <i className="fa-solid fa-vector-square" aria-hidden="true" />
                <strong>{property.area.toLocaleString()}</strong>
                <span>Sqft</span>
              </div>
              <div className="property-details__spec">
                <i className="fa-solid fa-house" aria-hidden="true" />
                <strong style={{ textTransform: 'capitalize' }}>{property.type}</strong>
                <span>Type</span>
              </div>
            </div>

            <div className="property-details__section">
              <h2>Description</h2>
              <p className="property-details__description">{property.description}</p>
            </div>

            <div className="property-details__section">
              <h2>Amenities</h2>
              <div className="property-details__amenities">
                {amenities.map((a) => (
                  <div className="property-details__amenity" key={a.label}>
                    <i className={a.icon} aria-hidden="true" />
                    <span>{a.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {property.lat && property.lng && (
              <div className="property-details__section">
                <h2>Location</h2>
                <div className="property-details__map">
                  <iframe
                    title={`Map showing location of ${property.title}`}
                    src={`https://maps.google.com/maps?q=${property.lat},${property.lng}&z=14&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            )}
          </div>

          {/* ---- Sidebar ---- */}
          <aside className="property-details__sidebar">
            {agent && (
              <div className="property-agent-card">
                <img src={agent.photo} alt={`Portrait of ${agent.name}`} loading="lazy" />
                <h4>{agent.name}</h4>
                <span>{agent.title}</span>
                <div className="property-agent-card__actions">
                  <Button href={`tel:${agent.phone}`} variant="dark" icon="fa-solid fa-phone" iconPosition="left">
                    Call Agent
                  </Button>
                  <Button to={`/agents/${agent.slug}`} variant="outline-dark">
                    View Full Profile
                  </Button>
                </div>
              </div>
            )}

            <div className="property-inquiry-card">
              <h4>Schedule a Tour</h4>
              {submitted ? (
                <div className="contact-form__success" role="status">
                  <i className="fa-solid fa-circle-check" aria-hidden="true" />
                  Request sent! We'll confirm your tour shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="contact-form__field">
                    <label htmlFor="pd-name">Full Name</label>
                    <input id="pd-name" type="text" required value={form.name} onChange={(e) => update('name', e.target.value)} />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="pd-email">Email</label>
                    <input id="pd-email" type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="pd-phone">Phone</label>
                    <input id="pd-phone" type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
                  </div>
                  <div className="contact-form__field">
                    <label htmlFor="pd-message">Message</label>
                    <textarea
                      id="pd-message"
                      rows="4"
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      placeholder={`I'd like to schedule a tour of ${property.title}...`}
                    />
                  </div>
                  <Button type="submit" variant="primary" style={{ width: '100%' }} icon="fa-solid fa-calendar-check">
                    Request Tour
                  </Button>
                </form>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* ---- Similar Properties ---- */}
      {similar.length > 0 && (
        <section className="section property-details__similar">
          <div className="container">
            <h2 style={{ marginBottom: '2rem' }}>Similar Properties</h2>
            <PropertyGrid properties={similar} />
          </div>
        </section>
      )}
    </>
  );
}
