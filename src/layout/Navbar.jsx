import React from "react";
import logo from "/assets/logo.png";
import { useState } from "react";
import { AlignRight } from "lucide-react";
import { X } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav className="nav flex justify-between items-center ">
        <div>
          <img src={logo} alt="Logo" className="w-32" />
        </div>
        <div>
          <ul className="right-nav hidden md:flex gap-8">
            <li className="active">Home</li>
            <li>
              {" "}
              <a href="#projects" onClick={() => setIsOpen(false)}>
                Projects
              </a>{" "}
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="res-nav md:hidden ">
          <button onClick={toggleNav} className="">
            {isOpen ? (
              <X color="#a755f7" size={32} className="cursor-pointer" />
            ) : (
              <AlignRight
                color="#a755f7"
                size={32}
                className="cursor-pointer"
              />
            )}
          </button>
        </div>
      </nav>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out md:hidden ${
          isOpen
            ? "max-h-60 translate-y-0"
            : "max-h-0 -translate-y-2"
        }`}
      >
        <ul className="flex flex-col items-center cursor-pointer text-lg gap-4 ">
          <li>Home</li>
          <li>
            {" "}
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>{" "}
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
