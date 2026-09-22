"use client";
import styles from "./ServicesSection.module.css";

const services = [
  {
    id: "general-dentistry",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M14 2C9 2 4.5 6 4.5 11.5c0 2.8 1 4.8 2 6.5L9 24c0 1 .9 1.8 2 1.8s2-.8 2-1.8l1-4 1 4c0 1 .9 1.8 2 1.8s2-.8 2-1.8l2.5-6c1-1.7 2-3.7 2-6.5C23.5 6 19 2 14 2z" stroke="#1a8ccc" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      </svg>
    ),
    title: "General Dentistry",
    description: "Routine check-ups, cleanings, fillings, and preventive care to keep your teeth healthy for life.",
  },
  {
    id: "teeth-whitening",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="14" cy="14" r="9" stroke="#1a8ccc" strokeWidth="2"/>
        <path d="M10 14c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="#1a8ccc" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 4V2M14 26v-2M4 14H2M26 14h-2" stroke="#1a8ccc" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Teeth Whitening",
    description: "Professional whitening treatments that safely brighten your smile by several shades.",
  },
  {
    id: "braces-aligners",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="4" y="10" width="20" height="8" rx="4" stroke="#1a8ccc" strokeWidth="2"/>
        <path d="M10 10v8M14 10v8M18 10v8" stroke="#1a8ccc" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7 14h14" stroke="#1a8ccc" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Braces and Aligners",
    description: "Traditional braces and clear aligner solutions for a straighter, more confident smile.",
  },
  {
    id: "dental-implants",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M14 4C11 4 9 6 9 9s2 5 5 5 5-2 5-5-2-5-5-5z" stroke="#1a8ccc" strokeWidth="2" fill="none"/>
        <path d="M14 14v10M11 17h6M12 20h4M12.5 23h3" stroke="#1a8ccc" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions that look, feel, and function like your natural teeth.",
  },
  {
    id: "root-canal",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M14 3C9.5 3 6 7 6 11.5c0 2.5.8 4.5 1.8 6L10 24c0 .9.9 1.7 2 1.7s2-.8 2-1.7" stroke="#1a8ccc" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M14 3c4.5 0 8 4 8 8.5 0 2.5-.8 4.5-1.8 6L18 24c0 .9-.9 1.7-2 1.7s-2-.8-2-1.7v-8.5" stroke="#1a8ccc" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <circle cx="14" cy="10" r="2.5" fill="#1a8ccc" fillOpacity="0.2" stroke="#1a8ccc" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Root Canal Treatment",
    description: "Effective treatment to relieve tooth pain and save infected teeth from extraction.",
  },
  {
    id: "pediatric-dentistry",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="14" cy="10" r="5" stroke="#1a8ccc" strokeWidth="2" fill="none"/>
        <path d="M6 24c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#1a8ccc" strokeWidth="2" strokeLinecap="round" fill="none"/>
        <path d="M20 6l2-2M22 8h2" stroke="#e8192c" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "Pediatric Dentistry",
    description: "Gentle, fun dental care specially designed to make children feel comfortable and safe.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className={`${styles.section} section`}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">What We Offer</p>
          <h2 className="section-title">Our Services</h2>
          <p className={`section-subtitle ${styles.subtitle}`}>
            From routine check-ups to advanced procedures, we provide a full range of dental treatments under one roof.
          </p>
        </div>

        <ul className={styles.grid}>
          {services.map((service) => (
            <li key={service.id} className={styles.card}>
              <div className={styles.iconWrap} aria-hidden="true">
                {service.icon}
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
