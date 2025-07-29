import React from "react";
import { motion } from "framer-motion";
import { IoMdHand } from "react-icons/io";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";

import profileImg from "/src/assets/profile-pic.png";
import avatar from "/src/assets/Avatar-Profile-Vector-180x180.png";

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const imageZoom = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const waveAnimation = {
  animate: {
    rotate: [0, 20, -20, 0],
    transition: {
      duration: 1.2,
      repeat: Infinity,
    },
  },
};

const Home = () => {
  return (
    <motion.div
      className="bg-[#151515] text-white w-full overflow-x-hidden"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
    >
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 place-content-center gap-10 px-6 py-16 max-w-5xl mx-auto text-center md:text-left">
        {/* Text Content */}
        <motion.div
          className="space-y-5 place-self-center"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="flex items-center justify-center md:justify-start gap-4 text-3xl font-bold">
            <h1>Hi There</h1>
            <motion.div {...waveAnimation}>
              <IoMdHand size={40} />
            </motion.div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold">
            I'M <span className="text-[#0e98ba]">TALHA ZAHID</span>
            <br />
            MERN STACK DEVELOPER
          </h2>
          <p className="text-lg text-gray-300">
            Full Stack Developer | MERN | Angular | Tailwind | Firebase |
            MongoDB | Express.js | Social Media Marketing
          </p>
        </motion.div>

        {/* Profile Image */}
        <motion.img
          src={profileImg}
          alt="Profile"
          className="w-52 sm:w-64 md:w-72 place-self-center rounded-full shadow-2xl border-4 border-[#0e98ba]/40"
          variants={imageZoom}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        />
      </div>

      {/* About Section */}
      <div className="grid lg:grid-cols-2 place-content-center gap-10 px-6 py-16 max-w-5xl mx-auto text-center lg:text-left">
        <div className="space-y-5 place-self-center text-lg font-semibold">
          <h1 className="text-3xl">
            LET ME <span className="text-[#0e98ba]">INTRODUCE</span> MYSELF
          </h1>

          <p>
            I’m a passionate{" "}
            <span className="text-[#0e98ba]">MERN Stack Developer</span> who
            enjoys creating clean, fast, and responsive web and mobile
            applications.
          </p>

          <p>
            I work mostly with{" "}
            <span className="text-[#0e98ba]">
              JavaScript, React.js, and Angular , Node js , Express js
            </span>
            , building smooth user experiences across platforms.
          </p>

          <p>
            I enjoy solving real problems through code and care deeply about
            user-friendly design and good performance.
          </p>

          <p>
            I’m always learning new tools and techniques to stay up to date and
            build better digital products every day.
          </p>
        </div>

        <div className="place-self-center">
          <img src={avatar} alt="Avatar" className="w-60 sm:w-72" />
        </div>
      </div>

      {/* Social Links Section */}
      <div className="w-full text-center py-16 px-6">
        <h1 className="text-3xl font-bold">FIND ME ON</h1>
        <p className="text-xl mt-2">
          Feel free to{" "}
          <span className="text-[#0e98ba] font-semibold">connect</span> with me
        </p>

        <div className="flex justify-center flex-wrap gap-6 text-2xl mt-6">
          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border border-gray-300 rounded-xl p-3 hover:bg-[#0e98ba] hover:text-white transition-all duration-300"
          >
            <a
              href="https://www.linkedin.com/in/talhahzahid/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border border-gray-300 rounded-xl p-3 hover:bg-[#0e98ba] hover:text-white transition-all duration-300"
          >
            <a
              href="https://github.com/talhahzahid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border border-gray-300 rounded-xl p-3 hover:bg-[#0e98ba] hover:text-white transition-all duration-300"
          >
            <a
              href="https://www.instagram.com/_talhazahid7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
