import { Link } from 'react-router-dom';
import { navLinks } from '../../data/navLinks.js';
import services from '../../data/services.js';
import './Footer.css';

/**
 * Footer
 * Homepage section (#18 in the spec) and site-wide footer.
 * Four columns: brand/about/social, quick links, services, contact info.
 * Bottom bar has copyright and legal page links.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          {/* Brand + About + Social */}
          <div className="site-footer__about">
            <div className="site-footer__brand">
              <i className="fa-solid fa-building-columns" aria-hidden="true" />
              <span>PrimeHomes</span>
            </div>
            <p>
              PrimeHomes Real Estate represents the world's most exceptional
              properties, connecting discerning buyers and sellers with
              unmatched expertise and personal service.
            </p>
            <div className="site-footer__social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="PrimeHomes on Instagram">
                <i className="fa-brands fa-instagram" aria-hidden="true" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="PrimeHomes on Facebook">
                <i className="fa-brands fa-facebook-f" aria-hidden="true" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="PrimeHomes on LinkedIn">
                <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="PrimeHomes on Twitter">
                <i className="fa-brands fa-x-twitter" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="site-footer__heading">Quick Links</h4>
            <nav className="site-footer__links" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path}>{link.label}</Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="site-footer__heading">Services</h4>
            <nav className="site-footer__links" aria-label="Services">
              {services.slice(0, 5).map((s) => (
                <Link key={s.id} to={`/services#${s.slug}`}>{s.title}</Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="site-footer__heading">Contact Us</h4>
            <div className="site-footer__contact-item">
              <i className="fa-solid fa-location-dot" aria-hidden="true" />
              <span>1200 Park Avenue, New York, NY 10128</span>
            </div>
            <div className="site-footer__contact-item">
              <i className="fa-solid fa-phone" aria-hidden="true" />
              <a href="tel:+18005550199">+1 (800) 555-0199</a>
            </div>
            <div className="site-footer__contact-item">
              <i className="fa-solid fa-envelope" aria-hidden="true" />
              <a href="mailto:hello@primehomes-realestate.com">hello@primehomes-realestate.com</a>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>&copy; {year} PrimeHomes Real Estate. All rights reserved.</span>
          <div className="site-footer__bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
