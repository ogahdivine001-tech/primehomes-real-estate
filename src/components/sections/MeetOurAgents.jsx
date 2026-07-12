import SectionTitle from '../ui/SectionTitle.jsx';
import AgentGrid from '../agent/AgentGrid.jsx';
import Loader from '../ui/Loader.jsx';
import Button from '../ui/Button.jsx';
import { useAgents } from '../../hooks/useAgents.js';
import './MeetOurAgents.css';

/**
 * MeetOurAgents
 * Homepage section (#10 in the spec): spotlights the team. Pulls live
 * from Sanity if connected, otherwise the sample roster.
 */
export default function MeetOurAgents() {
  const { agents, loading } = useAgents();

  return (
    <section className="section meet-agents" aria-label="Meet our agents">
      <div className="container">
        <SectionTitle
          eyebrow="Our Team"
          title="Meet Our Agents"
          subtitle="A team of dedicated specialists, each bringing deep market knowledge and an unwavering commitment to client success."
        />

        {loading ? <Loader label="Loading our team..." /> : <AgentGrid agents={agents} />}

        <div className="meet-agents__footer">
          <Button to="/agents" variant="dark" icon="fa-solid fa-arrow-right">
            View All Agents
          </Button>
        </div>
      </div>
    </section>
  );
}
