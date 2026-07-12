import properties from './properties.js';

/**
 * Featured city/region spotlights for the homepage "Featured Locations"
 * section. Property counts are derived live from the properties dataset
 * so they never fall out of sync as listings are added or removed.
 */
const locationSeeds = [
  { city: 'Malibu', state: 'California', image: '/images/locations/malibu.jpg', size: 'large' },
  { city: 'New York', state: 'New York', image: '/images/locations/new-york.jpg', size: 'small' },
  { city: 'Beverly Hills', state: 'California', image: '/images/locations/beverly-hills.jpg', size: 'small' },
  { city: 'Miami Beach', state: 'Florida', image: '/images/locations/miami.jpg', size: 'small' },
  { city: 'Scottsdale', state: 'Arizona', image: '/images/locations/scottsdale.jpg', size: 'small' },
  { city: 'Lake Tahoe', state: 'California', image: '/images/locations/lake-tahoe.jpg', size: 'small' },
];

const featuredLocations = locationSeeds.map((loc) => ({
  ...loc,
  count: properties.filter((p) => p.city === loc.city).length,
}));

export default featuredLocations;
