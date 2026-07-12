/**
 * agent.js — Sanity schema for a team member profile.
 * Referenced by property listings (each listing has one agent assigned).
 */
export default {
  name: 'agent',
  title: 'Agent',
  type: 'document',
  fields: [
    { name: 'name', title: 'Full Name', type: 'string', validation: (Rule) => Rule.required() },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    { name: 'title', title: 'Job Title', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'photo', title: 'Headshot Photo', type: 'image', options: { hotspot: true }, validation: (Rule) => Rule.required() },
    { name: 'phone', title: 'Phone Number', type: 'string', validation: (Rule) => Rule.required() },
    { name: 'email', title: 'Email Address', type: 'string', validation: (Rule) => Rule.required().email() },
    { name: 'bio', title: 'Bio', type: 'text', rows: 4 },
    { name: 'experience', title: 'Years of Experience', type: 'number' },
    {
      name: 'specialties',
      title: 'Specialties',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g. Waterfront Estates, Investment Properties',
    },
    {
      name: 'social',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
      ],
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'title', media: 'photo' },
  },
};
