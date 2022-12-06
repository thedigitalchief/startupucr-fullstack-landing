import Head from 'next/head'
import Layout from '@/components/Layout/Layout'
import styles from '@/styles/about.module.css'

export default function aboutPage() {
  return (
    <Layout>
      <Head>
        <title>Startup@UCR | About Us</title>
        {/* Change this icon when we have a logo */}
        <link rel="icon" href="/logo.svg" />
      </Head>
      <section className={styles.content}>
        <h1>About Us</h1>
         <h3>Work hard to build your dreams today,
          <br></br>or you will be working hard building someone elses...</h3>
        <p>
          Startup@UCR was founded October 1, 2022 with the humble intentions of creating a<br></br>{' '}
          <strong>welcoming community to share and foster business/startup ideas.</strong> Futhermore, we focus on actually executing these ideas and work together to turn concepts into disruptors of industries. 
        </p>
        <p>
         Our mission is to inspire and provide our fellow peers with not only the resources but also simply a safe atmosphere to bounce ideas off each other. We want to connect peers from different areas of expertise, studies and academic backgrounds to <strong>achieve the American Dream</strong>.
        </p><br></br>
        <p>
          Best regards,
          <br /><strong>
          <span><a href="https://dylanhnguyen.com"> Sam</a></span> and<span><a href="https://dylanhnguyen.com">Dylan</a> </span><br></br>
          Founders
          </strong>
          </p>
<br></br>
      
       
        </p>

      </section>
    </Layout>
  )
}
