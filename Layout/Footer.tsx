import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/footer.module.css'
import logo from 'public/logo.svg'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.innerfooter}>
        <div className={styles.linkwrapper}>
          <Link href="/">
            <a className={styles.logo}>
              <Image src={logo} alt="Startup@UCR Logo" width={55} height={55} />
              <span>Startup@UCR</span>
            </a>
          </Link>
          <div className={styles.discover}>
            <div className={styles.links}>
              <h4></h4>
              <Link href="/" passHref>
                <a>Home</a>
              </Link>
           
              <Link href="/events" passHref>
                <a>Events</a>
              </Link>
               <Link href="/organizations" passHref>
                <a>Opportunities</a>
              </Link>
              <Link href="/organizations" passHref>
                <a>Officers</a>
              </Link>
            </div>
            <div className={styles.links}>
              <h4></h4>
              <Link href="/about" passHref>
                <a>About</a>
              </Link>
              <Link href="/" passHref>
                <a>Contact</a>
              </Link>
              <Link href="/" passHref>
                <a>Portfolio</a>
              </Link>
              <Link href="/disclaimers" passHref>
                <a>Terms of Service</a>
              </Link>
            </div>
          </div>
        </div>
        <span className={styles.ending}>Startup@UCR<br />2022 © All rights reserved.</span>
      </div>
    </footer>
  )
}


//   <Link href="/courses" passHref> <a>Courses</a> </Link>