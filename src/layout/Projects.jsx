import React from "react";
import projects from "../data/projects.json";
import HoverEffect from "../components/ui/card-hover-effect";

function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">Projects I've Built.</h2>
      <p className="text-[#a755f7] ">
        Here are some of the projects that I've worked on
      </p>
      <div className="border-b border-neutral-500 border-dashed pb-4">
      </div>
        <div>
          <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export default Projects;
