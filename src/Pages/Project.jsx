import React from "react";
import Card from "../Components/Card";

import microfinance from "/src/assets/microfinace.png";
import auth from "/src/assets/authentication.png";
import TodoApp from "/src/assets/Todo App.png";

const Project = () => {
  return (
    <div className="bg-[#151515] text-white min-h-screen px-4 md:px-10 py-16">
      {/* ===== Header Section ===== */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">
          My Recent <span className="text-[#0e98ba]">Projects</span>
        </h1>
        <p className="text-lg text-gray-300">
          Here are a few of my featured full-stack and frontend projects.
        </p>
        <div className="w-24 h-[3px] bg-[#0e98ba] mx-auto mt-4 rounded-full" />
      </div>

      {/* ===== React Projects Section ===== */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-[#0e98ba] mb-6 text-center">
          React.js Based Applications
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            image={microfinance}
            title="Microfinance App"
            des="A full-stack MERN app for managing microfinance loan applications. Users can calculate loan estimates, register via email, and submit requests with guardian info. Admins can view, filter, and update applications. Includes CNIC checks, validations, and clean UI."
            btn1="https://microfinance-app-frontend-phi.vercel.app/"
            btn2="https://github.com/talhahzahid?tab=repositories"
            btn3="https://microfinance-app-dashboard.vercel.app/"
          />
          <Card
            image={auth}
            title="Authentication"
            des="A secure React + Node.js authentication system with JWT, login/signup, protected routes, and frontend/backend validation for a smooth user experience."
            btn1="https://authentication-frontend-beta.vercel.app/"
            btn2="https://github.com/talhahzahid?tab=repositories"
          />
          <Card
            image={TodoApp}
            title="Todo App"
            des="A simple React-based Todo App for managing daily tasks, with clean UI and responsive design."
            btn1="https://todoapp-theta-five.vercel.app/"
            btn2="https://github.com/talhahzahid/React-Todo-App"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
