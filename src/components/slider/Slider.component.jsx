import { AnimatePresence, motion } from 'framer-motion';

const modal = {
  visible: { x: '0%' },
  hidden: { x: '-100%' },
  exit: { x: '-100%' },
};

const Slider = ({ children, open, className }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {open && (
        <motion.div
          variants={modal}
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
