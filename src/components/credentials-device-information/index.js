import React from 'react'
import {PageHeader} from 'zooid-ui'
import styles from './index.css'

const CredentialsDeviceInformation = ({credentialsDevice}) => {
  if (!credentialsDevice) {
    return <hr />
  }

  return (
    <section className={styles.container}>
      <img src={credentialsDevice.imageUrl} className={styles.logo} />
      <PageHeader title={credentialsDevice.name} className={styles.header} />
    </section>
  )
}

export default CredentialsDeviceInformation
