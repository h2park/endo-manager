import React from 'react'
import {Button} from 'zooid-ui'

import styles from './index.css'

import UserDevices from '../user-devices'
import UserDevicesExplanation from '../user-devices-explanation'

class ManageUserDevices extends React.Component {
  static propTypes = {
    credentialsDevice: React.PropTypes.object,
    userDevices: React.PropTypes.array,
    onItemDelete: React.PropTypes.func.isRequired,
  }

  state = {showUserDevices: false}

  onClickShowUserDevices = (event) => {
    event.preventDefault()
    this.setState({showUserDevices: true})
  }

  render = () => {
    if (!this.state.showUserDevices) return this.renderShowAuthorizedDevicesButton()

    const {credentialsDevice, userDevices, onItemDelete} = this.props

    return (
      <div>
        <UserDevicesExplanation credentialsDevice={credentialsDevice} />
        <UserDevices userDevices={userDevices} onItemDelete={onItemDelete} />
      </div>
    )
  }

  renderShowAuthorizedDevicesButton = () => {
    return (
      <Button kind="hollow-neutral" onClick={this.onClickShowUserDevices} className={styles.showUserDevices}>Show Other Authorized Devices</Button>
    )
  }
}

export default ManageUserDevices
