import React, { PropTypes } from 'react'
import Main from '../components/main'

const propTypes = {
  children: PropTypes.node,
}

export default class App extends React.Component {
  render() {
    return (
      <Main>
        {this.props.children}
      </Main>
    )
  }
}

App.propTypes = propTypes
