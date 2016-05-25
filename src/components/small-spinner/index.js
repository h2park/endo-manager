import React from 'react'
import {Spinner} from 'zooid-ui'
import styles from './index.css'

const propTypes = {
  show: React.PropTypes.bool,
}

const SmallSpinner = ({show}) => {
  if (!show) {
    return <div className={styles.smallSpinner} />
  }

  return (
    <div className={styles.smallSpinner}>
      <Spinner />
    </div>
  )
}

SmallSpinner.propTypes = propTypes;

export default SmallSpinner
