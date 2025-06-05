function Link(props) {
  return (
    <li><a href={props.href} title={props.title} className="text-xl max-lg:text-base max-md:text-xl text-secondary-black transition-colors hover:text-pattern">{props.text}</a></li>
  )
}

export default Link