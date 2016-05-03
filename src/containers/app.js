import React, { Component } from 'react'
import 'zooid-ui/dist/style.css'
import {AppBar} from 'zooid-ui'

class App extends Component {
  render() {
    return (
      <div>
        <AppBar title="Credentials Manager" />
        {this.props.children}
      </div>
    )
  }
}

export default App;
