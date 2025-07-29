import React from "react";
import { FaHandPointRight, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { DiNodejs, DiMongodb } from "react-icons/di";
import { SiExpress, SiDaisyui, SiAntdesign, SiAngular } from "react-icons/si";

const About = () => {
  const hobbies = ["Playing Football", "Swimming", "Exploring New Tech"];

  const frontendSkills = [
    { icon: <GrReactjs className="text-[#61DAFB]" />, label: "React.js" },
    { icon: <SiAngular className="text-red-600" />, label: "Angular" },
  ];

  const backendSkills = [
    { icon: <DiNodejs className="text-green-500" />, label: "Node.js" },
    { icon: <SiExpress className="text-gray-400" />, label: "Express.js" },
    { icon: <DiMongodb className="text-green-700" />, label: "MongoDB" },
  ];

  const uiSkills = [
    {
      icon: <RiTailwindCssFill className="text-[#38BDF8]" />,
      label: "Tailwind CSS",
    },
    { icon: <FaBootstrap className="text-purple-600" />, label: "Bootstrap" },
    { icon: <SiDaisyui className="text-pink-400" />, label: "DaisyUI" },
    { icon: <SiAntdesign className="text-blue-600" />, label: "Ant Design" },
    { icon: <FaGitAlt className="text-orange-600" />, label: "Git" },
  ];

  const renderSkillGroup = (title, skills) => (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center text-[#0e98ba]">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 transition-all duration-300 hover:scale-105"
          >
            <div className="text-5xl">{skill.icon}</div>
            <span className="text-lg text-gray-300">{skill.label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-[#151515] text-white min-h-screen px-6 py-16">
      {/* ========= Intro Section ========= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div>
          <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
            Get to Know <span className="text-[#0e98ba]">Me</span>
          </h1>
          <p className="text-lg leading-7 mb-4">
            I’m <strong>Talha Zahid</strong>, a passionate{" "}
            <span className="text-[#0e98ba]">Full Stack Web Developer</span>{" "}
            based in Karachi, Pakistan. I specialize in building fast, scalable,
            and responsive web applications using modern frameworks.
          </p>
          <p className="text-lg leading-7 mb-4">
            With a strong foundation in both frontend and backend technologies,
            I turn business needs into elegant digital solutions.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="src/assets/about.aee0f771fbfc1e7b8fa8.png"
            alt="About"
            className="w-[300px] md:w-[400px] rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* ========= Skills Section ========= */}
      <div className="mt-20 max-w-5xl mx-auto">
        <h1 className="text-4xl text-center font-bold mb-12">My Tech Stack</h1>
        {renderSkillGroup("Frontend", frontendSkills)}
        {renderSkillGroup("Backend", backendSkills)}
        {renderSkillGroup("UI & Tools", uiSkills)}
      </div>
    </div>
  );
};

export default About;
