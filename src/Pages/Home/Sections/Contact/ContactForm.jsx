import React from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const handleContact = (e) => {
    e.preventDefault();

    toast.success("Successfully Submitted. I will mail you back soon.");

    e.target.reset();
  };

  return (
    <div className="my-14 lg:w-[60%] mx-auto">
      <form onSubmit={handleContact}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full p-2 rounded focus:outline-green-400 mt-2"
            />
          </div>
          <div>
            <label htmlFor="subject">Your Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="block w-full p-2 rounded focus:outline-green-400 mt-2"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            className="mt-2 w-full p-2 rounded focus:outline-green-400"
          ></textarea>
        </div>

        <button
          className=" btn bg-green-500 mt-3 border-2 border-transparent hover:bg-white hover:text-green-400 hover:border-green-400"
          type="submit"
        >
          Get In Touch
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
