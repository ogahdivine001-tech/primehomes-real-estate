# PrimeHomes Content Studio (Sanity)

This is the admin dashboard agents use to add, edit, and remove property
listings and agent profiles — no code required.

## One-time setup (you, the developer/site owner)

1. **Create a free Sanity account & project**
   ```bash
   cd studio
   npm install
   npx sanity init
   ```
   - Log in / sign up (free tier is plenty for this site)
   - Choose **"Create new project"**, name it e.g. "PrimeHomes"
   - Choose the **production** dataset, make it **public**
   - When asked to use the existing config, say **yes**

2. **Copy your Project ID into the config**
   The `sanity init` command prints a Project ID (looks like `abc123xy`).
   Paste it into **both**:
   - `studio/sanity.config.js` → `projectId: 'YOUR_PROJECT_ID'`
   - `studio/sanity.cli.js` → `projectId: 'YOUR_PROJECT_ID'`

3. **Connect the main website to the same project**
   In the project root (not `/studio`), copy `.env.example` to `.env` and fill in:
   ```
   VITE_SANITY_PROJECT_ID=abc123xy
   VITE_SANITY_DATASET=production
   ```
   Restart `npm run dev` in the main project — it will now pull live data.
   (Until this `.env` exists, the site automatically uses the built-in sample
   listings, so nothing breaks in the meantime.)

4. **Run the Studio**
   ```bash
   cd studio
   npm run dev
   ```
   Opens at **http://localhost:3333** — this is the dashboard your agents log into.

5. **Deploy the Studio so agents can access it from anywhere** (optional but recommended)
   ```bash
   npm run deploy
   ```
   This gives you a hosted URL like `primehomes.sanity.studio` that agents
   can bookmark and log into from any browser — they never need to touch code
   or a terminal again after this point.

6. **Invite your agents**
   Go to [sanity.io/manage](https://sanity.io/manage) → your project →
   **Members** → **Invite**. Each agent gets their own login.

## How an agent adds a home for sale (day-to-day use)

1. Log into the Studio URL (e.g. `primehomes.sanity.studio`)
2. Click **Property Listing → + New**
3. Fill in the form: title, status (For Sale/For Rent/Sold), type, price,
   beds/baths/sqft, description, and select themselves (or the listing agent)
   from the **Listing Agent** dropdown
4. Upload the cover photo and additional gallery photos (drag and drop —
   Sanity handles resizing and hosting automatically)
5. Fill in the address and drop a pin on the map
6. Toggle **"Show in Featured Properties"** if it should appear on the homepage
7. Click **Publish**

**That's it.** The listing appears live on the website within seconds —
no redeploy, no developer needed. The same process works for adding or
updating agent profiles under **Agent → + New**.

## What's NOT yet connected to Sanity

To keep this integration focused, only **Properties** and **Agents** are
live-editable right now. Blog posts, testimonials, FAQs, gallery images,
and office locations still live in `src/data/*.js` as static files — the
same pattern used here (schema + query + hook + adapter) can be extended
to any of them later if you'd like agents to manage that content too.
