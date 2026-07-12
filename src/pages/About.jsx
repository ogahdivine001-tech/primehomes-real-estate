import { motion } from 'framer-motion';
import SEO from '../components/common/SEO.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import Stats from '../components/ui/Stats.jsx';
import AgentGrid from '../components/agent/AgentGrid.jsx';
import Button from '../components/ui/Button.jsx';
import stats from '../data/stats.js';
import milestones from '../data/milestones.js';
import agents from '../data/agents.js';
import './About.css';

const values = [
  {
    icon: 'fa-solid fa-gem',
    title: 'Excellence',
    text: 'We hold every transaction to the highest standard, without exception.',
  },
  {
    icon: 'fa-solid fa-handshake-angle',
    title: 'Integrity',
    text: 'Transparent, honest guidance — even when it isn\u2019t the easiest answer.',
  },
  {
    icon: 'fa-solid fa-heart',
    title: 'Client-First',
    text: 'Every decision is made with our client\u2019s best interest at the center.',
  },
  {
    icon: 'fa-solid fa-compass',
    title: 'Expertise',
    text: 'Deep market knowledge that translates into smarter, faster decisions.',
  },
];

/**
 * About
 * Full About page: hero, extended company story, core values grid,
 * animated stats, a milestones timeline, and a team preview.
 */
export default function About() {
  return (
    <>
      <SEO
        title="About Us | PrimeHomes Real Estate"
        description="Learn about PrimeHomes Real Estate — our story, mission, values, and the team behind nearly two decades of luxury real estate excellence."
      />

      <section className="about-page__hero">
        <div className="container">
          <h1>Redefining What It Means to Find Home</h1>
          <p>Since 2008, PrimeHomes has been the trusted name behind some of the world's most extraordinary properties.</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-page__story">
          <SectionTitle eyebrow="Our Story" title="Nearly Two Decades of Excellence" />
          <p>
            PrimeHomes Real Estate was founded on a simple belief: that buying or selling a
            significant property should feel personal, not transactional. What began as a single
            office in New York has grown into a nationally recognized luxury brokerage, without
            ever losing sight of that founding principle.
          </p>
          <p>
            Today, our team of specialists serves clients across the country's most desirable
            markets, combining deep local expertise with a genuinely personal approach to every
            relationship. We don't just sell homes — we guide our clients through one of the most
            significant decisions of their lives, with the care and discretion it deserves.
          </p>
        </div>
      </section>

      <section className="section about-page__values">
        <div className="container">
          <SectionTitle eyebrow="What Drives Us" title="Our Core Values" />
          <div className="about-page__values-grid">
            {values.map((v, i) => (
              <motion.div
                className="value-card"
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="value-card__icon">
                  <i className={v.icon} aria-hidden="true" />
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-primary)' }}>
        <div className="container">
          <Stats items={stats} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Our Journey" title="Milestones Along the Way" />
          <div className="timeline">
            {milestones.map((m, i) => (
              <motion.div
                className="timeline__item"
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="timeline__year">{m.year}</div>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--color-accent)' }}>
        <div className="container">
          <SectionTitle eyebrow="Our Team" title="The People Behind PrimeHomes" />
          <AgentGrid agents={agents} />
          <div className="about-page__team-cta" style={{ marginTop: '2rem' }}>
            <Button to="/agents" variant="dark" icon="fa-solid fa-arrow-right">
              Meet The Full Team
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
