import _ from 'lodash'
import React, { Component } from 'react'
import superagent from 'superagent'
import url from 'url'
import {Page} from 'zooid-ui'

import HomePage from '../components/home-page'
import LoadingSpinner from '../components/loading-spinner'

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

    this.setState({loadingCredentialsDevice: true})

    superagent
      .get(credentialsDeviceUrl)
      .set('Authorization', `Bearer ${meshbluAuthBearer}`)
      .end((error, res) => {
        if (error) {
          return this.setState({error, credentialsDevice: null, loadingCredentialsDevice: false})
        }
        this.setState({credentialsDevice: res.body, loadingCredentialsDevice: false})
      })
  }

  getUserDevices = () => {
    const {credentialsDeviceUrl,meshbluAuthBearer} = this.state
    if (!credentialsDeviceUrl || !meshbluAuthBearer) return

    this.setState({loadingUserDevices: true})

    superagent
      .get(`${credentialsDeviceUrl}/user-devices`)
      .set('Authorization', `Bearer ${meshbluAuthBearer}`)
      .end((error, res) => {
        if (error) {
          return this.setState({error, userDevices: null, loadingUserDevices: false})
        }
        this.setState({userDevices: res.body, loadingUserDevices: false})
      })
  }

  onItemDelete = ({uuid}) => {
    const {credentialsDeviceUrl,meshbluAuthBearer} = this.state
    superagent
      .delete(`${credentialsDeviceUrl}/user-devices/${uuid}`)
      .set('Authorization', `Bearer ${meshbluAuthBearer}`)
      .end( () => this.getUserDevices() )
  }

  onCancel = (event) => {

  }

  onOk = (event) => {
    console.log('onOk');
    const {credentialsDeviceUrl, meshbluAuthBearer} = this.state

    superagent
      .post(`${credentialsDeviceUrl}/user-devices`)
      .set('Authorization', `Bearer ${meshbluAuthBearer}`)
      .end( () => this.getUserDevices() )
  }

  render() {
    const {credentialsDevice, error, loadingCredentialsDevice, loadingUserDevices, userDevices} = this.state

    if (error) {
      return (
        <Page>
          <ErrorState description={error.message} />
        </Page>
      )
    }

    if (loadingCredentialsDevice || loadingUserDevices;) {
      return (
        <Page>
          <LoadingSpinner />
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
