import Link from "next/link";
import styles from "./Footer.module.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "General Dentistry",
  "Teeth Whitening",
  "Braces and Aligners",
  "Dental Implants",
  "Root Canal Treatment",
  "Pediatric Dentistry",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.inner} container`}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <svg width="36" height="36" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M19 3C13.5 3 8.5 7.5 8.5 13.5c0 3.2 1.1 5.5 2.2 7.5L13 31c0 1.1.9 2 2 2s2-.9 2-2l2-8 2 8c0 1.1.9 2 2 2s2-.9 2-2l2.3-10c1.1-2 2.2-4.3 2.2-7.5C29.5 7.5 24.5 3 19 3z" fill="#1a8ccc"/>
                <ellipse cx="19" cy="22" rx="15.5" ry="5" stroke="#e8192c" strokeWidth="2.4" fill="none" strokeLinecap="round" transform="rotate(-18 19 22)"/>
              </svg>
              <div>
                <p className={styles.logoName}>Tanzmee</p>
                <p className={styles.logoDental}>Dental Clinic</p>
              </div>
            </div>
            <p className={styles.brandDesc}>
              Advanced dental care with a gentle touch. We are committed to your oral health and overall well-being.
            </p>
            <p className={styles.contact}>
              <a href="tel:+911234567890">+91 12345 67890</a>
            </p>
            <p className={styles.contact}>
              <a href="mailto:info@tanzmeedental.com">info@tanzmeedental.com</a>
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Quick Links</h3>
            <ul className={styles.colList}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.colLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Our Services</h3>
            <ul className={styles.colList}>
              {services.map((s) => (
                <li key={s}>
                  <Link href="/#services" className={styles.colLink}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Working Hours</h3>
            <ul className={styles.hoursList}>
              <li className={styles.hoursItem}>
                <span>Mon — Fri</span>
                <span>9 AM — 8 PM</span>
              </li>
              <li className={styles.hoursItem}>
                <span>Saturday</span>
                <span>9 AM — 6 PM</span>
              </li>
              <li className={styles.hoursItem}>
                <span>Sunday</span>
                <span className={styles.closedText}>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Tanzmee Dental Clinic. All rights reserved.
          </p>
          <p className={styles.disclaimer}>
            Designed for informational purposes. Consult a qualified dentist for medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
