import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

const PLACEHOLDER_COUNT = 12;

export default function GalleryPage() {
  return (
    <>
      {/* Page Hero */}
      <div className={styles.pageHero}>
        <div className="container">
          <p className="section-label">Our Clinic</p>
          <h1 className={styles.heroTitle}>Gallery</h1>
          <p className={styles.heroSub}>
            A look inside Tanzmee Dental Clinic — our facilities, team, and smiles we have helped create.
          </p>
        </div>
      </div>

      {/* Grid */}
      <section className={`${styles.gallerySection} section`} aria-label="Photo gallery">
        <div className="container">
          <ul className={styles.grid}>
            {/* Placeholder slots */}
            {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
              <li key={`placeholder-${i}`} className={styles.cell}>
                <div className={styles.placeholder} aria-label="Image coming soon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M28 22V26a2 2 0 01-2 2H6a2 2 0 01-2-2V22" stroke="#1a8ccc" strokeWidth="1.8" strokeLinecap="round"/>
                    <path d="M16 4v16M16 4L10 10M16 4l6 6" stroke="#1a8ccc" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className={styles.placeholderLabel}>Photo</span>
                  <span className={styles.placeholderHint}>Coming soon</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
