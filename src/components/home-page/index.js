import React from 'react'
import {Page} from 'zooid-ui'

import styles from './index.css'

import Actions from '../actions'
import CredentialsDeviceInformation from '../credentials-device-information'
import ManageUserDevices from '../manage-user-devices'

const propTypes = {
  credentialsDevice: React.PropTypes.object,
  loadingUserDevices: React.PropTypes.bool,
  userDevices: React.PropTypes.array,
  onItemDelete: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  onOk: React.PropTypes.func.isRequired,
}

const HomePage = ({credentialsDevice, loadingUserDevices, userDevices, onItemDelete, onCancel, onOk}) => {
  return (
    <Page className={styles.page}>
      <CredentialsDeviceInformation credentialsDevice={credentialsDevice} loadingUserDevices={loadingUserDevices} />
      <ManageUserDevices credentialsDevice={credentialsDevice} userDevices={userDevices} onItemDelete={onItemDelete} />
      <Actions onCancel={onCancel} onOk={onOk} />
    </Page>
  )
}
HomePage.propTypes = propTypes;

export default HomePage;
