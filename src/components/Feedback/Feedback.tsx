"use client";

import { useState } from "react";
import styles from "./Feedback.module.css";

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
}

const initialTestimonials: Review[] = [
  {
    id: "t1",
    name: "Priya Sharma",
    rating: 5,
    comment: "Tanzmee Dental Clinic completely changed how I feel about visiting the dentist. The team is warm, professional, and the clinic is spotless. My smile has never looked better.",
  },
  {
    id: "t2",
    name: "Rahul Mehta",
    rating: 5,
    comment: "I had my dental implants done here and the results are outstanding. The procedure was explained thoroughly and the follow-up care was exceptional. Highly recommended.",
  },
  {
    id: "t3",
    name: "Anika Joshi",
    rating: 5,
    comment: "My daughter used to be terrified of dentists. After just one visit to Tanzmee, she was completely at ease. The pediatric care here is gentle, patient, and thorough.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className={styles.rating} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? styles.starFilled : styles.starEmpty} aria-hidden="true">
          &#9733;
        </span>
      ))}
    </div>
  );
}

function StarPicker({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className={styles.starPicker} role="group" aria-label="Select star rating">
      {Array.from({ length: 5 }).map((_, i) => {
        const star = i + 1;
        return (
          <button
            key={star}
            type="button"
            aria-label={`${star} star${star > 1 ? "s" : ""}`}
            className={`${styles.starPickerBtn} ${star <= (hovered || value) ? styles.starPickerActive : ""}`}
            onClick={() => onChange(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
          >
            &#9733;
          </button>
        );
      })}
    </div>
  );
}

export default function Feedback() {
  const [reviews, setReviews] = useState<Review[]>(initialTestimonials);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating) { setError("Please select a star rating."); return; }
    if (!name.trim()) { setError("Please enter your name."); return; }
    if (!comment.trim()) { setError("Please write a comment."); return; }

    const newReview: Review = {
      id: `user-${Date.now()}`,
      name: name.trim(),
      rating,
      comment: comment.trim(),
    };

    setReviews((prev) => [newReview, ...prev]);
    setName("");
    setRating(0);
    setComment("");
    setError("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Patient Stories</p>
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">
            Thousands of patients trust us with their smiles. Here is what some of them have to say.
          </p>
        </div>

        <ul className={styles.grid}>
          {reviews.map((t) => (
            <li key={t.id} className={styles.card}>
              <StarRating count={t.rating} />
              <blockquote className={styles.quote}>
                <p>{t.comment}</p>
              </blockquote>
              <div className={styles.author}>
                <div className={styles.avatar} aria-hidden="true">
                  {t.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className={styles.authorName}>{t.name}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Review Submission Form */}
        <div className={styles.formWrap}>
          <h3 className={styles.formTitle}>Share Your Experience</h3>
          <p className={styles.formDesc}>Had a visit with us? We would love to hear your feedback.</p>

          {submitted && (
            <div className={styles.successMsg} role="alert">
              Thank you for your review! It has been added above.
            </div>
          )}

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.formRow}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="review-name">Your Name</label>
                <input
                  id="review-name"
                  type="text"
                  className={styles.input}
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={styles.field}>
                <span className={styles.label}>Your Rating</span>
                <StarPicker value={rating} onChange={setRating} />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="review-comment">Your Comment</label>
              <textarea
                id="review-comment"
                className={styles.textarea}
                rows={3}
                placeholder="Tell us about your experience..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>

            {error && <p className={styles.errorMsg} role="alert">{error}</p>}

            <button type="submit" className="btn btn-primary">
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
