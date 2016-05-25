import React from 'react'
import {Spinner} from 'zooid-ui'

import styles from './index.css'

const propTypes = {}

const LoadingSpinner = () => {
  return (
    <div className={styles.spinner}>
      <Spinner size="large" />
    </div>
  )
}

LoadingSpinner.propTypes = propTypes

export default LoadingSpinner
