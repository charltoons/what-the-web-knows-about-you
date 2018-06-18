import React from 'react'
import semver from 'semver'

const getMacVersionName = version => {
  if (semver.satisfies(version, '10.14.x')) return 'macOS Mojave'
  if (semver.satisfies(version, '10.13.x')) return 'macOS High Sierra'
  if (semver.satisfies(version, '10.12.x')) return 'OS X Sierra'
  if (semver.satisfies(version, '10.11.x')) return 'OS X El Capitan'
  if (semver.satisfies(version, '10.10.x')) return 'OS X Yosemite'
  if (semver.satisfies(version, '10.9.x')) return 'OS X Mavericks'
  if (semver.satisfies(version, '10.8.x')) return 'OS X Mountain Lion'
  if (semver.satisfies(version, '10.7.x')) return 'OS X Lion'
  return null
}

export default props => {

  try {

    const {
      clientPlatform: {
        os
      }
    } = props
  
    let canonicalPlatform = null
    let osDescription = null

    if (os.family === 'OS X') osDescription = getMacVersionName(os.version)
    else {
      console.warn('TODO: support', os)
      throw new Error('Unsupported OS')
    }

    return (
      <><em>{ osDescription }</em> on a </>
    )
  }
  catch(e){
    console.warn(e.message)
    return null
  }
}