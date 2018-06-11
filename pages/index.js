import React from 'react'
import {connect} from 'react-redux'
import {startClock, serverRenderClock} from '../store'
import Device from '../components/device'
import platform from 'platform'

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {
    const clientPlatform = platform.parse((req.headers['user-agent']))
    console.log(clientPlatform.os)
    const isServer = !!req
    return {}
  }

  componentDidMount () {
    const {dispatch} = this.props
  }

  componentWillUnmount () {
  }

  render () {
    return (
      <>
        <h1>Hello</h1>
        <p>Here's what we know.</p>
        <Device />
      </>

    )
  }
}

export default connect()(Index)
