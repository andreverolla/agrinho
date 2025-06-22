import { Link as ScrollLink } from "react-scroll";

export function ButtonHover ({ to, title, text }) {
    return (
        <span>
            <ScrollLink 
                to={to} 
                smooth={true}
                duration={300}
                offset={-80}
                title={title} 
                className="font-titles cursor-pointer text-lg py-4 px-6 rounded-xl border-2 border-olive-600 hover:border-olive-700 bg-olive-600 text-white font-medium hover:bg-olive-700 transition-colors duration-300"
            >
                {text}
            </ScrollLink>
        </span>
    )
}

export function BorderButton ({ to, title, text }) {
    return (
        <span>
            <ScrollLink 
                to={to} 
                smooth={true}
                duration={300}
                offset={-80}
                title={title} 
                className="font-titles text-lg cursor-pointer py-4 px-6 rounded-xl bg-transparent text-olive-700 border-2 border-olive-700 font-medium hover:bg-olive-700 hover:text-white transition-colors duration-300"
            >
                {text}
            </ScrollLink>
        </span>
    )
}