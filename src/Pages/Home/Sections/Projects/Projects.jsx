import React from "react";
import { Link } from "react-router-dom";
import FirstProject from "./FirstProject";
import SecondProject from "./SecondProject";
import ThirdProject from "./ThirdProject";

const Projects = () => {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto my-16">
      <h2 className="mb-10 text-center text-2xl font-semibold underline capitalize">
        A glance of my projects
      </h2>

      <div>
        <FirstProject />
        <br />
        <br />
        <SecondProject />
        <br />
        <br />
        <ThirdProject />
        <br />
        <div className="flex justify-center">
          <button className="btn bg-green-500 hover:bg-green-400 border-none">
            <Link to="/allprojects">See All Projects</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
