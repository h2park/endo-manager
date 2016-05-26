import React from 'react'
import styles from './index.css'

const propTypes = {
  credentialsDevice: React.PropTypes.object,
}

const explanation = ({credentialsDevice}) => {
}

const UserDevicesExplanation = ({credentialsDevice}) => {
  if (!credentialsDevice) return (<div></div>)
  
  return (
    <div className={styles.explanation}>
      <p>
        The <strong>{credentialsDevice.name}</strong> user account <strong>{credentialsDevice.username}</strong> can
        be used by multiple devices. Below is a list of all device UUIDs that have been authenticated
        with {credentialsDevice.name} so far. Any user that can authenticate as
        the <strong>{credentialsDevice.username}</strong> <strong>{credentialsDevice.name}</strong> account may remove
        members from this list.
      </p>
    </div>
  )
}
UserDevicesExplanation.propTypes = propTypes;

export default UserDevicesExplanation;
