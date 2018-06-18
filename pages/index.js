import 'isomorphic-unfetch'
import React from 'react'
import {connect} from 'react-redux'
import {startClock, serverRenderClock} from '../store'
import Device from '../components/Device'
import Location from '../components/Location'
import platform from 'platform'
import MobileDetect from 'mobile-detect'


class Index extends React.Component {
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
    const {dispatch} = this.props
  }

  componentWillUnmount () {
  }

  render () {
    return (
      <>
        <h1>Hello, here's what we know:</h1>
        <Device {...this.props} />
        <Location {...this.props} />
      </>

    )
  }
}

export default connect()(Index)
