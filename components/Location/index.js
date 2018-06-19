import IPAddress from "./components/IPAddress";
import {
  City,
  Country,
  Region,
  ISP
} from './components/LocationParts'

export default function Location(props){

  if (props.location.status === 'fail') {
    console.warn(props.location)
    return null
  }

  return (
    <p>We know your <em>IP address</em>. Which probably doesn't mean a whole lot to you. But it tells us that right now you're in <Country {...props}/> — <City {...props}/>, <Region {...props}/> to be specific. Your internet comes from <ISP {...props } />.</p>
  )
}