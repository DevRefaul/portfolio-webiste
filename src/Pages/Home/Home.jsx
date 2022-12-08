import React from "react";
import AboutMe from "./Sections/AboutMe/AboutMe";
import Banner from "./Sections/Banner/Banner";
import Contact from "./Sections/Contact/Contact";
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills/Skills";

const Home = () => {
  return (
    <>
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
