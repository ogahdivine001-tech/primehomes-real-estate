import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  propertyTypes,
  statusOptions,
  priceRanges,
  bedroomOptions,
  bathroomOptions,
} from '../../data/filterOptions.js';
import { buildFilterQuery } from '../../utils/filterProperties.js';
import './PropertyFilterBar.css';

/**
 * PropertyFilterBar
 * The full 6-field advanced search: Location, Property Type, Price,
 * Bedrooms, Bathrooms, Status.
 *
 * Reusable in two contexts:
 *  - Homepage: elevated glass/white card (variant="elevated", default)
 *  - Properties page: embedded flat toolbar (variant="embedded")
 *
 * Props:
 *  - variant: 'elevated' | 'embedded'
 *  - initialValues: pre-filled filters (used when embedded on Properties page)
 *  - onSearch: optional callback(filters) — if provided, called instead of
 *              navigating (used when already on the Properties page so it
 *              can filter in place without a full route change)
 */
export default function PropertyFilterBar({ variant = 'elevated', initialValues = {}, onSearch }) {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    location: initialValues.location || '',
    type: initialValues.type || '',
    price: initialValues.price || '',
    bedrooms: initialValues.bedrooms || '',
    bathrooms: initialValues.bathrooms || '',
    status: initialValues.status || '',
  });

  function update(field, value) {
    setFilters((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (onSearch) {
      onSearch(filters);
    } else {
      navigate(`/properties?${buildFilterQuery(filters)}`);
    }
  }

  return (
    <form
      className={`filter-bar ${variant === 'embedded' ? 'filter-bar--embedded' : ''}`}
      onSubmit={handleSubmit}
      role="search"
      aria-label="Advanced property search"
    >
      <div className="filter-bar__field">
        <label htmlFor="filter-location">Location</label>
        <div className="filter-bar__control">
          <input
            id="filter-location"
            type="text"
            placeholder="City, address, ZIP..."
            value={filters.location}
            onChange={(e) => update('location', e.target.value)}
          />
          <i className="fa-solid fa-location-dot" aria-hidden="true" />
        </div>
      </div>

      <div className="filter-bar__field">
        <label htmlFor="filter-type">Property Type</label>
        <div className="filter-bar__control">
          <select id="filter-type" value={filters.type} onChange={(e) => update('type', e.target.value)}>
            {propertyTypes.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <i className="fa-solid fa-chevron-down" aria-hidden="true" />
        </div>
      </div>

      <div className="filter-bar__field">
        <label htmlFor="filter-price">Price Range</label>
        <div className="filter-bar__control">
          <select id="filter-price" value={filters.price} onChange={(e) => update('price', e.target.value)}>
            {priceRanges.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <i className="fa-solid fa-chevron-down" aria-hidden="true" />
        </div>
      </div>

      <div className="filter-bar__field">
        <label htmlFor="filter-bedrooms">Bedrooms</label>
        <div className="filter-bar__control">
          <select id="filter-bedrooms" value={filters.bedrooms} onChange={(e) => update('bedrooms', e.target.value)}>
            {bedroomOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <i className="fa-solid fa-chevron-down" aria-hidden="true" />
        </div>
      </div>

      <div className="filter-bar__field">
        <label htmlFor="filter-bathrooms">Bathrooms</label>
        <div className="filter-bar__control">
          <select id="filter-bathrooms" value={filters.bathrooms} onChange={(e) => update('bathrooms', e.target.value)}>
            {bathroomOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <i className="fa-solid fa-chevron-down" aria-hidden="true" />
        </div>
      </div>

      <div className="filter-bar__field">
        <label htmlFor="filter-status">Status</label>
        <div className="filter-bar__control">
          <select id="filter-status" value={filters.status} onChange={(e) => update('status', e.target.value)}>
            {statusOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <i className="fa-solid fa-chevron-down" aria-hidden="true" />
        </div>
      </div>

      <button type="submit" className="filter-bar__submit">
        <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
        Search
      </button>
    </form>
  );
}
