import React from 'react'
import a from 'indefinite'

export default function Screen(props){
  if (props.mobileDetect.phone){
    let phoneName = props.mobileDetect.phone
    phoneName = a(props.mobileDetect.phone)
    if (phoneName.toLowerCase().indexOf('phone') === -1){
      phoneName += ' phone'
    }
    return <em>{ phoneName }</em>
  }
  else if (props.mobileDetect.tablet){
    let tabletName = props.mobileDetect.tablet
    tabletName = tabletName.split('Tablet')[0]
    tabletName = a(tabletName)
    return <em>{ tabletName } tablet</em>
  }
  else {
    return <em>desktop</em>
  }
}