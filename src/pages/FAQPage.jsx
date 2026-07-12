import SEO from '../components/common/SEO.jsx';
import Accordion from '../components/ui/Accordion.jsx';
import Button from '../components/ui/Button.jsx';
import faqs from '../data/faqs.js';
import './FAQPage.css';

// Icons per FAQ category for a bit of visual structure
const categoryIcons = {
  Buying: 'fa-solid fa-house-circle-check',
  Selling: 'fa-solid fa-hand-holding-dollar',
  Process: 'fa-solid fa-list-check',
  Fees: 'fa-solid fa-sack-dollar',
  'Property Management': 'fa-solid fa-building-shield',
};

/**
 * FAQPage
 * Full FAQ page: every question from the dataset, grouped by category,
 * each group rendered as its own Accordion instance.
 */
export default function FAQPage() {
  const categories = [...new Set(faqs.map((f) => f.category))];

  return (
    <>
      <SEO
        title="Frequently Asked Questions | PrimeHomes Real Estate"
        description="Answers to common questions about buying, selling, and investing in luxury real estate with PrimeHomes."
      />

      <section className="faq-page__hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Answers to the questions we hear most from buyers, sellers, and investors.</p>
        </div>
      </section>

      <section className="section faq-page">
        <div className="container">
          {categories.map((category) => (
            <div className="faq-page__category" key={category}>
              <h2 className="faq-page__category-title">
                <i className={categoryIcons[category] || 'fa-solid fa-circle-question'} aria-hidden="true" />
                {category}
              </h2>
              <Accordion items={faqs.filter((f) => f.category === category)} />
            </div>
          ))}

          <div className="faq-page__contact-cta">
            <h3>Still have questions?</h3>
            <p>Our team is happy to help with anything not covered here.</p>
            <Button to="/contact" variant="dark" icon="fa-solid fa-arrow-right">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
