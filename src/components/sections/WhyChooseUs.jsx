import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle.jsx';
import whyChooseUs from '../../data/whyChooseUs.js';
import './WhyChooseUs.css';

/**
 * WhyChooseUs
 * Homepage section (#7 in the spec): differentiator cards explaining
 * why clients should choose PrimeHomes over competitors.
 */
export default function WhyChooseUs() {
  return (
    <section className="section why-choose-us" aria-label="Why choose PrimeHomes">
      <div className="container">
        <SectionTitle
          eyebrow="Why Choose Us"
          title="The PrimeHomes Difference"
          subtitle="What sets us apart isn't just the properties we represent — it's the standard of service behind every transaction."
        />

        <div className="why-choose-us__grid">
          {whyChooseUs.map((item, i) => (
            <motion.div
              className="why-choose-us__card"
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="why-choose-us__icon">
                <i className={item.icon} aria-hidden="true" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
