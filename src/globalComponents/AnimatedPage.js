import React, { useEffect } from "react";
import { motion } from "motion/react";

const animations = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -100,
  },
};



const AnimatedPage = ({ children }) => {
  useEffect(() => {
    // Add transitioning class immediately
    document.body.classList.add("transitioning");

    // Also add it to the specific page containers
    const pageContainers = document.querySelectorAll(
      ".home-page, .aboutme-page, .projects-page"
    );
    pageContainers.forEach((container) => {
      container.classList.add("page-transitioning");
    });

    // Remove classes after animation completes with some buffer
    const timer = setTimeout(() => {
      document.body.classList.remove("transitioning");
      pageContainers.forEach((container) => {
        container.classList.remove("page-transitioning");
      });
    }, 600); // Slightly longer than animation duration for safety

    return () => {
      clearTimeout(timer);
      document.body.classList.remove("transitioning");
      // Clean up any remaining classes
      const containers = document.querySelectorAll(
        ".home-page, .aboutme-page, .projects-page"
      );
      containers.forEach((container) => {
        container.classList.remove("page-transitioning");
      });
    };
  }, []);

  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
