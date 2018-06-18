import 'isomorphic-unfetch'
import React from 'react'
import {connect} from 'react-redux'
import {startClock, serverRenderClock} from '../store'
import Device from '../components/Device'
import Location from '../components/Location'
import Salutation from '../components/Salutation'
import platform from 'platform'
import MobileDetect from 'mobile-detect'
import { DateTime } from 'luxon'

class Index extends React.Component {
  constructor(){
    super()
    this.state = {
      clientTime: null
    }
  }
  static async getInitialProps ({ reduxStore, req }) {
    const userAgent = req.headers['user-agent']
    const parsedPlatform = platform.parse(userAgent)
    const md = new MobileDetect(userAgent)
    let ipAddress = req.headers['x-forwarded-for']
    if (req.url.indexOf('debug') !== -1){
      ipAddress = '167.160.203.69'
    }
    const locationResponse = await fetch(`http://ip-api.com/json/${ ipAddress }`)
    const location = await locationResponse.json()
    const isServer = !!req
    return {
      ipAddress,
      location,
      platform: parsedPlatform,
      mobileDetect: {
        tablet: md.tablet(),
        phone: md.phone(),
      }
    }
  }

  componentDidMount () {
    if (this.state.clientTime === null){
      this.setState({
        clientTime: DateTime.local()
      })
    }
  }

  componentWillUnmount () {
  }

  render () {
    if (this.state.clientTime === null){
      return null
    }
    return (
      <>
        <p>Good <Salutation {...this.props} {...this.state} />, here's what we know:</p>
        <Device {...this.props} {...this.state }/>
        <Location {...this.props} {...this.state }/>
      </>

    )
  }
}

export default connect()(Index)
