import SectionTitle from '../ui/SectionTitle.jsx';
import PropertyGrid from '../property/PropertyGrid.jsx';
import Loader from '../ui/Loader.jsx';
import Button from '../ui/Button.jsx';
import { useProperties } from '../../hooks/useProperties.js';
import './FeaturedProperties.css';

/**
 * FeaturedProperties
 * Homepage section (#4 in the spec) showcasing hand-picked listings.
 * Pulls live from Sanity if connected (see src/services/sanityClient.js),
 * otherwise falls back to the sample dataset automatically.
 */
export default function FeaturedProperties() {
  const { properties, loading } = useProperties('featured');

  return (
    <section className="section featured-properties" aria-label="Featured properties">
      <div className="container">
        <div className="featured-properties__header">
          <SectionTitle
            eyebrow="Handpicked Listings"
            title="Featured Properties"
            subtitle="A curated selection of our most exceptional homes, estates, and residences — each verified and vetted by our luxury specialists."
            align="left"
          />
          <Button to="/properties" variant="dark" icon="fa-solid fa-arrow-right">
            View All Properties
          </Button>
        </div>

        {loading ? <Loader label="Loading featured properties..." /> : <PropertyGrid properties={properties} />}
      </div>
    </section>
  );
}
