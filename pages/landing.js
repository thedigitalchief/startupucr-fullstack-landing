import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/client'
import { motion } from 'framer-motion'
import { FaChevronRight } from 'react-icons/fa'
import SignupCounter from '../components/SignupCounter'

import logo from '../public/assets/logo.png'
import heroLeft from '../public/assets/hero_left.png'
import heroRight from '../public/assets/hero_right.png'

import styles from '../styles/Index.module.css'

export default function Home() {
  const [session] = useSession()

  const [isMobile, setIsMobile] = useState(false)
  var buttonVariants = {}
  if (!isMobile) {
    buttonVariants = {
      hover: { scale: 1.05 },
      tap: { scale: 0.995 },
    }
  }

  const [checkedIn, setCheckedIn] = useState(false)

  const fetchData = async (userId) => {
    const response = await fetch('/api/checkin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: userId }),
    })
    const data = await response.json()
    setCheckedIn(Object.keys(data.checkins).length !== 0)
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 720)
  }

  useEffect(() => {
    if (session) fetchData(session.user.id)
    window.addEventListener('resize', handleResize)
    setIsMobile(window.innerWidth <= 720)
  }, [session])

  return (
    <div className={styles.bgWrap}>
      <div className={styles.heroLeft}>
        <Image
          src={heroLeft}
          alt="Hero Image"
          objectFit="contain"
          quality={50}
          placeholder="blur"
          priority={true}
        />
      </div>
      <section className={styles.main}>
        <h1 className={styles.title}>Startup@UCR</h1>
        <h3>
          <span className={styles.subintrotext}>
            Entrepreneurship, Community, Execution.
          </span>
        </h3>
        <p> </p>
        <div>
          {session && (
            <h2 className={styles.greeting}>
              glad to have you, {session.user.name}!
            </h2>
          )}
          <div>
            <SignupCounter />
            {!session && (
              <div className={styles.actionwrapper}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/sponsorship-packet.pdf"
                >
                  <motion.button
                    aria-label="Sponsor Button"
                    type="button"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ ease: 'easeInOut', duration: 0.02 }}
                    className={`${styles.secondarybutton} ${styles.sponsorbutton}`}
                  >
                    <span>sponsor us</span>
                    <FaChevronRight className={styles.arrow} />
                  </motion.button>
                </a>
                <motion.button
                  aria-label="Sign In Button"
                  type="button"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ ease: 'easeInOut', duration: 0.02 }}
                  className={styles.primarybutton}
                  onClick={signIn}
                >
                  Join us!
                </motion.button>
              </div>
            )}

            {session && isMobile && !checkedIn && (
              <div className={styles.actionwrapper}>
                <Link passHref href="/checkin">
                  <motion.button
                    aria-label="Check In Button"
                    type="button"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ ease: 'easeInOut', duration: 0.015 }}
                    className={styles.primarybutton}
                  >
                    check in
                  </motion.button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      <div className={styles.heroRight}>
        <Image
          src={heroRight}
          alt="Hero Image"
          objectFit="contain"
          quality={50}
          placeholder="blur"
          priority={true}
        />
      </div>
    </div>
  )
}
