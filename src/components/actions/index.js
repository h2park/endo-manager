import React from 'react'
import styles from './index.css'
import {Button} from 'zooid-ui'

const Actions = ({}) => {
  return (
    <div className={styles.actions}>
      <Button kind="no-style" size="large">Cancel</Button>
      <Button kind="primary"  size="large">Do it</Button>
    </div>
  )
}

export default Actions;
