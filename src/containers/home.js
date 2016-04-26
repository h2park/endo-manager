import React, { Component } from 'react'
import superagent from 'superagent'
import url from 'url'
import _ from 'lodash'
import UserDevice from '../components/user-device'

class Home extends Component {
  state = {}

  componentDidMount(){
    const {credentialsDeviceUrl,meshbluAuthBearer} = url.parse(location.href, true).query
    this.setState({credentialsDeviceUrl,meshbluAuthBearer})

    superagent
      .get(`${credentialsDeviceUrl}/user-devices`)
      .set('Authorization', `Bearer ${meshbluAuthBearer}`)
      .end((error, res) =>
        this.setState({error, userDevices: res.body})
      )
  }

  doIt = (event) => {
    event.preventDefault()
    const {credentialsDeviceUrl,meshbluAuthBearer} = this.state

    superagent
      .post(`${credentialsDeviceUrl}/user-devices`)
      .set('Authorization', `Bearer ${meshbluAuthBearer}`)
      .end()
  }

  renderUserDevices =  (userDevices) => {
    return _.map(userDevices, (userDevice) => { 
      return <UserDevice device={userDevice} />
    })
  }

  render() {
    const {userDevices} = this.state
    return (
      <div>
        <h2>Home Page</h2>
        <ul>
          {this.renderUserDevices(userDevices)}
        </ul>
        <form>
          <button onClick={this.doIt} type="submit">Do it</button>
        </form>
      </div>
    )
  }
}

export default Home
