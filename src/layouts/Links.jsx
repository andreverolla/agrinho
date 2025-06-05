function Link(props) {
  return (
    <li><a href={props.href} title={props.title} className="text-xl">{props.text}</a></li>
  )
}

export default Link