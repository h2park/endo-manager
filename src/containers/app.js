import React, { Component } from 'react'
import 'zooid-ui/dist/style.css'
import './styles.css'
import {AppBar} from 'zooid-ui'

class App extends Component {
  render() {
    return (
      <div id="main-container">
        <AppBar title="Credentials Manager" />
        {this.props.children}
      </div>
    )
  }
}

export default App
