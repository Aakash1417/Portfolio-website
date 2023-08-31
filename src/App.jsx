import React from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Experience, Skills, Projects, Contact, Hero, Navbar } from "./pages";
import { BackToTop } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-front-page bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
};

export default App;
