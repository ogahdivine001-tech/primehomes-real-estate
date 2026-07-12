/**
 * GROQ queries — Sanity's query language (similar in spirit to SQL,
 * but shaped for documents/JSON). Each query below shapes the raw
 * Sanity document into the exact structure our React components expect,
 * so no extra mapping is needed elsewhere in the app for these fields.
 */

// Fields shared by every property query below
const propertyProjection = `{
  "id": _id,
  "slug": slug.current,
  title,
  type,
  status,
  price,
  address,
  city,
  state,
  bedrooms,
  bathrooms,
  area,
  featured,
  description,
  coverImage,
  gallery,
  "lat": geopoint.lat,
  "lng": geopoint.lng,
  agent-> {
    "id": _id,
    "slug": slug.current,
    name,
    title,
    phone,
    email,
    photo,
    bio,
    experience,
    specialties,
    social
  }
}`;

export const ALL_PROPERTIES_QUERY = `*[_type == "property"] | order(_createdAt desc) ${propertyProjection}`;

export const FEATURED_PROPERTIES_QUERY = `*[_type == "property" && featured == true] | order(_createdAt desc) ${propertyProjection}`;

export const PROPERTY_BY_SLUG_QUERY = `*[_type == "property" && slug.current == $slug][0] ${propertyProjection}`;

const agentProjection = `{
  "id": _id,
  "slug": slug.current,
  name,
  title,
  phone,
  email,
  photo,
  bio,
  experience,
  specialties,
  social,
  "listingsCount": count(*[_type == "property" && references(^._id)])
}`;

export const ALL_AGENTS_QUERY = `*[_type == "agent"] | order(name asc) ${agentProjection}`;

export const AGENT_BY_SLUG_QUERY = `*[_type == "agent" && slug.current == $slug][0] ${agentProjection}`;
