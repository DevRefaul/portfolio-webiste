import React, { useState } from "react";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import Loading from "../../../../Components/Loading/Loading";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const handleContact = (e) => {
    e.preventDefault();

    const form = e.target;

    setLoading(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then((result) => {
        if (result.status === 200) {
          toast.success("Successfully Submitted. I will mail you back soon.");
          form.reset();
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err.meaage);
        toast.error(err.message);
        setLoading(false);
      });

    e.target.reset();
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="my-14 lg:w-[60%] mx-auto">
      <form onSubmit={handleContact}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full p-2 rounded focus:outline-green-400 mt-2"
            />
          </div>
          <div>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full p-2 rounded focus:outline-green-400 mt-2"
            />
          </div>
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

        <div className="mt-3">
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
