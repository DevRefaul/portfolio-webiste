import React from "react";
import image from "../../../../Assets/smile.png";
import resume from "../../../../Assets/Main_Resume.pdf";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="bg-green-200 relative min-h-[70vh]">
      <div className="w-[90%] md:w-[80%] mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 items-center justify-center py-8">
        {/* content */}
        <div className="flex justify-center">
          <div>
            <p className="text-lg font-medium py-1">Hi</p>
            <h4 className="text-base lg:text-2xl font-medium">
              {" "}
              Welcome To My Portfolio. I'm
            </h4>
            <h1 className="text-3xl lg:text-6xl font-semibold py-4">
              MD.Refaul Islam
            </h1>
            <div className="text-2xl lg:text-3xl font-semibold">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1000,
                  "Frontend Developer",
                  1000,
                  "React Developer",
                  1000,
                ]}
                speed={50} // Custom Speed from 1-99 - Default Speed: 40
                wrapper="span" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
              />
            </div>

            {/* resume download btn */}
            <button className="mt-6 bg-lime-500 px-6 py-3 rounded text-white font-semibold hover:bg-lime-400 cursor-pointer">
              <a href={resume} download="MD.Refaul Islam's Resume.pdf">
                My Resume
              </a>
            </button>
          </div>
        </div>

        {/* my image */}
        <div className="flex justify-center items-center my-10 md:mt-0">
          <img
            src={image}
            alt=""
            className="lg:h-96 border-4 border-sky-400 rounded-full"
          />
        </div>
      </div>

      {/* wave svg */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 240"
        className="absolute bottom-0 left-0"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,213.3C672,235,768,245,864,218.7C960,192,1056,128,1152,106.7C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Banner;
