import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';

const Button = forwardRef((props, ref) => {
  return (
    <motion.button {...props} whileTap={{ scale: 0.9 }} ref={ref}>
      {props.children}
    </motion.button>
  );
});

export default Button;
