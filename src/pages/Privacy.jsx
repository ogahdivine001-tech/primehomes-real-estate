import SEO from '../components/common/SEO.jsx';
import './legal.css';

const sections = [
  {
    id: 'information-we-collect',
    title: '1. Information We Collect',
    body: [
      'We collect information you provide directly to us, such as your name, email address, phone number, and any details you share through our contact forms, property inquiries, or newsletter signup.',
      'We may also automatically collect certain technical information when you visit our website, including your IP address, browser type, device information, and pages visited, through cookies and similar technologies.',
    ],
  },
  {
    id: 'how-we-use-information',
    title: '2. How We Use Your Information',
    list: [
      'To respond to your inquiries and provide the services you request',
      'To send you property listings, market updates, and newsletters (with your consent)',
      'To improve our website, services, and client experience',
      'To comply with legal obligations and protect our legal rights',
    ],
  },
  {
    id: 'information-sharing',
    title: '3. Information Sharing',
    body: [
      'We do not sell your personal information. We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality obligations.',
      'We may also disclose information when required by law or to protect the rights, property, or safety of PrimeHomes, our clients, or others.',
    ],
  },
  {
    id: 'cookies',
    title: '4. Cookies & Tracking Technologies',
    body: [
      'Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings at any time.',
    ],
  },
  {
    id: 'data-security',
    title: '5. Data Security',
    body: [
      'We implement reasonable administrative, technical, and physical safeguards designed to protect your personal information. However, no method of transmission over the internet is completely secure.',
    ],
  },
  {
    id: 'your-rights',
    title: '6. Your Rights',
    body: [
      'Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict the use of your personal information. To exercise these rights, please contact us using the details below.',
    ],
  },
  {
    id: 'contact',
    title: '7. Contact Us',
    body: [
      'If you have questions about this Privacy Policy, please contact us at privacy@primehomes-realestate.com or +1 (800) 555-0199.',
    ],
  },
];

/**
 * Privacy
 * Standard structured Privacy Policy page with a table of contents
 * linking to each section via in-page anchors.
 */
export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | PrimeHomes Real Estate"
        description="Read PrimeHomes Real Estate's Privacy Policy to understand how we collect, use, and protect your information."
      />

      <section className="legal-page__hero">
        <div className="container">
          <h1>Privacy Policy</h1>
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
