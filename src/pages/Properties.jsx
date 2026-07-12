import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/common/SEO.jsx';
import PropertyFilterBar from '../components/property/PropertyFilterBar.jsx';
import PropertyGrid from '../components/property/PropertyGrid.jsx';
import Loader from '../components/ui/Loader.jsx';
import { useProperties } from '../hooks/useProperties.js';
import { filterProperties, sortProperties } from '../utils/filterProperties.js';
import './Properties.css';

/**
 * Properties
 * Full listings page: embedded filter bar (synced with URL query params),
 * sort dropdown, grid/list view toggle, and the filtered/sorted results.
 * Data comes live from Sanity if connected, otherwise the sample dataset.
 */
export default function Properties() {
  const { properties: allProperties, loading } = useProperties('all');
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState('newest');
  const [view, setView] = useState('grid');

  // Current filters, sourced from the URL so links from Hero/Locations/etc. work
  const filters = {
    location: searchParams.get('location') || '',
    type: searchParams.get('type') || '',
    price: searchParams.get('price') || '',
    bedrooms: searchParams.get('bedrooms') || '',
    bathrooms: searchParams.get('bathrooms') || '',
    status: searchParams.get('status') || '',
  };

  // Re-filter/sort whenever the data, URL params, or sort option change
  const results = useMemo(() => {
    const filtered = filterProperties(allProperties, filters);
    return sortProperties(filtered, sortBy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allProperties, searchParams, sortBy]);

  function handleFilterSubmit(newFilters) {
    const params = {};
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value) params[key] = value;
    });
    setSearchParams(params);
  }

  return (
    <>
      <SEO
        title="Luxury Properties for Sale & Rent | PrimeHomes Real Estate"
        description="Browse our full portfolio of luxury homes, penthouses, and estates. Filter by location, price, bedrooms, and more."
      />

      <section className="properties-page__hero">
        <div className="container">
          <h1>Explore Our Properties</h1>
          <p>{loading ? 'Loading listings...' : `${allProperties.length} exceptional homes, curated for discerning buyers.`}</p>
        </div>
      </section>

      <section className="section properties-page">
        <div className="container">
          <div className="properties-page__toolbar">
            <PropertyFilterBar variant="embedded" initialValues={filters} onSearch={handleFilterSubmit} />
          </div>

          {loading ? (
            <Loader label="Loading properties..." />
          ) : (
            <>
              <div className="properties-page__meta-row">
                <p className="properties-page__count">
                  Showing <strong>{results.length}</strong> of <strong>{allProperties.length}</strong> properties
                </p>

                <div className="flex" style={{ gap: '1.5rem', alignItems: 'center' }}>
                  <div className="properties-page__sort">
                    <label htmlFor="sort-select">Sort by</label>
                    <select id="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                      <option value="newest">Newest</option>
                      <option value="price-asc">Price: Low to High</option>
                      <option value="price-desc">Price: High to Low</option>
                      <option value="beds">Most Bedrooms</option>
                    </select>
                  </div>

                  <div className="properties-page__view-toggle" role="group" aria-label="Toggle grid or list view">
                    <button
                      type="button"
                      className={`properties-page__view-btn ${view === 'grid' ? 'properties-page__view-btn--active' : ''}`}
                      onClick={() => setView('grid')}
                      aria-pressed={view === 'grid'}
                      aria-label="Grid view"
                    >
                      <i className="fa-solid fa-grip" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className={`properties-page__view-btn ${view === 'list' ? 'properties-page__view-btn--active' : ''}`}
                      onClick={() => setView('list')}
                      aria-pressed={view === 'list'}
                      aria-label="List view"
                    >
                      <i className="fa-solid fa-list" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>

              <div className={view === 'list' ? 'property-grid--list' : ''}>
                <PropertyGrid
                  properties={results}
                  emptyMessage="No properties match your current filters. Try adjusting your search."
                />
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
