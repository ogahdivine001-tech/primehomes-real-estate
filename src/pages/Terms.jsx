import SEO from '../components/common/SEO.jsx';
import './legal.css';

const sections = [
  {
    id: 'acceptance',
    title: '1. Acceptance of Terms',
    body: [
      'By accessing or using the PrimeHomes Real Estate website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website.',
    ],
  },
  {
    id: 'use-of-website',
    title: '2. Use of Website',
    body: [
      'This website and its content are intended for informational purposes related to real estate services offered by PrimeHomes. You agree to use the site only for lawful purposes and in a manner that does not infringe the rights of others.',
    ],
    list: [
      'Do not attempt to gain unauthorized access to any part of the website',
      'Do not use automated systems to scrape or extract content without permission',
      'Do not use the website to transmit harmful or unlawful content',
    ],
  },
  {
    id: 'property-listings',
    title: '3. Property Listings',
    body: [
      'While we strive to ensure all property listings are accurate and up to date, PrimeHomes does not guarantee the accuracy, completeness, or availability of any listing. All information should be independently verified before making any purchasing decisions.',
    ],
  },
  {
    id: 'intellectual-property',
    title: '4. Intellectual Property',
    body: [
      'All content on this website, including text, images, logos, and design elements, is the property of PrimeHomes Real Estate or its licensors and is protected by applicable intellectual property laws. Content may not be reproduced without prior written consent.',
    ],
  },
  {
    id: 'limitation-of-liability',
    title: '5. Limitation of Liability',
    body: [
      'PrimeHomes shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided herein.',
    ],
  },
  {
    id: 'changes-to-terms',
    title: '6. Changes to These Terms',
    body: [
      'We reserve the right to modify these Terms & Conditions at any time. Continued use of the website following any changes constitutes acceptance of the revised terms.',
    ],
  },
  {
    id: 'governing-law',
    title: '7. Governing Law',
    body: [
      'These Terms & Conditions are governed by the laws of the State of New York, without regard to its conflict of law provisions.',
    ],
  },
  {
    id: 'contact',
    title: '8. Contact Us',
    body: [
      'If you have questions about these Terms & Conditions, please contact us at legal@primehomes-realestate.com or +1 (800) 555-0199.',
    ],
  },
];

/**
 * Terms
 * Standard structured Terms & Conditions page, matching the Privacy
 * Policy's table-of-contents + anchor-linked section layout.
 */
export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions | PrimeHomes Real Estate"
        description="Read the Terms & Conditions governing your use of the PrimeHomes Real Estate website and services."
      />

      <section className="legal-page__hero">
        <div className="container">
          <h1>Terms &amp; Conditions</h1>
          <p>Last updated: January 1, 2026</p>
        </div>
      </section>

      <section className="section legal-page">
        <div className="container">
          <div className="legal-page__toc">
            <h3>Table of Contents</h3>
            <ol>
              {sections.map((s) => (
                <li key={s.id}><a href={`#${s.id}`}>{s.title}</a></li>
              ))}
            </ol>
          </div>

          {sections.map((s) => (
            <div className="legal-page__section" id={s.id} key={s.id}>
              <h2>{s.title}</h2>
              {s.body && s.body.map((p, i) => <p key={i}>{p}</p>)}
              {s.list && (
                <ul>
                  {s.list.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
