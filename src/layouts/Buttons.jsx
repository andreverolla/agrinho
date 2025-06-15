import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

export function ButtonHover ({ to, title, text, onClick }) {
    return (
        <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="list-none"
        >
            <ScrollLink 
                to={to} 
                smooth={true}
                duration={300}
                offset={-80}
                title={title} 
                onClick={onClick}
                className="cursor-pointer py-3 px-5 rounded-xl bg-primary-500 text-white-500 font-semibold hover:bg-primary-800 transition-colors duration-300"
            >
                {text}
            </ScrollLink>
        </motion.button>
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
                className="cursor-pointer py-3 px-5 rounded-xl bg-transparent text-black-800 border-2 border-primary-500 hover:text-white-500 font-semibold hover:bg-primary-500 transition-colors duration-300"
            >
                {text}
            </ScrollLink>
        </span>
    )
}