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
                className="cursor-pointer py-[18px] px-6 rounded-xl bg-primary-500 text-white-500 font-semibold hover:bg-primary-800 transition-colors duration-300"
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
                className="cursor-pointer py-3 px-6 rounded-xl bg-transparent text-white border-[1px] border-primary-500 font-semibold hover:bg-primary-500 transition-colors duration-300"
            >
                {text}
            </ScrollLink>
        </span>
    )
}