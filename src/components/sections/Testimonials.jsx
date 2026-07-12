import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import SectionTitle from '../ui/SectionTitle.jsx';
import testimonials from '../../data/testimonials.js';
import './Testimonials.css';

/**
 * Testimonials
 * Homepage section (#11 in the spec): client reviews in a SwiperJS
 * carousel — autoplaying, with pagination dots and custom prev/next
 * arrow buttons wired to the Swiper instance via a ref.
 */
export default function Testimonials() {
  const swiperRef = useRef(null);

  return (
    <section className="section testimonials" aria-label="Client testimonials">
      <div className="container">
        <SectionTitle
          eyebrow="Client Stories"
          title="What Our Clients Say"
          subtitle="The relationships we build matter as much as the properties we sell. Here's what clients have to say about working with PrimeHomes."
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          className="testimonials__swiper"
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          spaceBetween={28}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <article className="testimonial-card">
                <i className="fa-solid fa-quote-left testimonial-card__quote-icon" aria-hidden="true" />

                <div className="testimonial-card__stars" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <i key={i} className="fa-solid fa-star" aria-hidden="true" />
                  ))}
                </div>

                <p className="testimonial-card__text">&ldquo;{t.text}&rdquo;</p>

                <div className="testimonial-card__author">
                  <img src={t.avatar} alt={`Portrait of ${t.name}`} loading="lazy" />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.location}</span>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="testimonials__nav">
          <button
            type="button"
            className="testimonials__nav-btn"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous testimonial"
          >
            <i className="fa-solid fa-arrow-left" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="testimonials__nav-btn"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next testimonial"
          >
            <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
