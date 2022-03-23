import React from "react";
// import "./scss/app.scss";
import { ReactComponent as Darkmode } from "../../assets/svg/darkmode.svg";
import { ReactComponent as Lightmode } from "../../assets/svg/lightmode.svg";
import { ReactComponent as Hambuger } from "../../assets/svg/hamburger.svg";
import { ReactComponent as Close } from "../../assets/svg/close.svg";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: {},
  visible: {
    transition: {
      duration: 0.5,
      when: "afterChildren",
      // delayChildren: 0.4,
      staggerChildren: 0.4,
    },
  },
};

const leftChildVariants = {
  hidden: {
    opacity: 0,

    x: -50,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const svgVariants = {
  hidden: {
    x: 50,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    x: 100,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
const Header = ({ darkMode, active, setDarkMode, setActive }) => {
  return (
    <>
      <motion.header
        initial="hidden"
        whileInView={"visible"}
        exit={"exit"}
        viewport={{ once: false, amount: 0.5 }}
        className={`header ${active ? "active" : ""}`}
      >
        <nav className="navbar">
          <motion.div className="nav-items">
            <motion.div className="nav-left">
              {darkMode ? (
                <motion.div>
                  <Darkmode
                    onClick={() => {
                      setDarkMode(!darkMode);
                    }}
                    className="dark-mode"
                  />
                </motion.div>
              ) : (
                <motion.div>
                  <Lightmode
                    className="light-mode"
                    onClick={() => {
                      setDarkMode(!darkMode);
                    }}
                  />
                </motion.div>
              )}

              <div className="logo-name">dot O</div>
            </motion.div>
            <motion.div className="nav-right">
              {darkMode && active && (
                <Close
                  stroke="#C9E4CA"
                  onClick={() => {
                    setActive(!active);
                  }}
                />
              )}
              {!darkMode && active && (
                <Close
                  stroke="#1A2731"
                  onClick={() => {
                    setActive(!active);
                  }}
                />
              )}

              {!active && darkMode && (
                <Hambuger
                  stroke="#C9E4CA"
                  onClick={() => {
                    setActive(!active);
                  }}
                />
              )}
              {!active && !darkMode && (
                <Hambuger
                  stroke="#1A2731"
                  onClick={() => {
                    setActive(!active);
                  }}
                />
              )}
            </motion.div>
          </motion.div>
        </nav>
      </motion.header>
    </>
  );
};

export default Header;
