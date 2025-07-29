import React from "react";
import { ExternalLink, Github, Shield } from "lucide-react";

const Card = (props) => {
  return (
    <div className="w-full max-w-sm mx-auto bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white rounded-2xl shadow-lg overflow-hidden backdrop-blur-md border border-white/10 transition-transform transform hover:scale-105 duration-300 flex flex-col">
      <img
        src={props.image}
        alt="Project Preview"
        className="w-full h-52 object-cover"
      />

      <div className="flex flex-col justify-between flex-grow p-6">
        <div>
          <h2 className="text-2xl font-bold mb-2">{props.title}</h2>
          <p className="text-sm text-gray-200 mb-4 min-h-[80px]">{props.des}</p>

          {props.techs && (
            <div className="flex flex-wrap gap-2 mb-4">
              {props.techs.map((tech, index) => (
                <span
                  key={index}
                  className="bg-white/10 px-3 py-1 text-xs rounded-full border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Buttons: Main Demo, GitHub, Admin */}
        <div className="flex flex-wrap justify-between gap-2 mt-auto pt-4">
          <a
            href={props.btn1}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1D428A] hover:bg-blue-800 text-white px-4 py-2 rounded-lg text-sm transition"
          >
            <ExternalLink size={16} /> Demo
          </a>

          {props.btn3 && (
            <a
              href={props.btn3}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#0e98ba] hover:bg-[#0c84a3] px-4 py-2 rounded-lg text-sm transition"
            >
              <Shield size={16} /> Admin
            </a>
          )}

          <a
            href={props.btn2}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm transition"
          >
            <Github size={16} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
