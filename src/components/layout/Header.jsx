import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import useScrollPosition from "../../hooks/useScrollPosition.js";
import { navLinks } from "../../data/navLinks.js";
import MobileMenu from "./MobileMenu.jsx";
import "./Header.css";

/**
 * Header
 * Sticky navigation bar. Transparent over the fullscreen hero on the
 * homepage; becomes a glassmorphism panel once the user scrolls (or
 * immediately on inner pages that have no dark hero behind it).
 */
export default function Header() {
  const scrolled = useScrollPosition(60);
  const location = useLocation();

  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const searchRef = useRef(null);

  // Pages without a dark hero behind the header should always render the
  // solid/glass variant so nav text stays legible.
  const solidPages = ["/about", "/contact", "/faq", "/privacy", "/terms"];
  const forceSolid = solidPages.includes(location.pathname);

  // Close the search panel when clicking outside of it
  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const headerClass = [
    "header",
    scrolled || forceSolid ? "header--scrolled" : "",
  ]
    .join(" ")
    .trim();

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <motion.header
        className={headerClass}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="header__inner">
          {/* Logo */}
          <Link
            to="/"
            className="header__logo"
            aria-label="PrimeHomes Real Estate — Home"
          >
            <i
              className="fa-solid fa-building-columns header__logo-icon"
              aria-hidden="true"
            />
            <span>
              PrimeHomes
              <span className="header__logo-sub">Real Estate</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="header__nav" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  "header__nav-link" +
                  (isActive ? " header__nav-link--active" : "")
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="header__actions">
            <a href="tel:+18005550199" className="header__call">
              <i className="fa-solid fa-phone" aria-hidden="true" />
              +1 (800) 555-0199
            </a>

            <div className="header__search-wrap" ref={searchRef}>
              <button
                type="button"
                className="header__icon-btn"
                onClick={() => setSearchOpen((o) => !o)}
                aria-expanded={searchOpen}
                aria-label="Toggle property search"
              >
                <i
                  className="fa-solid fa-magnifying-glass"
                  aria-hidden="true"
                />
              </button>

              {searchOpen && (
                <motion.form
                  className="header__search-panel"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  role="search"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <label htmlFor="global-search" className="sr-only">
                    Search properties
                  </label>
                  <input
                    id="global-search"
                    type="text"
                    placeholder="Search by location, city..."
                  />
                  <button type="submit" aria-label="Submit search">
                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </button>
                </motion.form>
              )}
            </div>

            <Link to="/contact" className="header__cta">
              Book Inspection
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`header__burger ${menuOpen ? "header__burger--open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </motion.header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
