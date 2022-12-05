import React from 'react'
import Image from 'next/image'
import Lead from '../components/Lead'
import RJ from '../public/assets/leads/rj.png'
import Audrey from '../public/assets/leads/audrey.png'
import Paulian from '../public/assets/leads/paulian.png'
import Westin from '../public/assets/leads/westin.png'
import Mariam from '../public/assets/leads/mariam.png'
import Marshall from '../public/assets/leads/marshall.png'
import Kimmy from '../public/assets/leads/kimmy.png'
import Henry from '../public/assets/leads/henry.png'
import Michelle from '../public/assets/leads/michelle.png'
import JS from '../public/assets/leads/js.png'
import laptop from '../public/assets/laptop.png'
import speechbubble from '../public/assets/speechbubble.png'
import girl from '../public/assets/girl.png'

import styles from '../styles/Team.module.css'

export default function Team() {
  const leads = [
    {
      image: RJ,
      width: '1024',
      height: '1024',
      name: 'Sam Kammerman',
      role: 'President, Founder',
      linkedin: 'https://www.linkedin.com/in//',
    },
    {
      image: Audrey,
      width: '1024',
      height: '1024',
      name: 'Dylan Nguyen',
      role: 'Vice President, Founder',
      linkedin: 'https://www.linkedin.com/in/dylanhnguyen/',
    },
  ]

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

      <div className={styles.team}>
        <h1>Our Board</h1>
        <div className={styles.grid}>
          {leads.map(({ image, width, height, name, role, linkedin }) => (
            <Lead
              image={image}
              width={width}
              height={height}
              name={name}
              role={role}
              linkedin={linkedin}
            />
          ))}
        </div>
        <div className={styles.committeeWrapper}>
          <div className={styles.committeeImageGroup}>
            <div className={styles.committee}>
              <h3>Comittee Members</h3>
              <div> Gregory Paik</div>
            </div>
            <div className={styles.laptop}>
              <Image
                alt="Laptop image"
                src={laptop}
                quality={80}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>
          <div className={styles.imageGroup}>
            <div className={styles.speechbubble}>
              <Image
                alt="Speechbubble image"
                src={speechbubble}
                quality={80}
                layout="responsive"
                objectFit="contain"
              />
            </div>
            <div className={styles.girl}>
              <Image
                alt="Girl image"
                src={girl}
                quality={80}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
