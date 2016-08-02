import React from 'react'
import ErrorState from 'zooid-error-state'
import {Button, Page} from 'zooid-ui'

import styles from './index.css'

const propTypes = {}

const NoAuthInformation = () => {
  return (
    <Page className={styles.page}>
      <ErrorState
        title="Authentication information could not be verified"
        description="Please initiate Authentication from the Thing details page for Thing you wish to manage."
        href="https://app.octoblu.com/configure"
        buttonText="Go to My Things" />
    </Page>
  )
}

NoAuthInformation.propTypes = propTypes

export default NoAuthInformation
