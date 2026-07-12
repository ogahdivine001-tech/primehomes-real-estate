import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle.jsx';
import Button from '../ui/Button.jsx';
import './ContactSection.css';

const contactInfo = [
  {
    icon: 'fa-solid fa-location-dot',
    title: 'Office Address',
    text: '1200 Park Avenue, New York, NY 10128',
  },
  {
    icon: 'fa-solid fa-phone',
    title: 'Phone',
    text: '+1 (800) 555-0199',
  },
  {
    icon: 'fa-solid fa-envelope',
    title: 'Email',
    text: 'hello@primehomes-realestate.com',
  },
  {
    icon: 'fa-solid fa-clock',
    title: 'Office Hours',
    text: 'Mon – Fri: 9:00 AM – 7:00 PM · Sat: 10:00 AM – 4:00 PM',
  },
];

/**
 * ContactSection
 * Homepage section (#16 in the spec): contact info + embedded Google Map
 * on one side, an inquiry form on the other. Client-side only for now —
 * `handleSubmit` is where a real API/email service call would be wired in.
 */
export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // In production, POST `form` to your backend/CRM/email service here.
    setSubmitted(true);
    setForm({ name: '', email: '', phone: '', message: '' });
  }

  return (
    <section className="section contact-section" aria-label="Contact us">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionTitle
            eyebrow="Get In Touch"
            title="Let's Find Your Next Home"
            align="left"
          />

          <div className="contact-info__list">
            {contactInfo.map((item) => (
              <div className="contact-info__item" key={item.title}>
                <span className="contact-info__icon">
                  <i className={item.icon} aria-hidden="true" />
                </span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-info__map">
            <iframe
              title="PrimeHomes Real Estate office location"
              src="https://maps.google.com/maps?q=1200%20Park%20Avenue%2C%20New%20York%2C%20NY&t=&z=14&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          {submitted && (
            <div className="contact-form__success" role="status">
              <i className="fa-solid fa-circle-check" aria-hidden="true" />
              Thank you! Your message has been sent — we'll be in touch shortly.
            </div>
          )}

          <div className="contact-form__row">
            <div className="contact-form__field">
              <label htmlFor="contact-name">Full Name</label>
              <input
                id="contact-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
              />
            </div>
            <div className="contact-form__field">
              <label htmlFor="contact-phone">Phone</label>
              <input
                id="contact-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => update('phone', e.target.value)}
              />
            </div>
          </div>

          <div className="contact-form__field">
            <label htmlFor="contact-email">Email Address</label>
            <input
              id="contact-email"
              type="email"
              required
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
            />
          </div>

          <div className="contact-form__field">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              rows="5"
              required
              value={form.message}
              onChange={(e) => update('message', e.target.value)}
              placeholder="Tell us what you're looking for..."
            />
          </div>

          <Button type="submit" variant="primary" size="lg" className="contact-form__submit" icon="fa-solid fa-paper-plane">
            Send Message
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
