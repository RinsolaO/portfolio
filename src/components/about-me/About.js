import React from "react";
import { motion } from "framer-motion";

const portfolioVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.8 },
  },
};

const childVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeIn",
      type: "spring",
      stiffness: 200,
    },
  },
};

const blurChildVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
};

const About = ({ isLoading }) => {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView={!isLoading && "visible"}
        viewport={{ once: true, amount: 0.8 }}
        variants={portfolioVariants}
        className="portfolio"
      >
        <div className="portfolio-container">
          <motion.span variants={childVariants} className="portfolio-header">
            hello, I’m
          </motion.span>
          <motion.span variants={childVariants} className="portfolio-name">
            oluwaferanmi olatunji
          </motion.span>
          <motion.span variants={childVariants} className="portfolio-footer">
            I am a self taught frontend developer based in Lagos, Nigeria, I
            enjoy creating beautiful, responsive, functional and interactive
            user interfaces.
          </motion.span>
        </div>
      </motion.div>
    </>
  );
};

export default About;
