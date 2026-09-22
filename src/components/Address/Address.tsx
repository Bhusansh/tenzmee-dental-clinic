import styles from "./Address.module.css";

export default function Address() {
  return (
    <section id="contact" className={`${styles.section} section`}>
      <div className="container">
        <div className={styles.wrapper}>
          {/* Info */}
          <div className={styles.info}>
            <p className="section-label">Find Us</p>
            <h2 className="section-title">Our Address</h2>

            <ul className={styles.details}>
              <li className={styles.detailItem}>
                <span className={styles.detailIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 2C6.68 2 4 4.68 4 8c0 5.25 6 10 6 10s6-4.75 6-10c0-3.32-2.68-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" fill="#1a8ccc"/>
                  </svg>
                </span>
                <div>
                  <p className={styles.detailLabel}>Address</p>
                  <p className={styles.detailValue}>123 Dental Street, Health Nagar,<br />Your City, State — 000000</p>
                </div>
              </li>
              <li className={styles.detailItem}>
                <span className={styles.detailIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 13.5l-2.5-2.5c-.4-.4-1-.4-1.4 0l-1.1 1.1c-.9-.5-2.6-2.2-3.1-3.1L9.5 7.9c.4-.4.4-1 0-1.4L7 4C6.6 3.6 6 3.6 5.6 4L4.4 5.2C3.1 6.5 3 9.3 5.9 12.2c2.9 2.9 5.7 2.8 7 1.5l1.2-1.2c.4-.4.4-1 0-1.4z" fill="#1a8ccc"/>
                  </svg>
                </span>
                <div>
                  <p className={styles.detailLabel}>Phone</p>
                  <a href="tel:+911234567890" className={styles.detailValue}>+91 12345 67890</a>
                </div>
              </li>
              <li className={styles.detailItem}>
                <span className={styles.detailIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2 0l5 5 5-5H5zm0 10h10V7l-5 4.5L5 7v8z" fill="#1a8ccc"/>
                  </svg>
                </span>
                <div>
                  <p className={styles.detailLabel}>Email</p>
                  <a href="mailto:info@tanzmeedental.com" className={styles.detailValue}>info@tanzmeedental.com</a>
                </div>
              </li>
            </ul>

            <a href="tel:+911234567890" className="btn btn-primary">
              Book an Appointment
            </a>
          </div>

          {/* Map Placeholder */}
          <div className={styles.mapWrap}>
            <div className={styles.mapPlaceholder} aria-label="Map location coming soon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M24 4C15.16 4 8 11.16 8 20c0 13.25 16 24 16 24S40 33.25 40 20c0-8.84-7.16-16-16-16zm0 22a6 6 0 110-12 6 6 0 010 12z" fill="#1a8ccc" fillOpacity="0.25" stroke="#1a8ccc" strokeWidth="1.5"/>
              </svg>
              <p className={styles.mapText}>Interactive map coming soon</p>
              <span className={styles.mapSub}>123 Dental Street, Health Nagar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
