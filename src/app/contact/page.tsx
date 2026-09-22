"use client";

import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import Address from "@/components/Address/Address";
import OpeningHours from "@/components/OpeningHours/OpeningHours";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <>
      <div className={styles.pageHero}>
        <div className="container">
          <p className="section-label">Get In Touch</p>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSub}>
            Whether you need to book an appointment or simply have a question, our friendly team is here to help you.
          </p>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadLink}>Home</Link>
            <span className={styles.breadSep} aria-hidden="true">/</span>
            <span className={styles.breadCurrent}>Contact</span>
          </nav>
        </div>
      </div>

      <section className={`${styles.formSection} section`}>
        <div className="container">
          <div className={styles.wrapper}>
            <div className={styles.formPanel}>
              <h2 className={styles.formTitle}>Send us a Message</h2>
              <p className={styles.formDesc}>
                Fill out the form below and we will get back to you as soon as possible. For immediate assistance, please call us directly.
              </p>
              
              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.formGrid}>
                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>Full Name</label>
                    <input type="text" id="name" className={styles.input} placeholder="John Doe" required />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="phone" className={styles.label}>Phone Number</label>
                    <input type="tel" id="phone" className={styles.input} placeholder="+91 00000 00000" required />
                  </div>
                </div>
                
                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  <input type="email" id="email" className={styles.input} placeholder="john@example.com" />
                </div>
                
                <div className={styles.field}>
                  <label htmlFor="service" className={styles.label}>Subject / Service</label>
                  <select id="service" className={styles.select}>
                    <option value="">General Inquiry</option>
                    <option value="appointment">Book Appointment</option>
                    <option value="emergency">Dental Emergency</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea id="message" rows={4} className={styles.textarea} placeholder="How can we help you?"></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>

            <div className={styles.sidePanel}>
              <div className={styles.emergencyCard}>
                <h3 className={styles.emergencyTitle}>Dental Emergency?</h3>
                <p className={styles.emergencyText}>
                  We handle severe toothaches, knocked-out teeth, and other emergencies promptly.
                </p>
                <a href="tel:+911234567890" className={`${styles.emergencyCall} btn`}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M16.5 13.5l-2.5-2.5c-.4-.4-1-.4-1.4 0l-1.1 1.1c-.9-.5-2.6-2.2-3.1-3.1L9.5 7.9c.4-.4.4-1 0-1.4L7 4C6.6 3.6 6 3.6 5.6 4L4.4 5.2C3.1 6.5 3 9.3 5.9 12.2c2.9 2.9 5.7 2.8 7 1.5l1.2-1.2c.4-.4.4-1 0-1.4z" fill="currentColor"/>
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reusing existing sections for full info */}
      <Address />
      <OpeningHours />
      
      <Footer />
    </>
  );
}
