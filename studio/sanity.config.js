import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes/index.js';

/**
 * Sanity Studio config for PrimeHomes Real Estate.
 *
 * PROJECT_ID and DATASET below must match the values you get when you
 * run `npx sanity init` (see /studio/README.md for the full walkthrough).
 */
export default defineConfig({
  name: 'primehomes-studio',
  title: 'PrimeHomes Real Estate — Content Studio',

  projectId: 'vluopemg', // <- replace after running `npx sanity init`
  dataset: 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
