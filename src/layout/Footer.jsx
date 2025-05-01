import React from "react";
import linkedin from "/assets/linkedin.png";
import github from "/assets/github.png";

function Footer() {
  return (
    <div className="my-10">
      <div className=" mx-2">
        <div className="left-footer flex mx-2 w-1/2">
          <div className="p-1 bg-neutral-700 rounded-lg linkedin mx-4">
            <a href="https://www.linkedin.com/in/snehabarua/" target="_blank">
              <img src={linkedin} alt="linkedin" className="w-10" />
            </a>
          </div>
          <div className="p-1 bg-neutral-700 rounded-lg github">
            <a href="https://www.github.com/in/snehabarua/" target="_blank">
              <img src={github} alt="github" className="w-10" />
            </a>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
