import React from "react";
import api from "../assets/icons/api.svg";
import dev from "../assets/icons/dev.svg";
import git from "../assets/icons/github.svg";
import backend from "../assets/icons/backend.svg";
import terminal from "../assets/icons/terminal.svg";
import tools from "../assets/icons/tools.svg"
import Skillcard from "./Skillcard";
function About() {
  const skills = [
    {
      icon: git,
      title: "Version Control",
      about:
        "Version Control software lets you track changes so you can go back to a previous version of your work and find out what went wrong without trearing the whole thing down ",
    },
    {
      icon: api,
      title: "COMMAND LINE",
      about:
        "there will be times you'll need to open a terminal on your computer and typed commands in the command line",
    },
    {
      icon: tools,
      title: "BUILDING AND AUTOMATION TOOLS/WEB PERFORMANCE",
      about:
        "Programs like Grunt and Gulp can be used to automate image optimization , CSS and JS minifying , and other web performance chores to make your sites faster ",
    },
    {
      icon: terminal,
      title: "BROWSER DEVELOPER TOOLS",
      about:
        "Browser developer tools generally consist of an inspector (so you can see the HTML and CSS of a site) and JavaScript console",
    },
    {
      icon: backend,
      title: "TESTING/DEBUGGING",
      about:
        "Bugs are a reality of the development process , so in order to keep things moving you'll need to test your code for bugs along the way  ",
    },
    {
      icon: dev,
      title: "RESPONSIVE DESIGN",
      about:
        "Responsive design allows webpages to adjust themselves to the device you're using without you doing anything on your end  ",
    },
  ];
  return (
    <div className="about">
      <h6 className="about-inner">
        I am a Web Developer with a passion for web application development and
        success in managing development projects using Scrum, Agile, and Lean
        processes. Skilled in conceptualizing, designing, development, and
        deploying software containing logical and mathematical solutions to
        business problems. Dedicated to driving innovation with the ability to
        follow industry and technological trends, and facilitating early
        adoption of innovations.
      </h6>
      <div className="container about-container">
        <h6 className="about-heading">What offer</h6>
        <div className="row">
          {skills.map((el) => (
            <Skillcard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
