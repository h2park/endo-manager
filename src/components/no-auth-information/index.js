import React from 'react'
import {Button, Page} from 'zooid-ui'

import styles from './index.css'

const propTypes = {}

const NoAuthInformation = () => {
  return (
    <div className={styles.page}>
      <Page>
        <h1>Authentication information could not be verified</h1>
        <p className={styles.content}>
          Please initiate Authentication from the Thing details page
          for Thing you wish to manage.
        </p>
        <div className={styles.actions}>
          <Button kind="primary"  size="large" href="https://app.octoblu.com/configure">Go to My Things</Button>
        </div>
      </Page>
    </div>
  )
}

NoAuthInformation.propTypes = propTypes

export default NoAuthInformation
