import React, { useState } from 'react'
import { useSession } from 'next-auth/react'
import ListAllEvents from '@/components/Events/ListAllEvents'
import Page from '@/components/Layout/Page'
import styles from '@/styles/events.module.css'
import ListUserEvents from '@/components/Events/ListUserEvents'
import { LottieWrapper } from '@/components/LottieWrapper'
import { GreenTip } from '@/components/Layout/Tips'
import animationData from '@/lotties/teamblue.json'
import Tabs from '@/components/Layout/Tabs'

export default function EventsPage() {
  const { data: session } = useSession()

  return (
    <Page
      title="Events"
      tip={
        <GreenTip header="Join our club">
          Events from Startup@UCR you RSVP to will be automatically curated for you all in one
          place.
        </GreenTip>
      }
    >
      <div className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>Events</h1>
            <p>
              This is where you&#39;ll be able to see all of the ongoing and future events of our club. Calendar coming soon...
            </p>
          </div>
          <div className={styles.animationWrapper}>
            <LottieWrapper animationData={animationData} />
          </div>
        </div>
      </div>

      {session ? (
        <Tabs
          tabs={[
            {
              label: 'All Events',
              id: 'allevents',
              component: <ListAllEvents />,
            },
            {
              label: 'Member Events',
              id: 'memberevents',
              component: <ListUserEvents />,
            },
          ]}
          layoutId="events"
        />
      ) : (
        <>
          <ListAllEvents />
        </>
      )}
    </Page>
  )
}
