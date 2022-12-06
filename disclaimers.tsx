import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import styles from '@/styles/about.module.css'

export default function Disclaimers() {
  return (
    <Layout>
      <Head>
        <title>Startup@UCR | Disclaimers</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <section className={styles.content}>
        <h1>DISCLAIMERS</h1>
        <h3>Last updated November 19, 2022</h3>
        <h2>WEBSITE DISCLAIMER</h2>
        <p>
          The information provided by Startup@UCR (&#34;we,&#34; &#34;us&#34;, or
          &#34;our&#34;) on startupucr.com (the &#34;Site &#34;) is for
          general informational purposes only. All information on the Site is
          provided in good faith; however, we make no representation or warranty
          of any kind, express or implied, regarding the accuracy, adequacy,
          validity, reliability, availability or completeness of any information
          on the Site. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU
          FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF
          THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE
          OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY
          AT YOUR OWN RISK.
        </p>
        
        <h2>A Word from the Team</h2>
        <p>Hello! We&#39;re really glad you&#39;re here.</p>
  
        <p>
          We just hope that you have been inspired to dream bigger and not be afraid of pursuing your product idea or build your own business. Our friendly community of diverse and motivate students is the ideal place to bounce those ideas off in a completely judgement-free, safe environment. </p>
          
          <p>
          Also please enjoy our fully reponsive and fluid UI/UX. Our web-app is specifically adapted to mobile environments and equipped with powerful functions, while remaining lightweight and serverless.
        </p>

      </section>
    </Layout>
  )
}
