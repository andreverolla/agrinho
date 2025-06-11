import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

export function LinkButtonHover ({ to, title, text }) {
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
                className="cursor-pointer py-3 px-5 rounded-xl bg-primary-500 text-white-500 font-semibold hover:bg-primary-800 transition-colors duration-300"
            >
                {text}
            </ScrollLink>
        </motion.button>
    )
}