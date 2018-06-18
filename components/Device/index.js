import React from 'react'
import OSDescription from './components/os-description'
import DeviceType from './components/device-type'
import Browser from './components/browser'

export default function Device(props){

  return (
    <>
      <p>You're reading this in <Browser {...props} /> on <DeviceType {...props} />.</p>
    </>
  )
}