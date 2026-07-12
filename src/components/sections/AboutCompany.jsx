import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle.jsx';
import Button from '../ui/Button.jsx';
import './AboutCompany.css';

const highlights = [
  {
    icon: 'fa-solid fa-medal',
    title: 'Award-Winning Team',
    text: 'Recognized nationally for excellence in luxury service.',
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Trusted Relationships',
    text: 'Built on transparency, discretion, and long-term trust.',
  },
  {
    icon: 'fa-solid fa-globe',
    title: 'Global Network',
    text: 'Access to exclusive listings across major luxury markets.',
  },
  {
    icon: 'fa-solid fa-key',
    title: 'End-to-End Service',
    text: 'From first tour to closing day, we handle every detail.',
  },
];

/**
 * AboutCompany
 * Homepage section (#6 in the spec): introduces PrimeHomes with a
 * two-column image/content layout, a floating experience badge,
 * a highlights checklist, and a CTA.
 */
export default function AboutCompany() {
  return (
    <section className="section about-company" aria-label="About PrimeHomes Real Estate">
      <div className="container">
        <motion.div
          className="about-company__media"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-company__img-main">
            <img
              src="/images/about-office.jpg"
              alt="PrimeHomes Real Estate office and leadership team"
              loading="lazy"
            />
          </div>
          <div className="about-company__badge">
            <div className="about-company__badge-number">18+</div>
            <div className="about-company__badge-label">Years of Trusted Service</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <SectionTitle
            eyebrow="About PrimeHomes"
            title="Redefining the Luxury Real Estate Experience"
            align="left"
          />
          <p className="text-muted">
            For nearly two decades, PrimeHomes Real Estate has represented some of the
            most extraordinary properties in the country. We combine deep market
            expertise with a genuinely personal approach — because a home this
            significant deserves nothing less than absolute care.
          </p>

          <div className="about-company__highlights">
            {highlights.map((item) => (
              <div className="about-company__highlight" key={item.title}>
                <i className={item.icon} aria-hidden="true" />
                <div className="about-company__highlight-text">
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="about-company__actions">
            <Button to="/about" variant="dark" icon="fa-solid fa-arrow-right">
              Learn More About Us
            </Button>

            <div className="about-company__signature">
              <img
                src="/images/agents/founder.jpg"
                alt="Portrait of PrimeHomes founder"
                loading="lazy"
              />
              <div>
                <strong>Alexandra Reyes</strong>
                <span>Founder &amp; Principal Broker</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
