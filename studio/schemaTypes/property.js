/**
 * property.js — Sanity schema for a real estate listing.
 *
 * This defines the exact form an agent sees in Sanity Studio when they
 * click "New Property." Every field here becomes an input on that form.
 */
export default {
  name: 'property',
  title: 'Property Listing',
  type: 'document',
  groups: [
    { name: 'basics', title: 'Basics' },
    { name: 'details', title: 'Details' },
    { name: 'media', title: 'Photos' },
    { name: 'location', title: 'Location' },
  ],
  fields: [
    {
      name: 'title',
      title: 'Property Title',
      type: 'string',
      description: 'e.g. "Oceanfront Villa"',
      validation: (Rule) => Rule.required(),
      group: 'basics',
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'Auto-generated from the title. This becomes the page URL.',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
      group: 'basics',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'For Sale', value: 'for-sale' },
          { title: 'For Rent', value: 'for-rent' },
          { title: 'Sold', value: 'sold' },
        ],
        layout: 'radio',
      },
      initialValue: 'for-sale',
      validation: (Rule) => Rule.required(),
      group: 'basics',
    },
    {
      name: 'type',
      title: 'Property Type',
      type: 'string',
      options: {
        list: [
          { title: 'Villa', value: 'villa' },
          { title: 'Penthouse', value: 'penthouse' },
          { title: 'Apartment', value: 'apartment' },
          { title: 'Mansion', value: 'mansion' },
          { title: 'Estate', value: 'estate' },
          { title: 'Townhouse', value: 'townhouse' },
        ],
      },
      validation: (Rule) => Rule.required(),
      group: 'basics',
    },
    {
      name: 'price',
      title: 'Price (USD)',
      type: 'number',
      description: 'For rentals, enter the monthly rent amount.',
      validation: (Rule) => Rule.required().positive(),
      group: 'basics',
    },
    {
      name: 'featured',
      title: 'Show in "Featured Properties" on the homepage?',
      type: 'boolean',
      initialValue: false,
      group: 'basics',
    },

    { name: 'bedrooms', title: 'Bedrooms', type: 'number', validation: (Rule) => Rule.required().min(0), group: 'details' },
    { name: 'bathrooms', title: 'Bathrooms', type: 'number', validation: (Rule) => Rule.required().min(0), group: 'details' },
    { name: 'area', title: 'Area (sqft)', type: 'number', validation: (Rule) => Rule.required().positive(), group: 'details' },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
      group: 'details',
    },
    {
      name: 'agent',
      title: 'Listing Agent',
      type: 'reference',
      to: [{ type: 'agent' }],
      description: 'Which agent should be shown as the contact for this listing?',
      validation: (Rule) => Rule.required(),
      group: 'details',
    },

    {
      name: 'coverImage',
      title: 'Cover Photo',
      type: 'image',
      options: { hotspot: true },
      description: 'The main photo shown on property cards and at the top of the gallery.',
      validation: (Rule) => Rule.required(),
      group: 'media',
    },
    {
      name: 'gallery',
      title: 'Additional Photos',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Upload as many additional photos as you like — these appear in the gallery slider.',
      group: 'media',
    },

    { name: 'address', title: 'Street Address', type: 'string', validation: (Rule) => Rule.required(), group: 'location' },
    { name: 'city', title: 'City', type: 'string', validation: (Rule) => Rule.required(), group: 'location' },
    { name: 'state', title: 'State / Region', type: 'string', validation: (Rule) => Rule.required(), group: 'location' },
    {
      name: 'geopoint',
      title: 'Map Location',
      type: 'geopoint',
      description: 'Drop a pin so the property shows correctly on the map.',
      group: 'location',
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'city', media: 'coverImage', status: 'status' },
    prepare({ title, subtitle, media, status }) {
      return {
        title,
        subtitle: `${subtitle || ''} · ${status || ''}`,
        media,
      };
    },
  },
};
