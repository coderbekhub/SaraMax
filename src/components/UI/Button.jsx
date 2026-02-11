import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ variant = 'primary', children, ...rest }) => {
  return (
    <motion.button
      className={`btn btn--${variant}`}
      whileHover={{ y: -2, boxShadow: '0 18px 40px rgba(15,23,42,0.7)' }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      {...rest}
    >
      <span className="btn__inner">{children}</span>
    </motion.button>
  );
};

export default Button;

