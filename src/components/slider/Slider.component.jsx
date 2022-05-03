import { AnimatePresence, motion } from 'framer-motion';

const modal = {
  visible: { x: '0%' },
  hidden: { x: '-105%' },
  exit: { x: '-105%' },
};

const Slider = ({ children, open, className, variants = modal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {open && (
        <motion.div
          variants={variants}
          initial='hidden'
          animate='visible'
          exit='exit'
          className={className || ''}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Slider;
