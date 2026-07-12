/**
 * Shared dropdown option lists for property search & filtering.
 * Centralized here so the Hero quick-search, the homepage PropertySearch
 * section, and the Properties page filter bar all stay consistent.
 */

export const propertyTypes = [
  { value: '', label: 'Any Type' },
  { value: 'villa', label: 'Villa' },
  { value: 'penthouse', label: 'Penthouse' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'mansion', label: 'Mansion' },
  { value: 'estate', label: 'Estate' },
  { value: 'townhouse', label: 'Townhouse' },
];

export const statusOptions = [
  { value: '', label: 'Any Status' },
  { value: 'for-sale', label: 'For Sale' },
  { value: 'for-rent', label: 'For Rent' },
  { value: 'sold', label: 'Sold' },
];

export const priceRanges = [
  { value: '', label: 'Any Price' },
  { value: '0-500000', label: 'Under $500,000' },
  { value: '500000-1000000', label: '$500,000 – $1,000,000' },
  { value: '1000000-2500000', label: '$1,000,000 – $2,500,000' },
  { value: '2500000-5000000', label: '$2,500,000 – $5,000,000' },
  { value: '5000000-999999999', label: '$5,000,000+' },
];

export const bedroomOptions = [
  { value: '', label: 'Any' },
  { value: '1', label: '1+' },
  { value: '2', label: '2+' },
  { value: '3', label: '3+' },
  { value: '4', label: '4+' },
  { value: '5', label: '5+' },
];

export const bathroomOptions = [
  { value: '', label: 'Any' },
  { value: '1', label: '1+' },
  { value: '2', label: '2+' },
  { value: '3', label: '3+' },
  { value: '4', label: '4+' },
];
