/**
 * filterProperties.js
 * Utilities shared by the filter bar and the Properties listing page.
 */

/**
 * Builds a clean query string from a filters object, omitting empty values.
 * @param {Object} filters
 * @returns {string} e.g. "location=Miami&type=villa"
 */
export function buildFilterQuery(filters) {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([key, value]) => {
    if (value !== '' && value !== null && value !== undefined) {
      params.set(key, value);
    }
  });
  return params.toString();
}

/**
 * Sorts an array of properties by the given key.
 * @param {Array} properties
 * @param {string} sortBy - 'newest' | 'price-asc' | 'price-desc' | 'beds'
 * @returns {Array} a new sorted array (does not mutate the input)
 */
export function sortProperties(properties, sortBy) {
  const sorted = [...properties];
  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'beds':
      return sorted.sort((a, b) => b.bedrooms - a.bedrooms);
    case 'newest':
    default:
      // Dataset order approximates "newest" in the absence of a real timestamp field
      return sorted;
  }
}

/**
 * Filters an array of property objects against the given filter criteria.
 * Used on the Properties page to apply search/filter/sort client-side.
 * @param {Array} properties
 * @param {Object} filters - { location, type, status, price, bedrooms, bathrooms }
 * @returns {Array} filtered properties
 */
export function filterProperties(properties, filters) {
  return properties.filter((p) => {
    if (filters.location) {
      const q = filters.location.toLowerCase();
      const matchesLocation =
        p.city.toLowerCase().includes(q) ||
        p.address.toLowerCase().includes(q) ||
        p.state.toLowerCase().includes(q);
      if (!matchesLocation) return false;
    }

    if (filters.type && p.type !== filters.type) return false;
    if (filters.status && p.status !== filters.status) return false;

    if (filters.bedrooms && p.bedrooms < Number(filters.bedrooms)) return false;
    if (filters.bathrooms && p.bathrooms < Number(filters.bathrooms)) return false;

    if (filters.price) {
      const [min, max] = filters.price.split('-').map(Number);
      if (p.price < min || p.price > max) return false;
    }

    return true;
  });
}
