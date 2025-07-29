import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { db } from "../Firebase/Config.js";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Loader2 } from "lucide-react";
const Contact = () => {
  const name = useRef();
  const email = useRef();
  const message = useRef();
  const [loading, setLoading] = useState(false);
  // send message to firebase
  const clientMessage = async (e) => {
    e.preventDefault();
    const nameVal = name.current.value.trim();
    const emailVal = email.current.value.trim();
    const messageVal = message.current.value.trim();
    if (!nameVal || !emailVal || !messageVal) {
      toast.error("All fields are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(emailVal)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, "messages"), {
        name: nameVal,
        email: emailVal,
        message: messageVal,
        createdAt: new Date(),
      });
      toast.success("Message sent successfully!");
      console.log("Document written with ID: ", docRef.id);
      name.current.value = "";
      email.current.value = "";
      message.current.value = "";
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Internal Server Error");
    } finally {
      setLoading(false);
    }
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
            ref={name}
            placeholder="Your Name"
            className="w-full p-3 bg-[#0f0f0f] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0e98ba] text-white"
          />
          <input
            type="email"
            ref={email}
            placeholder="Your Email"
            className="w-full p-3 bg-[#0f0f0f] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0e98ba] text-white"
          />
          <textarea
            placeholder="Your Message"
            ref={message}
            rows="6"
            className="w-full p-3 bg-[#0f0f0f] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0e98ba] text-white"
          ></textarea>

          <button
            type="submit"
            className="w-full cursor-pointer py-3 bg-[#0e98ba] text-white font-semibold rounded-md hover:bg-[#0b7ea2] transition-colors duration-300"
          >
            {loading ? (
              <Loader2 className="animate-spin h-5 w-5 mx-auto" />
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
