"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    id: "faq-1",
    question: "How often should I visit the dentist?",
    answer:
      "We recommend visiting the dentist every six months for a routine check-up and professional cleaning. However, patients with gum disease, a high risk of tooth decay, or other conditions may need more frequent visits.",
  },
  {
    id: "faq-2",
    question: "Is teeth whitening safe?",
    answer:
      "Yes, professional teeth whitening is safe when performed by a qualified dentist. We use clinically approved whitening agents and tailor the treatment to your sensitivity levels. Over-the-counter products can be less predictable.",
  },
  {
    id: "faq-3",
    question: "At what age should children first visit the dentist?",
    answer:
      "Children should have their first dental visit by age one, or within six months of their first tooth appearing. Early visits help establish healthy habits and allow us to monitor development.",
  },
  {
    id: "faq-4",
    question: "How long does a dental implant procedure take?",
    answer:
      "The full dental implant process typically takes three to six months. This includes the initial placement, a healing period for the implant to fuse with the jawbone, and then placing the crown. We will provide a detailed timeline during your consultation.",
  },
  {
    id: "faq-5",
    question: "Do you accept walk-in patients?",
    answer:
      "Yes, we welcome walk-in patients, though appointments are preferred to minimize your waiting time. For dental emergencies, please call us directly and we will do our best to see you the same day.",
  },
  {
    id: "faq-6",
    question: "What should I do in a dental emergency?",
    answer:
      "Call our clinic immediately. For a knocked-out tooth, keep it moist — either in milk or held in your cheek — and come to us right away. For severe pain, swelling, or a broken tooth, contact us and we will guide you on the next steps.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Got Questions</p>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to the most common questions about our services and treatments.
          </p>
        </div>

        <ul className={styles.list}>
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <li key={faq.id} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
                <button
                  className={styles.question}
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`answer-${faq.id}`}
                  id={`question-${faq.id}`}
                >
                  <span>{faq.question}</span>
                  <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                <div
                  id={`answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`question-${faq.id}`}
                  className={`${styles.answer} ${isOpen ? styles.answerOpen : ""}`}
                >
                  <p className={styles.answerText}>{faq.answer}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
