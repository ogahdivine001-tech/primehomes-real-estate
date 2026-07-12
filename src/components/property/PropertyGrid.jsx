import PropertyCard from './PropertyCard.jsx';
import './PropertyGrid.css';

/**
 * PropertyGrid
 * Responsive CSS Grid of PropertyCard components. Reused on the homepage
 * (Featured Properties) and the full Properties listing page.
 *
 * Props:
 *  - properties: array of property objects
 *  - emptyMessage: text shown when the array is empty (e.g. no filter matches)
 */
export default function PropertyGrid({ properties, emptyMessage = 'No properties match your search.' }) {
  if (!properties || properties.length === 0) {
    return (
      <div className="property-grid__empty">
        <i className="fa-solid fa-house-circle-xmark" aria-hidden="true" />
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="property-grid">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
