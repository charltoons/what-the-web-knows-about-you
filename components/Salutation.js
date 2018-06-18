export default function Salutation(props){
  if (props.clientTime){
    const hour = props.clientTime.hour
    if (hour < 12){
      return <em>morning</em>
    }
    else if (hour < 18){
      return <em>afternoon</em>
    }
    else {
      return <em>evening</em>
    }
  }
  return null
}