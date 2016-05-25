import React from 'react'
import _ from 'lodash'
import {EmptyState} from 'zooid-ui'
import UserDevice from '../user-device'
import styles from './index.css'

const UserDevices = ({userDevices, onItemDelete}) => {
  if (_.isEmpty(userDevices)) {
    return <EmptyState
      title="No other users"
      description="This is were you would see a list of other authenticated devices on this API account, if there were any, which there aren't. We promise."
      className={styles.empty}
    />
  }

  const userDevicesList = _.map(userDevices, (userDevice) => {
    return <UserDevice key={userDevice.uuid} device={userDevice} onDelete={onItemDelete} />
  })

  return (
    <ul className={styles.userDevices}>{userDevicesList}</ul>
  )
}


export default UserDevices
