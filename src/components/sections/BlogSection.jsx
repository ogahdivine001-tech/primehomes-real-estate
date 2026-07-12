import SectionTitle from '../ui/SectionTitle.jsx';
import Button from '../ui/Button.jsx';
import BlogCard from '../blog/BlogCard.jsx';
import { getLatestPosts } from '../../data/blogPosts.js';
import './BlogSection.css';

/**
 * BlogSection
 * Homepage section (#14 in the spec): showcases the 3 latest articles
 * with a link through to the full blog.
 */
export default function BlogSection() {
  const latest = getLatestPosts(3);

  return (
    <section className="section blog-section" aria-label="Latest articles">
      <div className="container">
        <div className="blog-section__header">
          <SectionTitle
            eyebrow="From The Journal"
            title="Insights & Market News"
            subtitle="Expert perspectives on the luxury real estate market, buying and selling strategies, and design trends."
            align="left"
          />
          <Button to="/blog" variant="dark" icon="fa-solid fa-arrow-right">
            Visit The Blog
          </Button>
        </div>

        <div className="blog-section__grid">
          {latest.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
