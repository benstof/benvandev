import React from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className="text-yellow-600 bg-yellow-300 body-font">
     
      <Navbar />
      <About />
      <Projects />
      <Skills />
     
      <Contact />
    
    </main>
  )
}
