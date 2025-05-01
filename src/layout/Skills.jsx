import React from "react";
import html from "/assets/html.png";
import bootstrap from "/assets/bootstrap.png";
import css from "/assets/css.png";
import js from "/assets/js.png";
import mongo from "/assets/mongo.png";
import next from "/assets/next.png";
import react from "/assets/react.png";
import supabase from "/assets/supabase.png";
import tailwind from "/assets/tailwind.png";
function Skills() {
  return (
    <div>
      <div className="wrapper">
        <div className="item item1  rounded-full border border-neutral-700">
          <div className="tech flex items-center align-center gap-2 ">
            <img src={html} className="w-9" />
            <span>HTML</span>
          </div>
        </div>
        <div className="item item2 rounded-full border border-neutral-700 ">
          <div className="tech flex items-center align-center gap-2 ">
            <img src={bootstrap} className="w-9" />
            <span>Bootstrap</span>
          </div>
        </div>
        <div className="item item3 rounded-full border border-neutral-700">
          <div className="tech flex items-center align-center gap-2 ">
            <img src={css} className="w-9" />
            <span>CSS</span>
          </div>
        </div>
        <div className="item item4 rounded-full border border-neutral-700">
          <div className="tech flex items-center align-center gap-2 ">
            <img src={js} className="w-9" />
            <span>Javascript</span>
          </div>
        </div>
        <div className="item item5 rounded-full border border-neutral-700">
          <div className="tech flex items-center align-center gap-2 ">
            <img src={mongo} className="w-9" />
            <span>MongoDB</span>
          </div>
        </div>
        <div className="item item6 rounded-full border border-neutral-700">
          <div className="tech flex items-center align-center gap-2 ">
            <img src={next} className="w-9" />
            <span>NextJS</span>
          </div>
        </div>
        <div className="item item7 rounded-full border border-neutral-700">
          <div className="tech flex items-center align-center gap-2">
            <img src={react} className="w-9" />
            <span>ReactJS</span>
          </div>
        </div>
        <div className="item item8 rounded-full border border-neutral-700">
          <div className="tech flex items-center align-center gap-2 ">
            <img src={supabase} className="w-9" />
            <span>Supabase</span>
          </div>
        </div>
        <div className="item item9 rounded-full border border-neutral-700">
          <div className="tech flex items-center align-center gap-2 ">
            <img src={tailwind} className="w-9" />
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
