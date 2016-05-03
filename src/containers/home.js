import _ from 'lodash'
import React, { Component } from 'react'
import superagent from 'superagent'
import url from 'url'
import {Page} from 'zooid-ui'

import HomePage from '../components/home-page'

class Home extends Component {
  state = {}
  componentWillMount() {
    const {credentialsDeviceUrl,meshbluAuthBearer} = url.parse(location.href, true).query
    this.setState({credentialsDeviceUrl,meshbluAuthBearer})
  }

  componentDidMount(){
    this.getCredentialsDevice()
    this.getUserDevices()
  }

  getCredentialsDevice(){
    const {credentialsDeviceUrl, meshbluAuthBearer} = this.state
    if (!credentialsDeviceUrl || !meshbluAuthBearer) return
    superagent
      .get(credentialsDeviceUrl)
      .set('Authorization', `Bearer ${meshbluAuthBearer}`)
      .end((error, res) => {
        if (error) {
          return this.setState({error, credentialsDevice: null})
        }
        this.setState({credentialsDevice: res.body})
      })
  }

  getUserDevices = () => {
    const {credentialsDeviceUrl,meshbluAuthBearer} = this.state
    if (!credentialsDeviceUrl || !meshbluAuthBearer) return
    superagent
      .get(`${credentialsDeviceUrl}/user-devices`)
      .set('Authorization', `Bearer ${meshbluAuthBearer}`)
      .end((error, res) => {
        if (error) {
          return this.setState({error, userDevices: null})
        }
        this.setState({userDevices: res.body})
      })
  }

  onOk = (event) => {
    const {credentialsDeviceUrl,meshbluAuthBearer} = this.state

    superagent
      .post(`${credentialsDeviceUrl}/user-devices`)
      .set('Authorization', `Bearer ${meshbluAuthBearer}`)
      .end( () => this.getUserDevices() )
  }

  onItemDelete = ({uuid}) => {
    const {credentialsDeviceUrl,meshbluAuthBearer} = this.state
    superagent
      .delete(`${credentialsDeviceUrl}/user-devices/${uuid}`)
      .set('Authorization', `Bearer ${meshbluAuthBearer}`)
      .end( () => this.getUserDevices() )
  }

  render() {
    const {credentialsDevice, error, userDevices} = this.state

    if (error) {
      return (
        <Page>
          <ErrorState description={error.message} />
        </Page>
      )
    }

    return (
      <HomePage
        credentialsDevice={credentialsDevice}
        userDevices={userDevices}
        onItemDelete={this.onItemDelete}
        onCancel={this.onCancel}
        onOk={this.onOk}
        />
    )
  }
}

export default Home
