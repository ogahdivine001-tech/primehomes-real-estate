import { motion } from 'framer-motion';
import SEO from '../components/common/SEO.jsx';
import testimonials from '../data/testimonials.js';
import '../components/sections/Testimonials.css';
import './TestimonialsPage.css';

/**
 * TestimonialsPage
 * Full testimonials page: average rating summary + a static grid of
 * every client review (reuses .testimonial-card styling from the
 * homepage Swiper section, without the carousel behavior).
 */
export default function TestimonialsPage() {
  const average = (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <>
      <SEO
        title="Client Testimonials | PrimeHomes Real Estate"
        description="Read what our clients have to say about their experience buying, selling, and investing with PrimeHomes Real Estate."
      />

      <section className="testimonials-page__hero">
        <div className="container">
          <h1>Client Testimonials</h1>
          <p>The relationships we build matter as much as the properties we sell.</p>

          <div className="testimonials-page__summary">
            <span className="testimonials-page__summary-score">{average}</span>
            <div className="testimonials-page__summary-details">
              <div className="testimonials-page__summary-stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i key={i} className="fa-solid fa-star" aria-hidden="true" />
                ))}
              </div>
              <span>Based on {testimonials.length} verified client reviews</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="testimonials-page__grid">
            {testimonials.map((t, i) => (
              <motion.article
                className="testimonial-card"
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <i className="fa-solid fa-quote-left testimonial-card__quote-icon" aria-hidden="true" />
                <div className="testimonial-card__stars" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <i key={j} className="fa-solid fa-star" aria-hidden="true" />
                  ))}
                </div>
                <p className="testimonial-card__text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-card__author">
                  <img src={t.avatar} alt={`Portrait of ${t.name}`} loading="lazy" />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.location}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
