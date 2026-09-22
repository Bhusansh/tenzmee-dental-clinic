"use client";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.inner} container`}>
        {/* Text Content */}
        <div className={styles.content}>
          <p className={`${styles.label} section-label`}>Welcome to Tanzmee</p>
          <h1 className={styles.heading}>
            Your Smile,<br />
            Our Priority
          </h1>
          <p className={styles.subtext}>
            Comprehensive dental care for the whole family — gentle, modern, and trusted. We combine the latest technology with a warm, patient-first approach.
          </p>
          <div className={styles.actions}>
            <a href="/contact" className="btn btn-primary">
              Contact
            </a>
            <a href="/#services" className={`btn btn-outline ${styles.learnMore}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Our Services
            </a>
          </div>

          {/* Stats Row */}
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>5000+</span>
              <span className={styles.statLabel}>Patients Treated</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNumber}>15+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statNumber}>12</span>
              <span className={styles.statLabel}>Expert Doctors</span>
            </div>
          </div>
        </div>

        {/* Image / Visual */}
        <div className={styles.visual}>
          <div className={styles.imageCard}>
            <div className={styles.imagePlaceholder} aria-label="Dental clinic interior">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M32 6C20 6 10 16 10 28c0 6.5 2.2 11 4.5 15L19 57c0 2 1.8 4 4 4s4-1.8 4-4l5-16 5 16c0 2 1.8 4 4 4s4-1.8 4-4l4.5-14c2.3-4 4.5-8.5 4.5-15C54 16 44 6 32 6z" fill="#1a8ccc" fillOpacity="0.18"/>
                <path d="M32 6C20 6 10 16 10 28c0 6.5 2.2 11 4.5 15L19 57c0 2 1.8 4 4 4s4-1.8 4-4l5-16 5 16c0 2 1.8 4 4 4s4-1.8 4-4l4.5-14c2.3-4 4.5-8.5 4.5-15C54 16 44 6 32 6z" stroke="#1a8ccc" strokeWidth="2.5" fill="none"/>
                <ellipse cx="32" cy="38" rx="27" ry="9" stroke="#e8192c" strokeWidth="3" fill="none" strokeLinecap="round" transform="rotate(-16 32 38)"/>
              </svg>
              <p className={styles.imagePlaceholderText}>Tanzmee Dental Clinic</p>
              <span className={styles.imagePlaceholderSub}>Clinic image coming soon</span>
            </div>

            {/* Floating badge */}
            <div className={styles.badge}>
              <span className={styles.badgeDot} aria-hidden="true" />
              <span>Currently Open</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
