import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

/**
 * Sanity connection for the live website (read-only).
 *
 * These two values come from your .env file (see .env.example).
 * Until they're set, `isSanityConfigured` is false and every data hook
 * in src/hooks/ automatically falls back to the sample data in src/data/
 * — so the site works out of the box with zero setup, and upgrades to
 * live content the moment you connect a real Sanity project.
 */
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';

export const isSanityConfigured = Boolean(projectId);

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true, // fast, cached reads — fine for public listing data
    })
  : null;

const builder = isSanityConfigured ? imageUrlBuilder(sanityClient) : null;

/**
 * urlFor
 * Converts a Sanity image reference into an actual usable URL, with
 * optional resizing. Usage: urlFor(image).width(800).url()
 */
export function urlFor(source) {
  if (!builder || !source) return null;
  return builder.image(source);
}
