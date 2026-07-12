import { useMemo, useState } from 'react';
import SEO from '../components/common/SEO.jsx';
import BlogCard from '../components/blog/BlogCard.jsx';
import blogPosts from '../data/blogPosts.js';
import './Blog.css';

/**
 * Blog
 * Full article listing page: category tabs + search, rendered with
 * the reusable BlogCard grid.
 */
export default function Blog() {
  const categories = useMemo(() => ['All', ...new Set(blogPosts.map((p) => p.category))], []);
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return blogPosts.filter((p) => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesQuery = !query.trim() || p.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <>
      <SEO
        title="Blog | PrimeHomes Real Estate"
        description="Expert insights on luxury real estate — market trends, buying and selling guides, investment tips, and design inspiration."
      />

      <section className="blog-page__hero">
        <div className="container">
          <h1>The PrimeHomes Journal</h1>
          <p>Expert perspectives on the luxury real estate market, buying and selling, and design.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-page__toolbar">
            <div className="blog-page__tabs" role="tablist" aria-label="Filter articles by category">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={`blog-page__tab ${activeCategory === cat ? 'blog-page__tab--active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="blog-page__search">
              <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
              <label htmlFor="blog-search" className="sr-only">Search articles</label>
              <input
                id="blog-search"
                type="text"
                placeholder="Search articles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="blog-page__grid">
              {filtered.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="property-grid__empty">
              <i className="fa-solid fa-newspaper" aria-hidden="true" />
              <p>No articles match your search.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
