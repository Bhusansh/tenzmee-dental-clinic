"use client";

import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

const doctors = [
  {
    id: "dr-one",
    name: "Dr. [First Name] [Last Name]",
    role: "Lead Orthodontist & Founder",
    bio1: "Dr. [Last Name] established Tanzmee Dental Clinic with a vision to provide world-class dental care in a patient-first environment. With over 15 years of clinical experience, they specialize in complex orthodontic cases and full-mouth rehabilitation.",
    bio2: "\"My goal has always been to remove the anxiety associated with dental visits. A smile is a person's greatest asset, and I want every patient walking out of our clinic to feel confident and cared for.\"",
  },
  {
    id: "dr-two",
    name: "Dr. [First Name] [Last Name]",
    role: "Senior Prosthodontist",
    bio1: "Specializing in dental implants and cosmetic dentistry, Dr. [Last Name] brings precision and artistry to every procedure. They continually train in the latest international dental technologies to ensure our patients receive the best possible care.",
    bio2: "\"Dentistry is an art as much as it is a science. I believe in minimal intervention and maximizing the natural beauty of my patients' smiles. Seeing their reaction when they look in the mirror is the most rewarding part of my job.\"",
  }
];

const staffList = [
  { id: 1, name: "[Staff Name]", role: "Clinic Manager" },
  { id: 2, name: "[Staff Name]", role: "Lead Dental Hygienist" },
  { id: 3, name: "[Staff Name]", role: "Dental Assistant" },
  { id: 4, name: "[Staff Name]", role: "Dental Assistant" },
  { id: 5, name: "[Staff Name]", role: "Patient Coordinator" },
  { id: 6, name: "[Staff Name]", role: "Front Desk Executive" },
];

export default function AboutPage() {
  return (
    <>
      <div className={styles.pageHero}>
        <div className="container">
          <p className="section-label">Who We Are</p>
          <h1 className={styles.heroTitle}>About Us</h1>
          <p className={styles.heroSub}>
            Discover the story behind Tanzmee Dental Clinic and meet the dedicated professionals behind your smile.
          </p>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadLink}>Home</Link>
            <span className={styles.breadSep} aria-hidden="true">/</span>
            <span className={styles.breadCurrent}>About</span>
          </nav>
        </div>
      </div>

      {/* Clinic Story Section */}
      <section className={`${styles.storySection} section`}>
        <div className="container">
          <div className={styles.storyWrapper}>
            <div className={styles.storyContent}>
              <h2 className={styles.sectionTitle}>Our Story</h2>
              <p className={styles.storyText}>
                Tanzmee Dental Clinic was founded on a simple principle: dentistry should be painless, transparent, and built on trust. We noticed a growing anxiety among patients when visiting the dentist, and we set out to change that narrative completely.
              </p>
              <p className={styles.storyText}>
                What started as a small two-chair practice has now grown into a state-of-the-art facility equipped with the latest diagnostic and treatment technologies. But despite our growth, our core philosophy remains unchanged. We treat every patient like family, taking the time to explain procedures, discuss options, and ensure complete comfort.
              </p>
              <p className={styles.storyText}>
                Today, we are proud to be the trusted dental care provider for thousands of families in our community, offering everything from routine check-ups to advanced surgical procedures under one roof.
              </p>
            </div>
            
            <div className={styles.storyPhotos}>
              <div className={`${styles.photoPlaceholder} ${styles.photoMain}`} aria-label="Clinic interior photo">
                <span className={styles.placeholderText}>Clinic Interior Photo</span>
              </div>
              <div className={styles.photoGrid}>
                <div className={styles.photoPlaceholder} aria-label="Equipment photo">
                  <span className={styles.placeholderText}>Equipment</span>
                </div>
                <div className={styles.photoPlaceholder} aria-label="Reception photo">
                  <span className={styles.placeholderText}>Reception</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className={`${styles.doctorsSection} section`}>
        <div className="container">
          <div className={styles.doctorsHeader}>
            <p className="section-label">Our Specialists</p>
            <h2 className="section-title">Meet the Doctors</h2>
          </div>

          <div className={styles.doctorsList}>
            {doctors.map((doc, index) => (
              <div key={doc.id} className={`${styles.doctorCard} ${index % 2 !== 0 ? styles.doctorCardReverse : ""}`}>
                <div className={styles.doctorImageWrap}>
                  <div className={styles.circularPlaceholder} aria-label={`Portrait of ${doc.name}`}>
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#1a8ccc" fillOpacity="0.4"/>
                    </svg>
                    <span className={styles.placeholderText}>Photo</span>
                  </div>
                </div>
                <div className={styles.doctorInfo}>
                  <h3 className={styles.doctorName}>{doc.name}</h3>
                  <p className={styles.doctorRole}>{doc.role}</p>
                  <div className={styles.doctorBio}>
                    <p>{doc.bio1}</p>
                    <blockquote className={styles.doctorQuote}>
                      {doc.bio2}
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className={`${styles.staffSection} section`}>
        <div className="container">
          <div className={styles.staffWrapper}>
            <div className={styles.staffHeader}>
              <h2 className={styles.staffTitle}>Our Support Team</h2>
              <p className={styles.staffDesc}>
                Behind every great doctor is an incredible team. Our clinic is supported by {staffList.length}+ dedicated staff members who ensure your visit is smooth, comfortable, and efficient from the moment you walk through our doors.
              </p>
            </div>
            
            <ul className={styles.staffGrid}>
              {staffList.map((staff) => (
                <li key={staff.id} className={styles.staffCard}>
                  <div className={styles.staffAvatar} aria-hidden="true">
                    {staff.name.charAt(1)}
                  </div>
                  <div>
                    <h4 className={styles.staffName}>{staff.name}</h4>
                    <p className={styles.staffRole}>{staff.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
