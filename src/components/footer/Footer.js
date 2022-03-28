import React from "react";
import { ReactComponent as Email } from "../../assets/svg/email.svg";
import { ReactComponent as Twitter } from "../../assets/svg/twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/svg/linkedin.svg";
import { ReactComponent as Github } from "../../assets/svg/github.svg";
import { ReactComponent as Instagram } from "../../assets/svg/instagram.svg";

import { motion } from "framer-motion";

const footerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeIn",
      when: "beforeChildren",
      staggerChildren: 0.09,
    },
  },
};

const textVariants = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
      type: "spring",
      stiffness: 200,
    },
  },
};

const Footer = ({ darkMode }) => {
  return (
    <>
      <motion.footer
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="footer"
      >
        <div className="footer-container">
          <motion.div className="footer-content" variants={footerVariants}>
            <motion.span variants={textVariants} className="footer-title">
              NEED A WEB DEVELOPER ? LET’S COLLABORATE
            </motion.span>
            <motion.a
              variants={textVariants}
              href="mailto:feranmiayomide@gmail.com"
              className="message-box"
            >
              Send A Message{" "}
              {!darkMode ? (
                <Email stroke="#1A2731" />
              ) : (
                <Email stroke="#C9E4CA" />
              )}
            </motion.a>

            <motion.div variants={textVariants} className="social-media">
              {" "}
              <a
                href="https://www.linkedin.com/in/oluwaferanmi-olatunji-168449208/"
                className="social-link"
                target={"_blank"}
                rel="noreferrer"
              >
                {!darkMode ? (
                  <Linkedin fill="#1A2731" />
                ) : (
                  <Linkedin fill="#C9E4CA" />
                )}
              </a>
              <a
                href="https://twitter.com/rinsoIa"
                className="social-link"
                target={"_blank"}
                rel="noreferrer"
              >
                {!darkMode ? (
                  <Twitter fill="#1A2731" />
                ) : (
                  <Twitter fill="#C9E4CA" />
                )}
              </a>
              <a
                href="https://github.com/rinsolao"
                className="social-link"
                target={"_blank"}
                rel="noreferrer"
              >
                {!darkMode ? (
                  <Github fill="#1A2731" />
                ) : (
                  <Github fill="#C9E4CA" />
                )}
              </a>
              <a
                href="https://instagram.com/rinsola.o"
                className="social-link"
                target={"_blank"}
                rel="noreferrer"
              >
                {!darkMode ? (
                  <Instagram fill="#1A2731" />
                ) : (
                  <Instagram fill="#C9E4CA" />
                )}
              </a>
            </motion.div>

            <motion.div variants={textVariants} className="copyright">
              <span> © dot O </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
