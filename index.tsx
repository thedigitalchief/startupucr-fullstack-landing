import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useSession, signIn } from 'next-auth/react'
import HeroLayout from '@/components/Layout/HeroLayout'
import styles from '@/styles/index.module.css'
import { LottieWrapper } from '@/components/LottieWrapper'
import heroAnimationData from '@/lotties/puzzleplantcropped.json'
import teamAnimationData from '@/lotties/teamblue.json'
import partyAnimationData from '@/lotties/party.json'
import booksAnimationData from '@/lotties/bookstack.json'
import signAnimationData from '@/lotties/heart.json'
import searchAnimationData from '@/lotties/searching.json'
import rocketAnimationData from '@/lotties/rocket.json'
import checkAnimationData from '@/lotties/check.json'
import professorAnimationData from '@/lotties/professor.json'
import { RightArrowIcon } from '@/components/Icons'

const HeroCard = ({ animationData, title, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.animationWrapperSmall}>
        <LottieWrapper animationData={animationData} />
      </div>
      <h4 className={styles.cardTitle}>{title}</h4>
      <p className={styles.cardCaption}>{children}</p>
    </div>
  )
}

export default function Home() {
  const { data: session } = useSession()
  return (
    <HeroLayout>
      <Head>
        <title>Startup@UCR</title>
        {/* Change this icon when we have a logo */}
        <link rel="icon" href="/logo.svg" />
      </Head>
      <section className={`${styles.hero} ${styles.centered}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>
           Ideas, entrepreneurship, community.<br /> 
           <span>Startup@UCR</span>.
          </h1>

          {session ? (
            <Link href="profile" passHref>
              <button className={styles.heroprimary}>
                My Profile
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </Link>
          ) : (
            <button
              className={styles.heroprimary}
              onClick={() => signIn('google')}
            >
              Join today!
              <RightArrowIcon />
            </button>
          )}
        </div>
        <div className={styles.animationWrapper}>
          <LottieWrapper animationData={heroAnimationData} />
        </div>
      </section>
      <section className={styles.herocardsWrapper}>
        <section className={styles.herocards}>
          <HeroCard animationData={searchAnimationData} title="Mission">
          Our mission is to inspire and enable our members oppurtunities to share and collaborate on their business ideas in a judgement-free, safe environment. 
          </HeroCard>
          <HeroCard animationData={checkAnimationData} title="Goals">
           Our goals include raising funding money, partner with experienced industry entrepreneurs, and create a welcoming community of determined students.
           </HeroCard>
          <HeroCard animationData={rocketAnimationData} title="Who">
           We welcome and embrace anyone with motivation to build their dreams to join. We encourage our peers from every academic background and demographic to give it a shot and join.
          </HeroCard>
        </section>
      </section>
      <div className={styles.swipeIcon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
      </div>
  

      <section className={styles.hero}>
        <div className={styles.content}>
          <h3 className={styles.sectiontitle}>Events</h3>
          <h2>Community & Friendship</h2>
          <p>
            Socialize and meet people you never would have. Oftentimes, those people end up becoming your life-long friend.
          </p>
          <h2>Notable Guests & Speakers</h2>
          <p>
            Our team works relentlessly to get the best, most knowledgable guests and speakers at our events. Instantly view and share any events right on our continuously updated calendar. Invite your friends and roomates too!
          </p>
          <Link href="/events" passHref>
            <a className={styles.link}>
              Explore events<RightArrowIcon />
            </a>
          </Link>
        </div>
        <div className={styles.animationWrapper}>
          <LottieWrapper animationData={partyAnimationData} />
        </div>
      </section>

      <section className={styles.heroreverse}>
        <div className={styles.animationWrapper}>
          <LottieWrapper animationData={teamAnimationData} />
        </div>
        <div className={styles.content}>
          <h3 className={styles.sectiontitle}>Officers</h3>
          <h2>Meet Our Board</h2>
          <p>
            We are proud of our group of diverse and dedicated officers. 
          </p>
          <h2>Interested in a position?</h2>
          <p>
           Feel free to contact an officer or email us for inqueries and additional information.
          </p>
          <Link href="/organizations" passHref>
            <a className={styles.link}>
              View officers <RightArrowIcon />
            </a>
          </Link>
        </div>
      </section>
      
      <section className={styles.heroreverselast}>
        <div className={styles.content}>
          <h3 className={styles.sectiontitle}>Resources</h3>
          <h2>Valuable Experience</h2>
          <p>
            Learn about jobs, internships, and other opportunities on and off campus. There are hundreds of opportunities available to students 
            provided by the campus, professors, and corporations that will 
            get you ready for your career. 
          </p>
          <h2>Network with Professionals</h2>
          <p>
            Discover career paths that you never knew about. Exploring careers now may prepare you for a job once you graduate and help
            you achieve your dream life.
          </p>
          <Link href="/opportunities" passHref>
            <a className={styles.link}>
              Get in touch<RightArrowIcon />
            </a>
          </Link>
        </div>
        <div className={styles.animationWrapper}>
          <LottieWrapper animationData={professorAnimationData} />
        </div>
      </section>
      
      <section className={styles.endheroWrapper}>
        <div className={`${styles.endhero} ${styles.centered}`}>
          <div className={styles.content}>
            <h3 className={styles.sectiontitle}>Join us!</h3>

            {session ? (
              <>
                <h1 className={styles.title}>
                  Meet new friends&#39;share <span>ideas</span>.
                </h1>
                <Link href="profile" passHref>
                  <button className={styles.heroprimary}>
                    My Profile
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </Link>
              </>
            ) : (
              <>
                <h1 className={styles.title}>
                  Interested? <h2>Log in & become a member now.</h2>
                </h1>
                <button
                  className={styles.heroprimary}
                  onClick={() => signIn('google')}
                >
                  Log In
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </>
            )}
          </div>
          <div className={styles.animationWrapper}>
            <LottieWrapper animationData={signAnimationData} />
          </div>
        </div>
      </section>
    </HeroLayout>
  )
}
