import styles from "./Feedback.module.css";

const testimonials = [
  {
    id: "t1",
    name: "Priya Sharma",
    role: "Patient since 2020",
    rating: 5,
    quote:
      "Tanzmee Dental Clinic completely changed how I feel about visiting the dentist. The team is warm, professional, and the clinic is spotless. My smile has never looked better.",
  },
  {
    id: "t2",
    name: "Rahul Mehta",
    role: "Patient since 2019",
    rating: 5,
    quote:
      "I had my dental implants done here and the results are outstanding. The procedure was explained thoroughly and the follow-up care was exceptional. Highly recommended.",
  },
  {
    id: "t3",
    name: "Anika Joshi",
    role: "Patient since 2021",
    rating: 5,
    quote:
      "My daughter used to be terrified of dentists. After just one visit to Tanzmee, she was completely at ease. The pediatric care here is gentle, patient, and thorough.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className={styles.rating} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < count ? styles.starFilled : styles.starEmpty}
          aria-hidden="true"
        >
          &#9733;
        </span>
      ))}
    </div>
  );
}

export default function Feedback() {
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
          {testimonials.map((t) => (
            <li key={t.id} className={styles.card}>
              <StarRating count={t.rating} />
              <blockquote className={styles.quote}>
                <p>{t.quote}</p>
              </blockquote>
              <div className={styles.author}>
                <div className={styles.avatar} aria-hidden="true">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className={styles.authorName}>{t.name}</p>
                  <p className={styles.authorRole}>{t.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
