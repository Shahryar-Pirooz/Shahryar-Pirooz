import React from "react";
import Techs from "../../imgs/techs.svg";

export default function AboutMe() {
  const textStyle = "text-lg text-body";
  return (
    <div className="flex h-screen w-screen flex-row flex-nowrap items-center">
      <div className="text-center md:mx-5 md:basis-1/2 md:text-start">
        <h3 className="text-3xl font-bold text-head">About Me</h3>
        <p className={textStyle}>
          Throughout my journey as a developer, I have always tried to use my
          maximum potential to learn and practice every day to maintain my
          skills and to develop myself as a person as well.
        </p>
        <p className={textStyle}>
          The major part of my experience involves Android and web development,
          but I am greatly interested in Dev-ops, Linux system administration,
          and cloud computing. I mostly work with Dart, Java, and JavaScript,
          but I also work with Python and PHP.
        </p>
        <p className={textStyle}>
          Besides my tech-driven lifestyle, there is nothing I would love to do
          in my free time more than reading books and essays, listening to
          music, or visiting a gallery or a museum as I believe that art is
          nourishing for your mind and soul.
        </p>
      </div>
      <div className="hidden basis-1/2 items-center justify-center md:flex">
        <img src={Techs} alt="DevTools" />
      </div>
    </div>
  );
}
