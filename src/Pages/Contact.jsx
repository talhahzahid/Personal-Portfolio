import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const clientMessage = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    // You can add toast or backend logic here
  };

  return (
    <div className="bg-[#0e0e0e] min-h-screen text-white py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h1 className="text-4xl font-bold mb-4 tracking-wide text-white">
          Get In <span className="text-[#0e98ba]">Touch</span>
        </h1>
        <p className="text-gray-300 mb-10">
          I'd love to hear about your project. Share your details and let's
          collaborate to build something great!
        </p>

        <form
          onSubmit={clientMessage}
          className="bg-[#1a1a1a] p-6 rounded-2xl shadow-xl border border-gray-700 space-y-5"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 bg-[#0f0f0f] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0e98ba] text-white"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-[#0f0f0f] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0e98ba] text-white"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="6"
            className="w-full p-3 bg-[#0f0f0f] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0e98ba] text-white"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-[#0e98ba] text-white font-semibold rounded-md hover:bg-[#0b7ea2] transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
