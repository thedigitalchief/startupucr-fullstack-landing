import React, { useState } from 'react'
import Page from '@/components/Layout/Page'
import { useSession } from 'next-auth/react'
import { LottieWrapper } from '@/components/LottieWrapper'
import CreatorRoleForm from '@/components/Organizations/CreatorRoleForm'
import OrganizationsForm from '@/components/Organizations/OrganizationsForm'
import ListOrganizations from '@/components/Organizations/ListOrganizations'
import { GreenTip } from '@/components/Layout/Tips'
import styles from '@/styles/organizations.module.css'
import formstyles from '@/styles/form.module.css'
import animationData from '@/lotties/group.json'

export default function OrganizationsPage() {
  const { data: session } = useSession()
  const [displayWarning, setDisplayWarning] = useState(false)

  return (
    <Page
      title="Officers"
      tip={
        <GreenTip header="Meet our officers.">
          The friendly and dedicated board members of our club. Do not hesistate to reach out and talk to us!
        </GreenTip>
      }
    >
      <div className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>Officers</h1>
            <p> (Names)
            </p>
          </div>
          <div className={styles.animationWrapper}>
            <LottieWrapper animationData={animationData} />
          </div>
        </div>
      </div>
      {session &&
        session.user.roles &&
        session.user.roles.includes('student' || 'professor') &&
        !session.user.roles.includes('creator') && (
          <>
            <span className={formstyles.actions}>
              <button
                className={formstyles.primary}
                onClick={() => setDisplayWarning(!displayWarning)}
              >
                Apply for a position
              </button>
            </span>
            {displayWarning && (
              <div className={formstyles.warningWrapper}>
                <CreatorRoleForm userId={session.user.id} />
              </div>
            )}
          </>
        )}
      {session && session.user.roles && session.user.roles.includes('precreator') && (
        <>
          <OrganizationsForm />
        </>
      )}
      <ListOrganizations />
    </Page>
  )
}
