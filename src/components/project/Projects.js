import React from "react";
import ProjectCard from "../project-card/ProjectCard";
import Blaq from "../..//assets/img/blaq-img.webp";
import Bytestacks from "../..//assets/img/bytestacks-img.webp";
import Incog from "../..//assets/img/incog-img.webp";
import { motion } from "framer-motion";

const childVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeIn",
    },
  },
};

const textVariants =
  window.innerWidth <= 768
    ? {
        hidden: {
          opacity: 0,
          y: 100,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 6,
            duration: 0.4,
            ease: "easeIn",
            type: "spring",
            stiffness: 200,
          },
        },
      }
    : {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.7,
          },
        },
      };

const Projects = ({ isLoading }) => {
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView={"visible"}
        className="project"
      >
        <div className="project-container">
          <motion.span
            variants={textVariants}
            viewport={{ once: true, amount: 0.4 }}
            className="title"
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-position="top"
            data-scroll-speed="1"
          >
            Stuff I’ve Worked On
          </motion.span>
          <div className="project-cards">
            <div
              className="mini-card"
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-position="top"
              data-scroll-speed="-.5"
            >
              <ProjectCard
                image={Blaq}
                cardTitle={`Blaq’s 
                Portfolio`}
                cardTechnologies={`React,
                Framer Motion`}
                github="https://github.com/RinsolaO/blaq_portfolio"
                liveSite={"https://blaq.netlify.app"}
              />
            </div>

            <div
              className="mini-card"
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-position="top"
              data-scroll-speed=".5"
            >
              <ProjectCard
                image={Incog}
                cardTitle={`incog africa`}
                cardTechnologies={`React, styled component`}
                github="https://github.com/RinsolaO"
                liveSite={"https://incogweb.netlify.com/"}
              />
            </div>

            <div
              className="mini-card"
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-position="top"
              data-scroll-speed="-.5"
            >
              <ProjectCard
                image={Bytestacks}
                cardTitle={`bytestacks`}
                cardTechnologies={`React,
                Framer Motion`}
                github="https://github.com/RinsolaO/bytestacks"
                liveSite={"https://bytestacks.netlify.app/"}
              />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Projects;
