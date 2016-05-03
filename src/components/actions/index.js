import React from 'react'
import styles from './index.css'
import {Button} from 'zooid-ui'

const Actions = ({}) => {
  return (
    <div className={styles.actions}>
      <Button kind="no-style">Cancel</Button>
      <Button kind="primary">Do it</Button>
    </div>
  )
}

export default Actions;
