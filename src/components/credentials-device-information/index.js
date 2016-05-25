import React from 'react'
import {PageHeader} from 'zooid-ui'
import styles from './index.css'
import SmallSpinner from '../small-spinner'

const propTypes = {
  credentialsDevice: React.PropTypes.object,
  loadingUserDevices: React.PropTypes.bool,
}

const CredentialsDeviceInformation = ({credentialsDevice, loadingUserDevices}) => {
  if (!credentialsDevice) {
    return <hr />
  }

  return (
    <section className={styles.container}>
      <img src={credentialsDevice.imageUrl} className={styles.logo} />
      <PageHeader title={credentialsDevice.name} className={styles.header} />
      <SmallSpinner show={loadingUserDevices} />
    </section>
  )
}

CredentialsDeviceInformation.propTypes = propTypes;

export default CredentialsDeviceInformation
