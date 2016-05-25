import React from 'react'
import {Page} from 'zooid-ui'

import styles from './index.css'

import Actions from '../actions'
import CredentialsDeviceInformation from '../credentials-device-information'
import UserDevices from '../user-devices'
import UserDevicesExplanation from '../user-devices-explanation'

const propTypes = {
  credentialsDevice: React.PropTypes.object,
  userDevices: React.PropTypes.array,
  onItemDelete: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  onOk: React.PropTypes.func.isRequired,
}

const HomePage = ({credentialsDevice, userDevices, onItemDelete, onCancel, onOk}) => {
  return (
    <Page className={styles.page}>
      <CredentialsDeviceInformation credentialsDevice={credentialsDevice} />
      <UserDevicesExplanation credentialsDevice={credentialsDevice} />
      <UserDevices userDevices={userDevices} onItemDelete={onItemDelete} />
      <Actions onCancel={onCancel} onOk={onOk} />
    </Page>
  )
}
HomePage.propTypes = propTypes;

export default HomePage;
