function Link(props) {
  return (
    <li><a href={props.href} title={props.title} className="">{props.text}</a></li>
  )
}

export default Link