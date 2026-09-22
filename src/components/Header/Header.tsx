"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    closeMenu();
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <div className={`${styles.inner} container`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoIcon} aria-hidden="true">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3C13.5 3 8.5 7.5 8.5 13.5c0 3.2 1.1 5.5 2.2 7.5L13 31c0 1.1.9 2 2 2s2-.9 2-2l2-8 2 8c0 1.1.9 2 2 2s2-.9 2-2l2.3-10c1.1-2 2.2-4.3 2.2-7.5C29.5 7.5 24.5 3 19 3z" fill="#1a8ccc"/>
              <ellipse cx="19" cy="22" rx="15.5" ry="5" stroke="#e8192c" strokeWidth="2.4" fill="none" strokeLinecap="round" transform="rotate(-18 19 22)"/>
            </svg>
          </span>
          <span className={styles.logoText}>
            <span className={styles.logoName}>Tanzmee</span>
            <span className={styles.logoDental}>Dental Clinic</span>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={styles.navLink}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.lineTop : ""}`} />
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.lineMiddle : ""}`} />
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.lineBottom : ""}`} />
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileNavList}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={styles.mobileNavLink}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}

        </ul>
      </nav>
    </header>
  );
}
