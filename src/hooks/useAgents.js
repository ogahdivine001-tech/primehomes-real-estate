import { useEffect, useState } from 'react';
import { sanityClient, isSanityConfigured } from '../services/sanityClient.js';
import { ALL_AGENTS_QUERY, AGENT_BY_SLUG_QUERY } from '../services/queries.js';
import { adaptSanityAgent } from '../services/adapters.js';
import staticAgents, { getAgentBySlug as getStaticAgentBySlug } from '../data/agents.js';

/**
 * useAgents
 * Same live-with-fallback pattern as useProperties — see that file for
 * the full explanation. Returns { agents, loading, error, isLive }.
 */
export function useAgents() {
  const [agents, setAgents] = useState(staticAgents);
  const [loading, setLoading] = useState(isSanityConfigured);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isSanityConfigured) return;

    let cancelled = false;
    setLoading(true);

    sanityClient
      .fetch(ALL_AGENTS_QUERY)
      .then((docs) => {
        if (cancelled) return;
        setAgents(docs.map(adaptSanityAgent));
        setError(null);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('Failed to fetch agents from Sanity, falling back to sample data:', err);
        setError(err);
        setAgents(staticAgents);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, []);

  return { agents, loading, error, isLive: isSanityConfigured && !error };
}

/**
 * useAgentBySlug
 * Returns { agent, loading, error, isLive } for a single agent profile.
 */
export function useAgentBySlug(slug) {
  const [agent, setAgent] = useState(() => getStaticAgentBySlug(slug) || null);
  const [loading, setLoading] = useState(isSanityConfigured);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isSanityConfigured) {
      setAgent(getStaticAgentBySlug(slug) || null);
      return;
    }

    let cancelled = false;
    setLoading(true);

    sanityClient
      .fetch(AGENT_BY_SLUG_QUERY, { slug })
      .then((doc) => {
        if (cancelled) return;
        setAgent(doc ? adaptSanityAgent(doc) : null);
        setError(null);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('Failed to fetch agent from Sanity, falling back to sample data:', err);
        setError(err);
        setAgent(getStaticAgentBySlug(slug) || null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [slug]);

  return { agent, loading, error, isLive: isSanityConfigured && !error };
}
