import React from 'react'
import styles from './index.css'
import {Button} from 'zooid-ui'

const propTypes = {
  onCancel: React.PropTypes.func.isRequired,
  onOk: React.PropTypes.func.isRequired,
}

const Actions = ({onCancel, onOk}) => {
  return (
    <div className={styles.actions}>
      <Button kind="no-style" size="large" onClick={onCancel}>Cancel</Button>
      <Button kind="primary"  size="large" onClick={onOk}>Do it</Button>
    </div>
  )
}
Actions.propTypes = propTypes;

export default Actions;
