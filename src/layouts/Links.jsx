import PropTypes from "prop-types";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const Link = forwardRef(
  ({ to, title, text, onClick, onSetActive, className }, ref) => (
    <motion.li
      ref={ref}
      className="list-none"
    >
      <ScrollLink
        to={to}
        smooth={true}
        duration={300}
        offset={-80}
        spy={true}
        onSetActive={onSetActive}
        onClick={onClick}
        title={title}
        role="link"
        tabIndex={0}
        className={`text-base max-md:text-xl cursor-pointer hover:bg-simple-stroke rounded-xl p-3 max-lg:p-2 max-md:px-5 max-md:py-3 transition-colors ${className}`}
      >
        {text}
      </ScrollLink>
    </motion.li>
  )
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onSetActive: PropTypes.func,
  className: PropTypes.string,
};

export { Link };