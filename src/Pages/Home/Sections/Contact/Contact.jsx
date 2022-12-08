import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="bg-green-200 mt-16">
      <div className="w-[90%] md:w-[80%] mx-auto py-10">
        <h2 className="text-2xl font-semibold text-center">Get In Touch</h2>

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
