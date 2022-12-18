import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'
import { LottieWrapper } from '@/components/LottieWrapper'
import styles from '@/styles/404.module.css'
import emptyAnimationData from '@/lotties/404-1.json'

export default function Custom500() {
  return (
    <Layout>
      <Head>
        <title>Startup@UCR | 500</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <h1>Hmm... how did you get here?</h1>
      <p>
        This page is not yet developmented. You will have to stay on the front-end side for now.
      </p>
      <Link href={'/'} passHref>
        <a>Go home</a>
      </Link>
      <div className={styles.animationWrapper}>
        <LottieWrapper animationData={emptyAnimationData} />
      </div>
    </Layout>
  )
}
