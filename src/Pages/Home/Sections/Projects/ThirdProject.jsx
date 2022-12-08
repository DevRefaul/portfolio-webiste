import React from "react";
import onlinePatshala from "../../../../Assets/Online-Patshala.png";

const ThirdProject = () => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 gap-6 items-center my-8">
      <div>
        <img src={onlinePatshala} alt="" className="border-2" />
      </div>
      <div>
        <h2 className="text-3xl font-semibold mb-4">Online Patshala</h2>
        <p className="text-lg ">
          Online Patshala is a Online learning platform. There are many courses
          based on trending topics for upgradomg skills. Users can buy courses
          of various skill related topics as their needs.
        </p>
        <button className="btn bg-green-500 mt-6 border-2 border-transparent hover:bg-white hover:text-green-400 hover:border-green-400">
          <a
            href="https://online-patshala.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Website
          </a>
        </button>
      </div>
    </div>
  );
};

export default ThirdProject;
