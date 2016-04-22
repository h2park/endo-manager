import React, { Component } from 'react'
import superagent from 'superagent'
import url from 'url'

class Home extends Component {
  componentWillMount() {
    const {credentialsDeviceUrl,meshbluBearer} = url.parse(location.href, true).query

    superagent
      .get(`${credentialsDeviceUrl}/user-devices`)
      .set('Authorization', `Bearer ${meshbluBearer}`)
      .end()
  }
  render() {
    return <h2>Home Page</h2>
  }
}

export default Home
