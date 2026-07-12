import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO.jsx';
import Lightbox from '../components/ui/Lightbox.jsx';
import galleryImages from '../data/gallery.js';
import '../components/sections/GallerySection.css';
import './GalleryPage.css';

/**
 * GalleryPage
 * Full gallery page: same masonry grid + Lightbox as the homepage
 * section, plus category filter tabs derived from the dataset.
 */
export default function GalleryPage() {
  const categories = useMemo(
    () => ['All', ...new Set(galleryImages.map((img) => img.category))],
    []
  );
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeIndex, setActiveIndex] = useState(null);

  const filtered = useMemo(
    () => (activeCategory === 'All' ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)),
    [activeCategory]
  );

  const goPrev = () => setActiveIndex((i) => (i === 0 ? filtered.length - 1 : i - 1));
  const goNext = () => setActiveIndex((i) => (i === filtered.length - 1 ? 0 : i + 1));

  return (
    <>
      <SEO
        title="Gallery | PrimeHomes Real Estate"
        description="Browse our full photo gallery — exteriors, interiors, pools, and design details from the PrimeHomes portfolio."
      />

      <section className="gallery-page__hero">
        <div className="container">
          <h1>Gallery</h1>
          <p>A closer look at the craftsmanship and design across our portfolio.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-page__tabs" role="tablist" aria-label="Filter gallery by category">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={`gallery-page__tab ${activeCategory === cat ? 'gallery-page__tab--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filtered.map((img, i) => (
              <motion.div
                key={img.id}
                className={`gallery-item ${img.size !== 'normal' ? `gallery-item--${img.size}` : ''}`}
                onClick={() => setActiveIndex(i)}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                role="button"
                tabIndex={0}
                aria-label={`View larger image: ${img.alt}`}
                onKeyDown={(e) => { if (e.key === 'Enter') setActiveIndex(i); }}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-item__overlay">
                  <i className="fa-solid fa-magnifying-glass-plus" aria-hidden="true" />
                  <span>{img.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={filtered}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onPrev={goPrev}
        onNext={goNext}
      />
    </>
  );
}
