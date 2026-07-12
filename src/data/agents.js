import properties from './properties.js';

/**
 * Agent profiles — used on the homepage "Meet Our Agents" slider,
 * the full /agents directory page, and individual /agents/:slug pages.
 */
const agentSeeds = [
  {
    id: 'a1',
    slug: 'alexandra-reyes',
    name: 'Alexandra Reyes',
    title: 'Founder & Principal Broker',
    photo: '/images/agents/alexandra-reyes.jpg',
    phone: '+1 (310) 555-0142',
    email: 'alexandra@primehomes-realestate.com',
    experience: 18,
    specialties: ['Waterfront Estates', 'Historic Properties'],
    bio: 'Alexandra founded PrimeHomes with a vision to bring uncompromising service to the luxury market. Over 18 years, she has closed more than $2B in residential sales.',
    social: { instagram: '#', linkedin: '#', facebook: '#' },
  },
  {
    id: 'a2',
    slug: 'marcus-chen',
    name: 'Marcus Chen',
    title: 'Senior Luxury Advisor',
    photo: '/images/agents/marcus-chen.jpg',
    phone: '+1 (212) 555-0198',
    email: 'marcus@primehomes-realestate.com',
    experience: 12,
    specialties: ['Penthouses', 'New Development'],
    bio: 'Marcus specializes in high-rise and new-construction residences, with deep relationships across Manhattan and Chicago\u2019s premier developments.',
    social: { instagram: '#', linkedin: '#', facebook: '#' },
  },
  {
    id: 'a3',
    slug: 'isabella-moreau',
    name: 'Isabella Moreau',
    title: 'Luxury Property Specialist',
    photo: '/images/agents/isabella-moreau.jpg',
    phone: '+1 (305) 555-0176',
    email: 'isabella@primehomes-realestate.com',
    experience: 9,
    specialties: ['Waterfront Homes', 'International Buyers'],
    bio: 'Isabella brings a global perspective to every transaction, having represented buyers and sellers across Florida, the Caribbean, and Latin America.',
    social: { instagram: '#', linkedin: '#', facebook: '#' },
  },
  {
    id: 'a4',
    slug: 'daniel-whitfield',
    name: 'Daniel Whitfield',
    title: 'Investment & Portfolio Advisor',
    photo: '/images/agents/daniel-whitfield.jpg',
    phone: '+1 (480) 555-0163',
    email: 'daniel@primehomes-realestate.com',
    experience: 14,
    specialties: ['Investment Properties', 'Desert Modern Homes'],
    bio: 'Daniel advises high-net-worth clients on building and managing multi-property portfolios across the Southwest\u2019s fastest-growing luxury markets.',
    social: { instagram: '#', linkedin: '#', facebook: '#' },
  },
];

const agents = agentSeeds.map((agent) => ({
  ...agent,
  listingsCount: properties.filter((p) => p.agentId === agent.id).length,
}));

export default agents;

export const getAgentBySlug = (slug) => agents.find((a) => a.slug === slug);

/** Convenience helper: look up an agent by id (used from property detail pages) */
export const getAgentById = (id) => agents.find((a) => a.id === id);

/** Convenience helper: top agents spotlighted on the homepage */
export const getFeaturedAgents = () => agents.slice(0, 3);
