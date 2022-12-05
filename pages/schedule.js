import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/Live.module.css'

export default function Live() {
  const setupEvents = [
    {
      time: '7:00PM Mondays',
      name: 'Weekly Meeting',
    },
  ]

  const workshops = [
    {
      time: '7:00PM Fridays',
      name: 'Team Building',
    },
  ]

  const activities = [
    {
      time: '10:00am',
      name: 'Club Panel',
    },
  ]

  return (
    <section className={styles.schedule}>
      <div className={styles.wave}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shapefill}
          ></path>
        </svg>
      </div>
      <div className={styles.wrapper}>
        <h1>Schedule</h1>
        <div className={styles.schedules}>
          <div>
            <div className={styles.eventGroupTitle}>
              <h2>setup</h2>
              <p className={styles.hidden}>via</p>
            </div>
            {setupEvents.map(({ time, name }) => (
              <motion.div whileHover={{ scale: 1.03 }} className={styles.event}>
                <div className={styles.eventTime}>{time}</div>
                <div className={styles.eventName}>{name}</div>
              </motion.div>
            ))}
          </div>
          <div>
            <div className={styles.eventGroupTitle}>
              <h2>workshops</h2>
              <p>via zoom</p>
            </div>
            {workshops.map(({ time, name }) => (
              <motion.div whileHover={{ scale: 1.03 }} className={styles.event}>
                <div className={styles.eventTime}>{time}</div>
                <div className={styles.eventName}>{name}</div>
              </motion.div>
            ))}
          </div>
          <div>
            <div className={styles.eventGroupTitle}>
              <h2>activities</h2>
              <p>via Zoom</p>
            </div>
            {activities.map(({ time, name }) => (
              <motion.div whileHover={{ scale: 1.03 }} className={styles.event}>
                <div className={styles.eventTime}>{time}</div>
                <div className={styles.eventName}>{name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
