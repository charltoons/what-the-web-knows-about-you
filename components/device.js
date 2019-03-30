// import React from 'react'
// import a from 'indefinite'

// export default function Screen(props){
//   if (props.mobileDetect.phone){
//     let phoneName = props.mobileDetect.phone
//     phoneName = a(props.mobileDetect.phone)
//     if (phoneName.toLowerCase().indexOf('phone') === -1){
//       phoneName += ' phone'
//     }
//     return <em>{ phoneName }</em>
//   }
//   else if (props.mobileDetect.tablet){
//     let tabletName = props.mobileDetect.tablet
//     tabletName = tabletName.split('Tablet')[0]
//     tabletName = a(tabletName)
//     return <em>{ tabletName } tablet</em>
//   }
//   else {
//     return <em>desktop</em>
//   }
// }

// import semver from 'semver'

// const getMacVersionName = version => {
//   if (semver.satisfies(version, '10.14.x')) return 'macOS Mojave'
//   if (semver.satisfies(version, '10.13.x')) return 'macOS High Sierra'
//   if (semver.satisfies(version, '10.12.x')) return 'OS X Sierra'
//   if (semver.satisfies(version, '10.11.x')) return 'OS X El Capitan'
//   if (semver.satisfies(version, '10.10.x')) return 'OS X Yosemite'
//   if (semver.satisfies(version, '10.9.x')) return 'OS X Mavericks'
//   if (semver.satisfies(version, '10.8.x')) return 'OS X Mountain Lion'
//   if (semver.satisfies(version, '10.7.x')) return 'OS X Lion'
//   return null
// }
