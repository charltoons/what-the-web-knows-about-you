import React from 'react'

export default function Platform(props){

  const os = props.platform.os
  if (os.family === 'OS X') {
    return <>a <em>Mac</em></>
  }
   return <em>{ os.family }</em> 
}