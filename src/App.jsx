import React from "react";
import { Routes, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

// Layout and Pages
import Layout from "./Layout.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Project from "./Pages/Project.jsx";
import Contact from "./Pages/Contact.jsx";
import NotFind from "./Pages/NotFind.jsx";

const App = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color="14, 152, 186"
        outerAlpha={0.3}
        innerScale={1}
        outerScale={2}
        clickables={["a", "button", "input", "textarea", "select", ".link"]}
      />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFind />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
