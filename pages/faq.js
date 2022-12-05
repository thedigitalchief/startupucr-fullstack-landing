import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import slice from '../public/assets/slice.png'

import styles from '../styles/Faq.module.css'

export default function Faq() {
  const faq = [
    {
      question: 'What is Startup@UCR?',
      answer: '',
    },
    {
      question: 'How do I join?',
      answer: (
        <>
          You can apply by{' '}
          <Link passHref href="/signin">
            <span className={styles.link}>signing in first</span>
          </Link>{' '}
          with your Github, Google, or LinkedIn account and filling out the
          check-in form. The check-in form is accessible on the website after
          signing in.
        </>
      ),
    },
    {
      question: 'When?',
      answer: '.',
    },
    {
      question: 'How much does it cost?',
      answer: '',
    },
    {
      question: 'Where is the event?',
      answer: <></>,
    },
    {
      question: 'Where will we submit?',
      answer: 'Y',
    },
    {
      question: "Can I use a project I've already worked on?",
      answer: '',
    },
    {
      question: "I've never started a business beofre!",
      answer: "That's the best reason to come out! ",
    },
    {
      question: 'What will I need to participate?',
      answer:
        'A working device (i.e your laptop or PC) and a stable internet connection. And, of course, you.',
    },
    {
      question: 'I’m in high school, am I still eligible to apply?',
      answer:
        'Yes, we welcome anyone from any high school or college to come out and hack with us.',
    },
    {
      question: '',
      answer: '',
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
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className={styles.shapefill}
          ></path>
        </svg>
      </div>
      <div className={styles.mainContent}>
        <h1>Questions?</h1>
        <h3 className={styles.content}></h3>
        <div className={styles.faq}>
          {faq.map(({ question, answer }, idx) => (
            <div key={idx} className={styles.questionAnswer}>
              <div className={styles.question}>
                <div className={styles.slice}>
                  <Image
                    alt="Startup Slice"
                    src={slice}
                    width={201}
                    height={135}
                    quality={80}
                    layout="responsive"
                    objectFit="contain"
                  />
                </div>
                <h3>{question}</h3>
              </div>
              <div>
                <p>{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
