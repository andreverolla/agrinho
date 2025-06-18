import { Link as ScrollLink } from "react-scroll";

export function ButtonHover ({ to, title, text, onClick }) {
    return (
        <span>
            <ScrollLink 
                to={to} 
                smooth={true}
                duration={300}
                offset={-80}
                title={title} 
                onClick={onClick}
                className="cursor-pointer py-[18px] px-6 rounded-xl bg-olive-600 text-white font-medium hover:bg-olive-700 transition-colors duration-300"
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
                className="cursor-pointer py-3 px-6 rounded-xl bg-transparent text-black border-2 border-olive-600 font-medium hover:bg-olive-600 hover:text-white transition-colors duration-300"
            >
                {text}
            </ScrollLink>
        </span>
    )
}