import React from 'react'
import {Button} from 'zooid-ui'

import styles from './index.css'

const UserDevice = ({device, onDelete}) => {
  const onClickDelete = () => onDelete(device)

  return (
    <li className={styles.userDevice}>
      <Button size="small" kind="danger" onClick={onClickDelete} className={styles.deleteButton}>&times;</Button>
      <pre className={styles.uuid}>{device.uuid}</pre>
    </li>
  )
}

export default UserDevice;
