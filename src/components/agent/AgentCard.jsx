import { Link } from 'react-router-dom';
import './AgentCard.css';

/**
 * AgentCard
 * Reusable agent profile card: photo with hover social overlay,
 * name, title, quick stats (experience/listings), and a View Profile link.
 * Used on the homepage "Meet Our Agents" section and the full Agents directory page.
 */
export default function AgentCard({ agent }) {
  return (
    <div className="agent-card">
      <div className="agent-card__media">
        <img src={agent.photo} alt={`Portrait of ${agent.name}, ${agent.title}`} loading="lazy" />

        <div className="agent-card__social">
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
          <a href={`mailto:${agent.email}`} aria-label={`Email ${agent.name}`}>
            <i className="fa-solid fa-envelope" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="agent-card__body">
        <h3 className="agent-card__name">{agent.name}</h3>
        <p className="agent-card__title">{agent.title}</p>

        <div className="agent-card__meta">
          <span>{agent.experience}+ Yrs Experience</span>
          <span>{agent.listingsCount} Listings</span>
        </div>

        <Link to={`/agents/${agent.slug}`} className="agent-card__view-btn">
          View Profile
        </Link>
      </div>
    </div>
  );
}
