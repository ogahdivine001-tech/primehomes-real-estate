import { useState } from 'react';
import './Newsletter.css';

/**
 * Newsletter
 * Homepage section (#17 in the spec): gold CTA band for email capture.
 * `handleSubmit` is where a real mailing-list API (Mailchimp, Klaviyo,
 * etc.) would be wired in.
 */
export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  }

  return (
    <section className="newsletter" aria-label="Newsletter signup">
      <div className="container newsletter__inner">
        <div className="newsletter__text">
          <h3>Stay Ahead of the Market</h3>
          <p>Subscribe for early access to new listings, market insights, and exclusive events.</p>
        </div>

        {subscribed ? (
          <div className="newsletter__success" role="status">
            <i className="fa-solid fa-circle-check" aria-hidden="true" />
            You're subscribed! Watch your inbox for updates.
          </div>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <label htmlFor="newsletter-email" className="sr-only">Email address</label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
}
