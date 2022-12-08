import React from "react";
import ubsPointImage from "../../../../Assets/UBS-Point-Used-Bike-Selling-Point.png";

const FirstProject = () => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 gap-6 items-center my-8">
      <div>
        <img src={ubsPointImage} alt="" className="border-2" />
      </div>
      <div>
        <h2 className="text-3xl font-semibold mb-4">UBS Point</h2>
        <p className="text-lg ">
          UBS Point is a used bike selling platform. Where buyers can buy bikes.
          And make the payment in stripe. Sellers can post bikes for sell.
          Sellers can advertise their posts to show their posts on homepage.
          Sellers can make verify request to admin with requested document.
          Admin dashboard is there for admin to delete buyer , seller or
          reported post. Admin can verify a seller after checking the
          application
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
  );
};

export default FirstProject;
