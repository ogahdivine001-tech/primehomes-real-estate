import { useMemo, useState } from 'react';
import SEO from '../components/common/SEO.jsx';
import AgentGrid from '../components/agent/AgentGrid.jsx';
import Loader from '../components/ui/Loader.jsx';
import { useAgents } from '../hooks/useAgents.js';
import './Agents.css';

/**
 * Agents
 * Full team directory: searchable by name or specialty. Pulls live
 * from Sanity if connected, otherwise the sample roster.
 */
export default function Agents() {
  const { agents, loading } = useAgents();
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return agents;
    const q = query.toLowerCase();
    return agents.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.title.toLowerCase().includes(q) ||
        (a.specialties || []).some((s) => s.toLowerCase().includes(q))
    );
  }, [query, agents]);

  return (
    <>
      <SEO
        title="Meet Our Agents | PrimeHomes Real Estate"
        description="Meet the PrimeHomes team — dedicated luxury real estate specialists with deep local and global market expertise."
      />

      <section className="agents-page__hero">
        <div className="container">
          <h1>Meet Our Agents</h1>
          <p>A team of dedicated specialists, ready to guide your next move.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="agents-page__toolbar">
            <div className="agents-page__search">
              <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
              <label htmlFor="agent-search" className="sr-only">Search agents by name or specialty</label>
              <input
                id="agent-search"
                type="text"
                placeholder="Search by name or specialty..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          {loading ? (
            <Loader label="Loading our team..." />
          ) : filtered.length > 0 ? (
            <AgentGrid agents={filtered} />
          ) : (
            <div className="property-grid__empty">
              <i className="fa-solid fa-user-slash" aria-hidden="true" />
              <p>No agents match your search.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
