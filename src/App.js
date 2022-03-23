import React, { useEffect, useRef, useState } from "react";
import "./scss/app.scss";
import { ReactComponent as DownArrow } from "./assets/svg/arrowdown.svg";

import TechnologiesCard from "./components/technologies/TechnologiesCard";
import Header from "./components/header/Header";
import NavMenu from "./components/nav-menu/NavMenu";
import LocomotiveScroll from "locomotive-scroll";
// import locomotiveScroll from "locomotive-scroll";
import Meta from "./components/Meta";
import { motion } from "framer-motion";
import About from "./components/about-me/About";
import Projects from "./components/project/Projects";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";
import imagesLoaded from "imagesloaded";

const arrowVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedValue = localStorage.getItem("darkmode");
    return savedValue !== null ? JSON.parse(savedValue) : true;
  });
  const [active, setActive] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  const scrollRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(darkMode));

    setTimeout(() => {
      setisLoading(!isLoading);
    }, 6000);

    const cursor = document.getElementById("cursor");
    document.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
    });

    if (!scrollRef.current) return;

    const scrollEl = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.65,
      reloadOnContextChange: true,
      inertia: 0.3,
      smartphone: {
        smooth: true,
      },
    });

    // Update Locomotive Scroll
    // window.addEventListener("load", () => {
    //   imagesLoaded(document.querySelector("img"), { background: true }, () => {
    //     scrollEl.update();
    //   });
    // });
    setTimeout(() => {
      imagesLoaded(
        document.querySelector("img"),
        { background: true },
        () => {
          scrollEl.update();
        },
        1000
      );
    });
    console.log("loaded", scrollEl);

    // // update Locomotive Scroll
    // window.addEventListener("load", function (event) {
    //   // scrollEl.destroy();
    //   // setTimeout(function () {
    //   //   scrollEl.init();
    //   // }, 100);
    //   // imagesloaded(scrollRef, { background: true }, () => {
    //   //   scrollEl.update();
    //   // });
    //   setTimeout(() => {
    //     scrollEl.destroy();
    //   }, 0);
    //   setTimeout(() => {
    //     scrollEl.init();
    //   }, 50);
    //   setTimeout(() => {
    //     scrollEl.update();
    //   }, 1000);
    // });

    // update locomotive scroll
    // window.addEventListener("load", () => {
    //   let image = document.querySelector("img");
    //   // @ts-ignore
    //   const isLoaded = image?.complete && image?.naturalHeight !== 0;
    //   scrollEl.update();
    // });
  }, [darkMode]);

  return (
    <>
      <motion.div
        ref={scrollRef}
        data-scroll-container
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        className={`portfolio-main-container ${
          darkMode ? "dark-mode" : "light-mode"
        }`}
      >
        <Meta />
        <Loader />
        <div id="cursor"></div>
        <Header
          darkMode={darkMode}
          active={active}
          setDarkMode={setDarkMode}
          setActive={setActive}
        />
        <NavMenu
          darkMode={darkMode}
          active={active}
          setDarkMode={setDarkMode}
          setActive={setActive}
        />

        <About isLoading={isLoading} />

        <motion.span
          initial="hidden"
          whileInView={!isLoading && "visible"}
          variants={arrowVariants}
          className="down-arrow"
        >
          {!darkMode ? (
            <DownArrow fill="#1A2731" />
          ) : (
            <DownArrow fill="#C9E4CA" />
          )}
        </motion.span>

        {/* PROJECTS*/}
        <Projects isLoading={isLoading} />

        <section
          className="technologies"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-position="top"
          data-scroll-speed=".3"
        >
          <div className="technologies-container">
            <TechnologiesCard />
          </div>
        </section>

        <Footer darkMode={darkMode} />
      </motion.div>
    </>
  );
};

export default App;
