import { useParams } from 'react-router-dom';
import SEO from '../components/common/SEO.jsx';
import Button from '../components/ui/Button.jsx';
import PropertyGrid from '../components/property/PropertyGrid.jsx';
import Loader from '../components/ui/Loader.jsx';
import { useAgentBySlug } from '../hooks/useAgents.js';
import { useProperties } from '../hooks/useProperties.js';
import NotFound from './NotFound.jsx';
import './AgentDetails.css';

/**
 * AgentDetails
 * Single agent profile: hero with photo/contact/social, stats,
 * bio, specialties, and a grid of their active property listings.
 * Pulls live from Sanity if connected, otherwise the sample data.
 */
export default function AgentDetails() {
  const { slug } = useParams();
  const { agent, loading } = useAgentBySlug(slug);
  const { properties } = useProperties('all');

  if (loading) {
    return <Loader label="Loading agent profile..." />;
  }

  if (!agent) {
    return <NotFound />;
  }

  const listings = properties.filter((p) => p.agentId === agent.id);

  return (
    <>
      <SEO
        title={`${agent.name} | ${agent.title} | PrimeHomes Real Estate`}
        description={agent.bio}
      />

      <section className="agent-details__hero">
        <div className="container">
          <div className="agent-details__photo">
            <img src={agent.photo} alt={`Portrait of ${agent.name}`} />
          </div>

          <div className="agent-details__info">
            <h1>{agent.name}</h1>
            <p className="agent-details__title">{agent.title}</p>

            <div className="agent-details__contact-row">
              <a href={`tel:${agent.phone}`}>
                <i className="fa-solid fa-phone" aria-hidden="true" /> {agent.phone}
              </a>
              <a href={`mailto:${agent.email}`}>
                <i className="fa-solid fa-envelope" aria-hidden="true" /> {agent.email}
              </a>
            </div>

            <div className="agent-details__social">
              {agent.social?.instagram && (
                <a href={agent.social.instagram} target="_blank" rel="noopener noreferrer" aria-label={`${agent.name} on Instagram`}>
                  <i className="fa-brands fa-instagram" aria-hidden="true" />
                </a>
              )}
              {agent.social?.linkedin && (
                <a href={agent.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${agent.name} on LinkedIn`}>
                  <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
                </a>
              )}
              {agent.social?.facebook && (
                <a href={agent.social.facebook} target="_blank" rel="noopener noreferrer" aria-label={`${agent.name} on Facebook`}>
                  <i className="fa-brands fa-facebook-f" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="agent-details__stats">
            <div className="agent-details__stat">
              <strong>{agent.experience}+</strong>
              <span>Years Experience</span>
            </div>
            <div className="agent-details__stat">
              <strong>{agent.listingsCount ?? listings.length}</strong>
              <span>Active Listings</span>
            </div>
            <div className="agent-details__stat">
              <strong>{(agent.specialties || []).length}</strong>
              <span>Specialties</span>
            </div>
          </div>

          <h2 style={{ marginBottom: '0.75rem' }}>About {agent.name.split(' ')[0]}</h2>
          <p className="text-muted" style={{ maxWidth: '760px', lineHeight: 1.8 }}>{agent.bio}</p>

          <div className="agent-details__specialties">
            {(agent.specialties || []).map((s) => (
              <span className="agent-details__specialty-tag" key={s}>{s}</span>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <Button href={`tel:${agent.phone}`} variant="primary" icon="fa-solid fa-phone" iconPosition="left">
              Contact {agent.name.split(' ')[0]}
            </Button>
          </div>
        </div>
      </section>

      {listings.length > 0 && (
        <section className="section agent-details__listings">
          <div className="container">
            <h2 style={{ marginBottom: '2rem' }}>{agent.name.split(' ')[0]}&rsquo;s Active Listings</h2>
            <PropertyGrid properties={listings} />
          </div>
        </section>
      )}
    </>
  );
}
