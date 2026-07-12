import { Link } from 'react-router-dom';
import './BlogCard.css';

/**
 * BlogCard
 * Reusable article card: image with category badge, meta row
 * (author, date, read time), title, excerpt, and a "Read More" link.
 * Used on the homepage Blog section and the full /blog listing page.
 */
export default function BlogCard({ post }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className="blog-card">
      <Link to={`/blog/${post.slug}`} className="blog-card__media" aria-label={`Read ${post.title}`}>
        <img src={post.image} alt={post.title} loading="lazy" />
        <span className="blog-card__category">{post.category}</span>
      </Link>

      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span><i className="fa-regular fa-calendar" aria-hidden="true" /> {formattedDate}</span>
          <span><i className="fa-regular fa-clock" aria-hidden="true" /> {post.readTime} min read</span>
        </div>

        <h3 className="blog-card__title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="blog-card__excerpt">{post.excerpt}</p>

        <Link to={`/blog/${post.slug}`} className="blog-card__link">
          Read More <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
