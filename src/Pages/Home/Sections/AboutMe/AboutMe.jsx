import React from "react";
import myImage from "../../../../Assets/about-me-image.jpg";

const AboutMe = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto my-16">
      <h2 className="text-2xl font-semibold text-center underline">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center my-12">
        {/* img of me */}
        <div className="flex justify-center items-center">
          <img src={myImage} alt="" className="w-1/2" />
        </div>

        {/* about me texts */}
        <div>
          <h4 className="text-2xl font-semibold mb-2">
            Hi, My name is MD.Refaul Islam
          </h4>
          <p className="text-lg font-normal">
            I'm an enthusiast web developer. As a tech lover I always have the
            aspiration to know more about technologies. And this aspiration has
            landed me into web development. I always try to gather knowledge
            about technologies about web developement. Currently I'm learning to
            be a proper MERN stack developer. And in a few days I will start
            learning Redux, TypeScript and Next.js .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
