import React from 'react'
import {Page} from 'zooid-ui'

import styles from './index.css'

import Actions from '../actions'
import CredentialsDeviceInformation from '../credentials-device-information'
import UserDevices from '../user-devices'

const HomePage = ({credentialsDevice, userDevices, onItemDelete, onCancel, onOk}) => {
  return (
    <Page className={styles.page}>
      <CredentialsDeviceInformation credentialsDevice={credentialsDevice} />
      <UserDevices userDevices={userDevices} onItemDelete={onItemDelete} />
      <Actions onCancel={onCancel} onOk={onOk} />
    </Page>
  )
}

export default HomePage;
