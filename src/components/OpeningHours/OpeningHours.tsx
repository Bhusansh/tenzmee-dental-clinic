"use client";

import { useState, useEffect } from "react";
import styles from "./OpeningHours.module.css";

const hours = [
  { day: "Monday",    open: "9:00 AM", close: "8:00 PM" },
  { day: "Tuesday",   open: "9:00 AM", close: "8:00 PM" },
  { day: "Wednesday", open: "9:00 AM", close: "8:00 PM" },
  { day: "Thursday",  open: "9:00 AM", close: "8:00 PM" },
  { day: "Friday",    open: "9:00 AM", close: "8:00 PM" },
  { day: "Saturday",  open: "9:00 AM", close: "6:00 PM" },
  { day: "Sunday",    open: null,      close: null       },
];

function getCurrentStatus(): { isOpen: boolean; todayIndex: number } {
  const now = new Date();
  const dayIndex = now.getDay(); // 0=Sun,1=Mon,...,6=Sat
  // map: 0->6(Sun),1->0(Mon),...,6->5(Sat)
  const mapped = dayIndex === 0 ? 6 : dayIndex - 1;
  const today = hours[mapped];
  if (!today.open) return { isOpen: false, todayIndex: mapped };
  const hour = now.getHours() + now.getMinutes() / 60;
  const openHour = 9;
  const closeHour = mapped === 5 ? 18 : 20; // Sat closes 6pm, others 8pm
  return { isOpen: hour >= openHour && hour < closeHour, todayIndex: mapped };
}

export default function OpeningHours() {
  const [status, setStatus] = useState<{ isOpen: boolean; todayIndex: number }>({
    isOpen: false,
    todayIndex: 0,
  });

  useEffect(() => {
    setStatus(getCurrentStatus());
  }, []);

  return (
    <section className={`${styles.section} section`}>
      <div className="container">
        <div className={styles.wrapper}>
          {/* Left — Header */}
          <div className={styles.left}>
            <p className="section-label">Plan Your Visit</p>
            <h2 className="section-title">Opening Hours</h2>
            <p className="section-subtitle">
              We are open six days a week to serve you. Walk-ins welcome, appointments preferred.
            </p>

            <div className={styles.statusBadge}>
              <span
                className={`${styles.statusDot} ${status.isOpen ? styles.open : styles.closed}`}
                aria-hidden="true"
              />
              <span className={styles.statusText}>
                {status.isOpen ? "Currently Open" : "Currently Closed"}
              </span>
            </div>

            <a href="tel:+911234567890" className={`btn btn-primary ${styles.callBtn}`}>
              Call to Book
            </a>
          </div>

          {/* Right — Hours Table */}
          <div className={styles.right}>
            <ul className={styles.hoursList}>
              {hours.map((item, idx) => (
                <li
                  key={item.day}
                  className={`${styles.hoursRow} ${idx === status.todayIndex ? styles.today : ""}`}
                >
                  <span className={styles.dayName}>
                    {item.day}
                    {idx === status.todayIndex && (
                      <span className={styles.todayTag}>Today</span>
                    )}
                  </span>
                  {item.open ? (
                    <span className={styles.timeRange}>
                      <span className={styles.time}>{item.open}</span>
                      <span className={styles.timeSep} aria-hidden="true">—</span>
                      <span className={styles.time}>{item.close}</span>
                    </span>
                  ) : (
                    <span className={styles.closed}>Closed</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
