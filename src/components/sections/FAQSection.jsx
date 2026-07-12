import SectionTitle from '../ui/SectionTitle.jsx';
import Accordion from '../ui/Accordion.jsx';
import Button from '../ui/Button.jsx';
import faqs from '../../data/faqs.js';
import './FAQSection.css';

/**
 * FAQSection
 * Homepage section (#15 in the spec): shows the first 5 FAQs in an
 * accordion, with a link through to the full /faq page for the rest.
 */
export default function FAQSection() {
  const preview = faqs.slice(0, 5);

  return (
    <section className="section faq-section" aria-label="Frequently asked questions">
      <div className="container">
        <SectionTitle
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Answers to the questions we hear most from buyers, sellers, and investors."
        />

        <Accordion items={preview} defaultOpenId={preview[0]?.id} />

        <div className="faq-section__footer">
          <Button to="/faq" variant="outline-dark">
            View All FAQs
          </Button>
        </div>
      </div>
    </section>
  );
}
