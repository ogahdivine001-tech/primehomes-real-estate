import { useState } from 'react';
import SEO from '../components/common/SEO.jsx';
import Button from '../components/ui/Button.jsx';
import offices from '../data/offices.js';
import './Contact.css';
import '../components/sections/ContactSection.css';

/**
 * Contact
 * Dedicated Contact page: office location cards for all branches,
 * plus a full inquiry form (with a subject/reason dropdown) and map —
 * a more complete experience than the homepage Contact section.
 */
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const primaryOffice = offices[0];

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
  }

  return (
    <>
      <SEO
        title="Contact Us | PrimeHomes Real Estate"
        description="Get in touch with PrimeHomes Real Estate. Find our office locations, phone numbers, and send us a message directly."
      />

      <section className="contact-page__hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>We'd love to help you find your next home. Reach out to any of our offices below.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-page__offices">
            {offices.map((office) => (
              <div className="office-card" key={office.id}>
                <span className="office-card__label">{office.label}</span>
                <h3>{office.city}</h3>
                <div className="office-card__detail">
                  <i className="fa-solid fa-location-dot" aria-hidden="true" />
                  <span>{office.address}</span>
                </div>
                <div className="office-card__detail">
                  <i className="fa-solid fa-phone" aria-hidden="true" />
                  <a href={`tel:${office.phone}`}>{office.phone}</a>
                </div>
                <div className="office-card__detail">
                  <i className="fa-solid fa-envelope" aria-hidden="true" />
                  <a href={`mailto:${office.email}`}>{office.email}</a>
                </div>
                <div className="office-card__detail">
                  <i className="fa-solid fa-clock" aria-hidden="true" />
                  <span>{office.hours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-page__main">
        <div className="container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2 style={{ marginBottom: '1.25rem' }}>Send Us a Message</h2>

            {submitted && (
              <div className="contact-form__success" role="status">
                <i className="fa-solid fa-circle-check" aria-hidden="true" />
                Thank you! Your message has been sent — we'll be in touch shortly.
              </div>
            )}

            <div className="contact-form__row">
              <div className="contact-form__field">
                <label htmlFor="c-name">Full Name</label>
                <input id="c-name" type="text" required value={form.name} onChange={(e) => update('name', e.target.value)} />
              </div>
              <div className="contact-form__field">
                <label htmlFor="c-phone">Phone</label>
                <input id="c-phone" type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
              </div>
            </div>

            <div className="contact-form__row">
              <div className="contact-form__field">
                <label htmlFor="c-email">Email Address</label>
                <input id="c-email" type="email" required value={form.email} onChange={(e) => update('email', e.target.value)} />
              </div>
              <div className="contact-form__field">
                <label htmlFor="c-subject">Subject</label>
                <select id="c-subject" value={form.subject} onChange={(e) => update('subject', e.target.value)}>
                  <option>General Inquiry</option>
                  <option>Buying a Property</option>
                  <option>Selling a Property</option>
                  <option>Property Management</option>
                  <option>Investment Consulting</option>
                  <option>Media & Press</option>
                </select>
              </div>
            </div>

            <div className="contact-form__field">
              <label htmlFor="c-message">Message</label>
              <textarea
                id="c-message"
                rows="6"
                required
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                placeholder="Tell us how we can help..."
              />
            </div>

            <Button type="submit" variant="primary" size="lg" className="contact-form__submit" icon="fa-solid fa-paper-plane">
              Send Message
            </Button>
          </form>

          <div className="contact-page__map-wrap">
            <iframe
              title="PrimeHomes headquarters location"
              src={`https://maps.google.com/maps?q=${primaryOffice.lat},${primaryOffice.lng}&z=14&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
