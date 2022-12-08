import React from "react";
import html from "../../../../Assets/icons8-html-5-96.png";
import css from "../../../../Assets/icons8-css3-96.png";
import bootstrap from "../../../../Assets/icons8-bootstrap-96.png";
import tailwind from "../../../../Assets/icons8-tailwind-css-96.png";
import js from "../../../../Assets/icons8-javascript-96.png";
import react from "../../../../Assets/icons8-react-96.png";
import node from "../../../../Assets/icons8-node-js-96.png";
import express from "../../../../Assets/icons8-express-js-96.png";
import mongodb from "../../../../Assets/icons8-mongodb-96.png";
import firebase from "../../../../Assets/icons8-firebase-96.png";

const Skills = () => {
  return (
    <div className="bg-green-200 my-16">
      <div className="w-[90%] md:w-[80%] mx-auto py-8">
        {/* title */}
        <h2 className="text-2xl font-semibold text-center underline">
          My Skills
        </h2>
        <p className="text-lg text-center my-4">
          Over the time I have gathered knowledge about some technologies and{" "}
          <br />
          had some projects with this skills I have gathered the skills are
          displayed below
        </p>
        {/* content */}
        <div className="my-8">
          {/* skills icons */}
          <div className="flex justify-evenly flex-wrap">
            <img src={html} alt="html icon" />
            <img src={css} alt="css icon" />
            <img src={bootstrap} alt="bootstrap icon" />
            <img src={tailwind} alt="tailwind icon" />
            <img src={js} alt="javascript icon" />
            <img src={react} alt="react icon" />
            <img src={node} alt="node icon" />
            <img src={express} alt="express icon" />
            <img src={mongodb} alt="mongodb icon" />
            <img src={firebase} alt="firebase icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
