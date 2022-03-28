import React from "react";
import "./_ProjectCard.scss";
import { ReactComponent as Github } from "../../assets/svg/github.svg";
import { ReactComponent as EyeIcon } from "../../assets/svg/eyeicon.svg";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: {
    y: 50,
  },
  visible: {
    y: 0,
    transition: {
      when: "beforeChildren",
      duration: ".1",
      staggerChildren: 0.4,
    },
  },
};

const rightVariants = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      type: "spring",
      stiffness: 120,
    },
  },
};

const imgVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
const ProjectCard = ({
  image,
  cardTitle,
  cardTechnologies,
  className,
  github,
  liveSite,
}) => {
  return (
    <motion.div
      className="project-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={cardVariants}
    >
      <div className="project-card-container">
        <motion.div className="project-card-content">
          <motion.div className="project-card-left" variants={imgVariants}>
            <img src={image} alt="" className="project-img" />
          </motion.div>
          <motion.div className="project-card-right" variants={rightVariants}>
            <motion.span className={`title ${className}`}>
              {cardTitle}
            </motion.span>
            <motion.span className="subtitle">{cardTechnologies}</motion.span>
            <div className="card-img">
              <motion.a
                href={github}
                className="social-link"
                target={"_blank"}
                rel="noreferrer"
              >
                <Github fill="#1A2731" />
              </motion.a>

              <motion.a
                href={liveSite}
                className="social-link"
                target={"_blank"}
                rel="noreferrer"
              >
                <EyeIcon />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
