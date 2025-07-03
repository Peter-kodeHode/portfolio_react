import { motion } from "motion/react";

const AnimatedPage = ({ children, direction = "right" }) => {
  const animations = {
    initial: {
      opacity: 0,
      x: direction === "right" ? 100 : -100,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: direction === "right" ? -100 : 100,
    },
  };

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
