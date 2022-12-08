import React from "react";
import tourDeBD from "../../../../Assets/Tour-DE-Bangladesh.png";

const SecondProject = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center my-8">
      <div>
        <h2 className="text-3xl font-semibold mb-4">Tour De BD</h2>
        <p className="text-lg ">
          Tour De BD is a online touring guide based website. Where A guide is
          selling his experience. Users can hire him as a guide for a flawless
          tours. If users want to travel around Bangladesh they can hire him to
          visit many places they have never gone before without any hassle.
        </p>
        <button className="btn bg-green-500 mt-6 border-2 border-transparent hover:bg-white hover:text-green-400 hover:border-green-400">
          <a
            href="https://tour-de-bangladesh-56160.web.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Website
          </a>
        </button>
      </div>

      {/* image */}
      <div>
        <img src={tourDeBD} alt="" className="border-2" />
      </div>
    </div>
  );
};

export default SecondProject;
