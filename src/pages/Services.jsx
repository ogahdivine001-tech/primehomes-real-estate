import SEO from '../components/common/SEO.jsx';
import Button from '../components/ui/Button.jsx';
import services from '../data/services.js';
import './Services.css';

/**
 * Services
 * Full services page: expands each homepage service card into a
 * detailed section with an anchor id matching its slug, so links like
 * /services#buying (from the homepage and footer) jump straight to it.
 */
export default function Services() {
  return (
    <>
      <SEO
        title="Our Services | PrimeHomes Real Estate"
        description="Explore PrimeHomes' full range of luxury real estate services — buying, selling, property management, investment consulting, relocation, and rentals."
      />

      <section className="services-page__hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive, white-glove support for every stage of your luxury real estate journey.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {services.map((service) => (
            <div className="service-detail" id={service.slug} key={service.id}>
              <div className="service-detail__icon">
                <i className={service.icon} aria-hidden="true" />
              </div>
              <div className="service-detail__content">
                <h2>{service.title}</h2>
                <p>{service.fullText}</p>
                <Button to="/contact" variant="outline-dark" icon="fa-solid fa-arrow-right">
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-page__cta">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Speak with a PrimeHomes specialist today and take the first step toward your next home.</p>
          <Button to="/contact" variant="primary" size="lg" icon="fa-solid fa-arrow-right">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}
