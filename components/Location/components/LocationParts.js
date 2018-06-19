export function City(props){
  return (
    <em>{props.location.city}</em>
  )
}

export function Region(props){
  return (
    <em>{props.location.regionName}</em>
  )
}

export function Country(props){
  const country = props.location.country
  let article = ''
  if (country === 'United States') article = 'the '
  return (
    <>{ article }<em>{ country }</em></>
  )
}

export function ISP(props){
  return (
    <em>{ props.location.isp }</em>
  )
}