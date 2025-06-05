function Link(props) {
  return (
    <li><a href={props.href} title={props.title} className="text-xl text-secondary-black transition-colors hover:text-pattern">{props.text}</a></li>
  )
}

export default Link