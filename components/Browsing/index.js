
const Referrer = props => {
  console.log(props)
  return <em>{props.referrer.hostname}</em>
}

export default function Browsing(props){

  return (
    <p>The site you last visited was <Referrer {...props }/>.</p>
  )
}