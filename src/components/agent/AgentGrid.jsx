import AgentCard from './AgentCard.jsx';
import './AgentGrid.css';

/**
 * AgentGrid
 * Responsive grid of AgentCard components. Reused on the homepage
 * (Meet Our Agents) and the full Agents directory page.
 */
export default function AgentGrid({ agents }) {
  return (
    <div className="agent-grid">
      {agents.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
}
