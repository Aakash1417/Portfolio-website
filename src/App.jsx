import React from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Education, Hero, Navbar } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-front-page bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Education />
      </div>
    </BrowserRouter>
  );
};

export default App;
