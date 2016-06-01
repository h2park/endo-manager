import _ from 'lodash'
import React, { Component } from 'react'
import superagent from 'superagent'
import url from 'url'
import {Page, ErrorState} from 'zooid-ui'

import HomePage from '../components/home-page'
import LoadingSpinner from '../components/loading-spinner'
import NoAuthInformation from '../components/no-auth-information'

class Home extends Component {
  state = {}
  componentWillMount() {
    const {appOctobluHost, credentialsDeviceUrl, meshbluAuthBearer} = url.parse(location.href, true).query
    this.setState({appOctobluHost, credentialsDeviceUrl, meshbluAuthBearer})
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
    if (!window.confirm(`Are you sure you wish to remove ${uuid}? \n\nThis cannot be undone`)) return

    const {credentialsDeviceUrl,meshbluAuthBearer} = this.state

    this.setState({loadingUserDevices: true})

    superagent
      .delete(`${credentialsDeviceUrl}/user-devices/${uuid}`)
      .set('Authorization', `Bearer ${meshbluAuthBearer}`)
      .end( () => this.getUserDevices() )
  }

  onCancel = (event) => {

  }

  onOk = (event) => {
    const {appOctobluHost, credentialsDeviceUrl, meshbluAuthBearer} = this.state

    this.setState({loadingUserDevices: true})

    superagent
      .post(`${credentialsDeviceUrl}/user-devices`)
      .set('Authorization', `Bearer ${meshbluAuthBearer}`)
      .end((error, device) => {
        if(error) {
          return this.setState({error})
        }
        let {protocol, hostname, port} = url.parse(appOctobluHost)
        window.location = url.format({
          protocol: protocol,
          hostname: hostname,
          port: port,
          pathname: `/device/${device.uuid}`,
        })
      })
  }

  render = () => {
    if (this.state.error) {
      return this.renderError()
    }

    if (!this.state.credentialsDeviceUrl || !this.state.meshbluAuthBearer) {
      return (<NoAuthInformation />)
    }

    if (this.state.loadingCredentialsDevice) {
      return this.renderLoadingSpinner()
    }

    return this.renderHomePage()
  }

  renderError = () => {
    const {error} = this.state

    return (
      <Page>
        <ErrorState description={error.message} />
      </Page>
    )
  }

  renderHomePage = () => {
    const {credentialsDevice, userDevices, loadingUserDevices} = this.state

    return (
      <HomePage
        credentialsDevice={credentialsDevice}
        userDevices={userDevices}
        loadingUserDevices={loadingUserDevices}
        onItemDelete={this.onItemDelete}
        onCancel={this.onCancel}
        onOk={this.onOk}
        />
    )
  }

  renderLoadingSpinner = () => {
    return (
      <Page>
        <LoadingSpinner />
      </Page>
    )
  }

  renderNoAuth = () => {
  }
}

export default Home
