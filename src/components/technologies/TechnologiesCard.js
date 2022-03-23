import React from "react";
import "./_TechnologiesCard.scss";
import { ReactComponent as Github } from "../../assets/svg/github.svg";
import { ReactComponent as Javascript } from "../../assets/svg/javascript.svg";
import { ReactComponent as Postman } from "../../assets/svg/postman.svg";
import { ReactComponent as Html } from "../../assets/svg/html.svg";
import { ReactComponent as Css } from "../../assets/svg/css.svg";
import { ReactComponent as ReactJs } from "../../assets/svg/react.svg";
import { ReactComponent as Nodejs } from "../../assets/svg/nodejs.svg";
import { ReactComponent as Sass } from "../../assets/svg/sass.svg";
import { ReactComponent as Figma } from "../../assets/svg/figma.svg";
import { ReactComponent as Tailwind } from "../../assets/svg/tailwind.svg";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const cardVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const TechnologiesCard = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ once: true, amount: 0.1 }}
      className="technology-card"
    >
      <div className="technology-card-container">
        <div className="technology-card-content">
          <motion.span variants={textVariants} className="title">
            Technologies
          </motion.span>

          <motion.div className="image-section">
            <motion.div variants={imageVariants} className="tech-img">
              <Github fill="#C9E4CA" />
            </motion.div>

            <motion.div variants={imageVariants} className="tech-img">
              <Nodejs />
            </motion.div>
            <motion.div variants={imageVariants} className="tech-img">
              <Postman />
            </motion.div>
            <motion.div variants={imageVariants} className="tech-img">
              <Html />
            </motion.div>
            <motion.div variants={imageVariants} className="tech-img">
              <Css />
            </motion.div>
            <motion.div variants={imageVariants} className="tech-img">
              <ReactJs />
            </motion.div>
            <motion.div variants={imageVariants} className="tech-img">
              <Javascript />
            </motion.div>
            <motion.div variants={imageVariants} className="tech-img">
              <Sass />
            </motion.div>
            <motion.div variants={imageVariants} className="tech-img">
              <Figma />
            </motion.div>
            <motion.div variants={imageVariants} className="tech-img">
              <Tailwind />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechnologiesCard;
