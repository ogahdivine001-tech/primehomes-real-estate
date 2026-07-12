import { useEffect } from 'react';

/**
 * SEO
 * Lightweight, dependency-free per-page SEO manager.
 * Updates document title and meta description on route change.
 *
 * Usage: <SEO title="Properties | PrimeHomes" description="Browse our listings" />
 */
export default function SEO({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', 'description');
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
}
