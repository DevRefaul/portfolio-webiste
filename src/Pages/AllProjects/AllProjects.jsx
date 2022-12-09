import React from "react";
import "./allProjects.css";

const AllProjects = () => {
  return (
    <div className="w-[90%] md:w-[90%] mx-auto scroll-smooth  my-16">
      <h2 className="text-2xl font-semibold  mb-10 text-center underline">
        All Of My Projects
      </h2>

      {/* projects */}
      <div>
        {/* first project */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="firstProject border-2 border-green-400 m-6"></div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">UBS Point</h2>
            <p className="text-lg ">
              UBS Point is a used bike selling platform. Where buyers can buy
              bikes. And make the payment in stripe. Sellers can post bikes for
              sell. Sellers can advertise their posts to show their posts on
              homepage. Sellers can make verify request to admin with requested
              document. Admin dashboard is there for admin to delete buyer ,
              seller or reported post. Admin can verify a seller after checking
              the application
            </p>
            <button className="btn bg-green-500 mt-6 border-2 border-transparent hover:bg-white hover:text-green-400 hover:border-green-400">
              <a
                href="https://usb-point.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Website
              </a>
            </button>
          </div>
        </div>
        {/* first project */}

        {/* second project */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="secondProject border-2 border-green-400 m-6"></div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Tour De BD</h2>
            <p className="text-lg ">
              Tour De BD is a online touring guide based website. Where A guide
              is selling his experience. Users can hire him as a guide for a
              flawless tours. If users want to travel around Bangladesh they can
              hire him to visit many places they have never gone before without
              any hassle.
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
        </div>
        {/* second project */}

        {/* third project */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* image */}
          <div className="thirdProject border-2 border-green-400 m-6"></div>

          {/* content */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Online Patshala</h2>
            <p className="text-lg ">
              Online Patshala is a Online learning platform. There are many
              courses based on trending topics for upgradomg skills. Users can
              buy courses of various skill related topics as their needs.
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
        {/* third project */}

        {/* fourth project */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* image */}
          <div className="fourthProject border-2 border-green-400 m-6"></div>

          {/* content */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">E-learn</h2>
            <p className="text-lg ">
              E-learn is a online learning platform responsive landing page.
            </p>
            <button className="btn bg-green-500 mt-6 border-2 border-transparent hover:bg-white hover:text-green-400 hover:border-green-400">
              <a
                href="https://devrefaul.github.io/e_programming/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Website
              </a>
            </button>
          </div>
        </div>
        {/* fourth project */}

        {/* fifth project */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* image */}
          <div className="fifthProject border-2 border-green-400 m-6"></div>

          {/* content */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Flower.</h2>
            <p className="text-lg ">
              Flower. is a online flower selling responsive landing page.
            </p>
            <button className="btn bg-green-500 mt-6 border-2 border-transparent hover:bg-white hover:text-green-400 hover:border-green-400">
              <a
                href="https://devrefaul.github.io/responsive_flower_website/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Website
              </a>
            </button>
          </div>
        </div>
        {/* fifth project */}
      </div>
    </div>
  );
};

export default AllProjects;
