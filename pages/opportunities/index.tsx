import { useSession } from 'next-auth/react'
import Page from '@/components/Layout/Page'
import styles from '@/styles/events.module.css'
import { LottieWrapper } from '@/components/LottieWrapper'
import { GreenTip } from '@/components/Layout/Tips'
import animationData from '@/lotties/professor.json'
import OpportunityForm from '@/components/Opportunities/OpportunityForm'
import Accordion from '@/components/Layout/Accordion'
import ListAllOpportunities from '@/components/Opportunities/ListAllOpportunities'

export default function OpportunitiesPage() {
  const { data: session } = useSession()

  return (
    <Page
      title="Opportunities"
      tip={
        <GreenTip header="Your Resume">
          Find opportunities to build your idea. As a member, you will have access to our speakers, sponsors, professors, and student network. Don&#39;t be afraid to apply, you might surprise
          yourself.
        </GreenTip>
      }
    >
      <div className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>Opportunities</h1>
            <p>
              This is where you&#39;ll be able to see all opportunities posted
              and offered by our network of resources. </p>
          </div>
          <div className={styles.animationWrapper}>
            <LottieWrapper animationData={animationData} />
          </div>
        </div>
      </div>

      {session &&
        session.user.roles &&
        session.user.roles.includes('professor') && (
          <>
            <Accordion heading="Post Opportunity">
              <OpportunityForm
                authorId={session.user.id}
                author={session.user.name}
                email={session.user.email}
              />
            </Accordion>
          </>
        )}
      <ListAllOpportunities />
    </Page>
  )
}
