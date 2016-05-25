import React from 'react'
import {Button} from 'zooid-ui'
import DeleteIcon from 'react-icons/lib/md/delete'

import styles from './index.css'

const UserDevice = ({device, onDelete}) => {
  const onClickDelete = (event) => {
    event.preventDefault()
    onDelete(device)
  }


  return (
    <li className={styles.userDevice}>
      <Button kind="no-style" onClick={onClickDelete} >
        <i className={styles.deleteIcon}><DeleteIcon /></i>
        <pre className={styles.uuid}>{device.uuid}</pre>
      </Button>
    </li>
  )
}

export default UserDevice;
