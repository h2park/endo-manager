import React, { Component } from 'react'
import superagent from 'superagent'
import url from 'url'

class Home extends Component {
  componentDidMount(){
    const {credentialsDeviceUrl,meshbluBearer} = url.parse(location.href, true).query
    this.setState({credentialsDeviceUrl,meshbluBearer})
  }

  componentWillMount() {
    // superagent
    //   .get(`${credentialsDeviceUrl}/user-devices`)
    //   .set('Authorization', `Bearer ${meshbluBearer}`)
    //   .end()
  }

  doIt(event) {
    event.preventDefault()
    const {credentialsDeviceUrl,meshbluBearer} = this.state

    superagent
      .post(`${credentialsDeviceUrl}/user-devices`)
      .set('Authorization', `Bearer ${meshbluBearer}`)
      .end()
  }

  render() {
    return (
      <div>
        <h2>Home Page</h2>
        <form>
          <button onClick={this.doIt.bind(this)} type="submit">Do it</button>
        </form>
      </div>
    )
  }
}

export default Home
