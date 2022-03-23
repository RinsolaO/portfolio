import React from "react";
import "./_Loader.scss";
import { motion } from "framer-motion";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

const portfolioVariants = {
  hidden: {},
  visible: {
    y: "-100vh",
    transition: {
      delay: 1,
      transition: 1,
      staggerChildren: 2,
      delayChildren: 1,
      when: "afterChildren",
    },
  },
};

const leftChildVariants = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: "0",

    opacity: 1,
    transition: {
      ease: "easeIn",
      type: "spring",
      stiffness: 150,
      damp: 0.5,
      //   repeat: Infinity,
    },
  },
};

const rightChildVariants = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: "0",

    opacity: 1,
    transition: {
      ease: "easeIn",
      type: "spring",
      stiffness: 120,
      //   repeat: Infinity,
    },
  },
};

const Loader = () => {
  return (
    <motion.div
      className="loader"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={portfolioVariants}
    >
      <div className="loader-container">
        <div className="portfolio-container">
          <motion.span variants={leftChildVariants} className="portfolio-name">
            oluwaferanmi olatunji
          </motion.span>
          <motion.span
            variants={rightChildVariants}
            className="portfolio-footer"
          >
            Frontend Developer
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
