import React from 'react'
import Image from 'next/image'
import plants from '../public/assets/plants.png'
import { FaCircle } from 'react-icons/fa'

import styles from '../styles/About.module.css'

export default function About() {
  return (
    <section className={styles.section}>
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
      <div className={styles.mainContent}>
        <h1 className={styles.title}>about us</h1>
        <div className={styles.aboutContent}>
          <div className={styles.plants}>
            <Image
              alt="Plants"
              src={plants}
              width={295}
              height={694}
              quality={80}
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={styles.window}>
            <div className={styles.windowHeader}>
              <div>
                <FaCircle className={styles.windowButton} />
                <FaCircle className={styles.windowButton} />
                <FaCircle className={styles.windowButton} />
              </div>
              <div className={styles.filler}>
                <FaCircle className={styles.windowButton} />
                <FaCircle className={styles.windowButton} />
                <FaCircle className={styles.windowButton} />
              </div>
            </div>
            <div className={styles.windowContent}>
              <div>
                <h3 className={styles.content}>
                  Startup@UCR was founded October 1, 2022 with the humble
                  intentions of creating a<br></br>{' '}
                  <strong>
                    welcoming community to share and foster business/startup
                    ideas.
                  </strong>{' '}
                  Futhermore, we focus on actually executing these ideas and
                  work together to{' '}
                  <b>
                    turn concepts into disruptors of industries through
                    informative workshops, fun meetings, and industry
                    networking.
                  </b>
                </h3>
                <h3 className={styles.content}>
                  Our mission is to inspire and provide our fellow peers with
                  not only the resources but also simply a safe atmosphere to
                  bounce ideas off each other. We want to connect peers from
                  different areas of expertise, studies and academic backgrounds
                  to <strong>achieve the American Dream</strong>.
                </h3>

                <p>
                  Best regards,
                  <br />
                  <strong>
                    <span>
                      <a href="https://dylanhnguyen.com"> Sam</a>
                    </span>{' '}
                    &{' '}
                    <span>
                      <a href="https://dylanhnguyen.com">Dylan</a>{' '}
                    </span>
                    <br></br>
                    Startup@UCR Founders
                  </strong>
                </p>
              </div>
              <div className={styles.statsWrapper}>
                <div className={styles.stats}>
                  <h1>2022</h1>
                  <h2>Founded</h2>
                </div>
                <div className={styles.stats}>
                  <h1>+</h1>
                  <h2>Members</h2>
                </div>
                <div className={styles.stats}>
                  <h1>$</h1>
                  <h2>Funding</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
