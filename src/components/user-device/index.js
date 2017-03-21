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
      <a className={styles.userDeviceButton} href onClick={onClickDelete} >
        <i className={styles.deleteIcon}><DeleteIcon /></i>
        <span className={styles.uuid}>{device.uuid}</span>
      </a>
    </li>
  )
}

export default UserDevice
