import React from "react";
import { ReactComponent as Email } from "../../assets/svg/email.svg";
import { ReactComponent as Twitter } from "../../assets/svg/twitter.svg";
import { ReactComponent as Linkedin } from "../../assets/svg/linkedin.svg";
import { ReactComponent as Github } from "../../assets/svg/github.svg";
import Header from "../header/Header";
import { ReactComponent as Instagram } from "../../assets/svg/instagram.svg";
import { motion } from "framer-motion";

const menuVariants = {
  visible: {
    top: 0,
    transition: {
      duration: 0.45,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
  exit: {
    top: "-100vh",
    transition: {
      duration: 0.45,
      delay: 0.2,
      when: "afterChildren",
    },
  },
};

const textVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.45,
    },
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.45,
      delay: 0.2,
    },
  },
};

const NavMenu = ({ darkMode, active, setDarkMode, setActive }) => {
  return (
    <>
      <motion.div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#portfolio"
        variants={menuVariants}
        animate={active ? "visible" : "exit"}
        className={`nav-menu ${active ? "active" : ""}`}
      >
        <Header
          darkMode={darkMode}
          active={active}
          setDarkMode={setDarkMode}
          setActive={setActive}
        />

        <motion.div className="nav-menu-container">
          <div className="footer">
            <div className="footer-container">
              <div className="footer-content">
                <motion.span className="footer-title" variants={textVariants}>
                  GOT AN IDEA ? LET’S COLLABORATE
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
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default NavMenu;
