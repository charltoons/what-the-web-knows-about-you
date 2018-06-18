import IPAddress from "./components/IPAddress";
import {
  City,
  Country,
  Region
} from './components/LocationParts'

export default function Location(props){

  if (props.location.status === 'fail') return null

  return (
    <p>Your IP address is <IPAddress {...props} />. Which probably doesn't mean a whole lot to <em>you</em>. But it tells <em>us</em> that right now you're in <Country {...props}/> — <City {...props}/>, <Region {...props}/> to be specific.</p>
  )
}