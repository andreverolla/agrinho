import PropTypes from "prop-types";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const Link = forwardRef(
  ({ to, title, text, onClick, onSetActive, className }, ref) => (
    <motion.li
      ref={ref}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
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
        className={`text-lg transition-colors cursor-pointer ${className}`}
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