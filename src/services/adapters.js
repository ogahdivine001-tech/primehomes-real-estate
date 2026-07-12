import { urlFor } from './sanityClient.js';

/**
 * adaptSanityProperty
 * Converts a raw Sanity property document (as shaped by queries.js)
 * into the exact object shape src/data/properties.js already produces,
 * so every existing component (PropertyCard, PropertyGrid, filters,
 * PropertyDetails) works identically regardless of the data source.
 */
export function adaptSanityProperty(doc) {
  if (!doc) return null;

  const gallery = [
    doc.coverImage,
    ...(doc.gallery || []),
  ]
    .filter(Boolean)
    .map((img) => urlFor(img)?.width(1600).url())
    .filter(Boolean);

  return {
    id: doc.id,
    slug: doc.slug,
    title: doc.title,
    type: doc.type,
    status: doc.status,
    price: doc.price,
    address: doc.address,
    city: doc.city,
    state: doc.state,
    bedrooms: doc.bedrooms,
    bathrooms: doc.bathrooms,
    area: doc.area,
    featured: Boolean(doc.featured),
    description: doc.description,
    image: urlFor(doc.coverImage)?.width(900).url(),
    gallery: gallery.length > 0 ? gallery : [urlFor(doc.coverImage)?.width(1600).url()].filter(Boolean),
    lat: doc.lat,
    lng: doc.lng,
    agentId: doc.agent?.id,
    // Embedded agent (only present for Sanity-sourced properties). Detail
    // pages prefer this over a separate lookup when it's available.
    agent: doc.agent ? adaptSanityAgent(doc.agent) : null,
  };
}

/**
 * adaptSanityAgent
 * Converts a raw Sanity agent document into the shape src/data/agents.js
 * already produces.
 */
export function adaptSanityAgent(doc) {
  if (!doc) return null;

  return {
    id: doc.id,
    slug: doc.slug,
    name: doc.name,
    title: doc.title,
    phone: doc.phone,
    email: doc.email,
    photo: urlFor(doc.photo)?.width(600).url(),
    bio: doc.bio,
    experience: doc.experience,
    specialties: doc.specialties || [],
    social: doc.social || {},
    listingsCount: doc.listingsCount,
  };
}
