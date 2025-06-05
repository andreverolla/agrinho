export function LinkButtonHover (props) {
    return (
        <span><a href={props.href} title={props.title} className="hover:bg-hover-black font-medium border-2 border-solid rounded-full py-3 px-5 text-button-p bg-button hover:text-pattern border-stoke">{props.text}</a></span>
    )
}

export function LinkButtonSimple (props) {
    return (
        <span><a href={props.href} title={props.title} className="bg-black text-pattern font-semibold py-4 px-6 rounded-full transition-colors hover:text-black hover:bg-pattern">{props.text}</a></span>
    )
}