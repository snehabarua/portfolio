import "./App.css";
import Navbar from "./layout/Navbar";
import Hero from "./layout/Hero";
import Skills from "./layout/Skills";
import Projects from "./layout/Projects";
import Contact from "./layout/Contact";
import Footer from "./layout/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
    <Toaster/>
      <div className="relative z-10 container">
        <Navbar />
        <div className="md:px-8 lg:px-6">
          <Hero />

          <Skills/>
          <div id="projects">

          <Projects/>
          </div>
          <div id="contact">

          <Contact/>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default App;
