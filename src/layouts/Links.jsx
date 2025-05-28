function Link(props) {
  return (
    <li><a href={props.href} title={props.title} className="text-zinc-400 hover:text-zinc-300 text-lg">{props.text}</a></li>
  )
}

export default Link