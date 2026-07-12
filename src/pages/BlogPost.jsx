import { useParams, Link } from 'react-router-dom';
import SEO from '../components/common/SEO.jsx';
import blogPosts, { getPostBySlug } from '../data/blogPosts.js';
import PropertyGrid from '../components/property/PropertyGrid.jsx';
import { getFeaturedProperties } from '../data/properties.js';
import NotFound from './NotFound.jsx';
import './BlogPost.css';

/**
 * BlogPost
 * Single article page: hero image, byline + share row, formatted
 * paragraph content with a drop-cap opener, related articles sidebar
 * and section, plus a featured-listings sidebar card to cross-sell.
 */
export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return <NotFound />;
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const related = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3);
  const relatedFallback = related.length > 0 ? related : blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  async function handleShare() {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: post.title, url });
      } catch {
        /* user cancelled */
      }
    } else {
      await navigator.clipboard.writeText(url);
      alert('Link copied to clipboard!');
    }
  }

  return (
    <>
      <SEO title={`${post.title} | PrimeHomes Real Estate`} description={post.excerpt} />

      <div className="blog-post__hero">
        <img src={post.image} alt={post.title} />
        <div className="blog-post__hero-overlay">
          <div className="container blog-post__hero-content">
            <span className="blog-post__category">{post.category}</span>
            <h1>{post.title}</h1>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container blog-post__layout">
          <div>
            <div className="blog-post__meta">
              <div className="blog-post__author">
                <img src={post.authorImage} alt={post.author} />
                <div>
                  <strong>{post.author}</strong>
                  <span>{formattedDate} · {post.readTime} min read</span>
                </div>
              </div>

              <div className="blog-post__share">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                >
                  <i className="fa-brands fa-facebook-f" aria-hidden="true" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Twitter"
                >
                  <i className="fa-brands fa-x-twitter" aria-hidden="true" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                >
                  <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
                </a>
                <button type="button" onClick={handleShare} aria-label="Copy link">
                  <i className="fa-solid fa-link" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="blog-post__content">
              {post.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          <aside className="blog-post__sidebar">
            <div className="blog-post__sidebar-card">
              <h4>Related Articles</h4>
              {relatedFallback.map((p) => (
                <div className="blog-post__related-item" key={p.id}>
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                </div>
              ))}
            </div>

            <div className="blog-post__sidebar-card">
              <h4>Featured Listings</h4>
              <p className="text-muted" style={{ fontSize: '0.88rem', marginBottom: '1rem' }}>
                Explore some of our most exceptional current listings.
              </p>
              <Link to="/properties" style={{ fontWeight: 600, color: 'var(--color-primary)' }}>
                View All Properties <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section blog-post__related-section">
        <div className="container">
          <h2 style={{ marginBottom: '2rem' }}>Explore Featured Properties</h2>
          <PropertyGrid properties={getFeaturedProperties().slice(0, 3)} />
        </div>
      </section>
    </>
  );
}
