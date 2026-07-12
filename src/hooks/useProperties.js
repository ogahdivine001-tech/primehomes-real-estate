import { useEffect, useState } from 'react';
import { sanityClient, isSanityConfigured } from '../services/sanityClient.js';
import { ALL_PROPERTIES_QUERY, FEATURED_PROPERTIES_QUERY, PROPERTY_BY_SLUG_QUERY } from '../services/queries.js';
import { adaptSanityProperty } from '../services/adapters.js';
import staticProperties, { getFeaturedProperties as getStaticFeatured, getPropertyBySlug as getStaticBySlug } from '../data/properties.js';

/**
 * useProperties
 * Returns { properties, loading, error, isLive }.
 *
 * - If Sanity is configured (VITE_SANITY_PROJECT_ID is set), fetches
 *   real listings live from your Sanity dataset — agents can add a
 *   property in Sanity Studio and it appears on the site within seconds,
 *   no redeploy needed.
 * - If Sanity is NOT configured, immediately returns the sample data
 *   from src/data/properties.js so the site works out of the box.
 *
 * @param {'all' | 'featured'} scope
 */
export function useProperties(scope = 'all') {
  const [properties, setProperties] = useState(
    scope === 'featured' ? getStaticFeatured() : staticProperties
  );
  const [loading, setLoading] = useState(isSanityConfigured);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isSanityConfigured) return;

    let cancelled = false;
    setLoading(true);

    const query = scope === 'featured' ? FEATURED_PROPERTIES_QUERY : ALL_PROPERTIES_QUERY;

    sanityClient
      .fetch(query)
      .then((docs) => {
        if (cancelled) return;
        setProperties(docs.map(adaptSanityProperty));
        setError(null);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('Failed to fetch properties from Sanity, falling back to sample data:', err);
        setError(err);
        setProperties(scope === 'featured' ? getStaticFeatured() : staticProperties);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [scope]);

  return { properties, loading, error, isLive: isSanityConfigured && !error };
}

/**
 * usePropertyBySlug
 * Returns { property, loading, error, isLive } for a single listing.
 */
export function usePropertyBySlug(slug) {
  const [property, setProperty] = useState(() => getStaticBySlug(slug) || null);
  const [loading, setLoading] = useState(isSanityConfigured);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isSanityConfigured) {
      setProperty(getStaticBySlug(slug) || null);
      return;
    }

    let cancelled = false;
    setLoading(true);

    sanityClient
      .fetch(PROPERTY_BY_SLUG_QUERY, { slug })
      .then((doc) => {
        if (cancelled) return;
        setProperty(doc ? adaptSanityProperty(doc) : null);
        setError(null);
      })
      .catch((err) => {
        if (cancelled) return;
        console.error('Failed to fetch property from Sanity, falling back to sample data:', err);
        setError(err);
        setProperty(getStaticBySlug(slug) || null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [slug]);

  return { property, loading, error, isLive: isSanityConfigured && !error };
}
