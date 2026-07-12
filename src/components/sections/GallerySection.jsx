import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle.jsx';
import Lightbox from '../ui/Lightbox.jsx';
import galleryImages from '../../data/gallery.js';
import './GallerySection.css';

/**
 * GallerySection
 * Homepage section (#13 in the spec): masonry photo grid of properties
 * and interiors. Clicking any image opens the shared Lightbox with
 * prev/next navigation across the full set.
 */
export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const goPrev = () => setActiveIndex((i) => (i === 0 ? galleryImages.length - 1 : i - 1));
  const goNext = () => setActiveIndex((i) => (i === galleryImages.length - 1 ? 0 : i + 1));

  return (
    <section className="section gallery-section" aria-label="Property gallery">
      <div className="container">
        <SectionTitle
          eyebrow="Visual Tour"
          title="Gallery"
          subtitle="A closer look at the craftsmanship, design, and detail found across the PrimeHomes portfolio."
        />

        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.id}
              className={`gallery-item ${img.size !== 'normal' ? `gallery-item--${img.size}` : ''}`}
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
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

      <Lightbox
        images={galleryImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onPrev={goPrev}
        onNext={goNext}
      />
    </section>
  );
}
