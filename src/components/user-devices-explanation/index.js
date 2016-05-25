import React from 'react'
import styles from './index.css'

const propTypes = {
  credentialsDevice: React.PropTypes.object,
}

const explanation = ({credentialsDevice}) => {
}

const UserDevicesExplanation = ({credentialsDevice}) => {
  if (!credentialsDevice) return (<div></div>)

  const explanation = `
      ${credentialsDevice.name} can be used by multiple devices. Below is a list of all device UUIDs that have been
      authenticated with ${credentialsDevice.name} so far. Before we add you to the list of Authorized Devices, take a
      moment and make sure there are no unexpected devices that have access to this ${credentialsDevice.name} account.
      Any user that can authenticate as this ${credentialsDevice.name} account may remove members from this list.
  `

  return (
    <div className={styles.explanation}>
      <p>{explanation}</p>
    </div>
  )
}
UserDevicesExplanation.propTypes = propTypes;

export default UserDevicesExplanation;
