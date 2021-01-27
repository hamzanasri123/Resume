import React from "react";
import react from "../assets/icons/react.svg";
import Bar from "./Bar";
const languages = [
  {
    name: "React Js",
    level: "60",
  },
  {
    name: "HTML CSS ES6",
    level: "80",
  },
  {
    name: "Java",
    level: "40",
  },
  {
    name: "Asp net",
    level: "60",
  },
];

const tools = [
  {
    name: "git",
    level: "80",
  },
  {
    name: "wordpress",
    level: "60",
  },
  {
    name: "Rest API",
    level: "50",
  },
  {
    name: "Agile",
    level: "60",
  },
];
function Resume() {
  return (
    <div className="container-resume">
      <div className="row">
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card-heading">Education</h4>
          <div className="resume-card-body">
            <h5 className="resume-card-title">Computer Science Engineering</h5>
            <p className="resume-card-name">
              The Height Private school of Engeneering
            </p>
            <h5 className="resume-card-title">Computer Science Engineering</h5>
            <p className="resume-card-name">
              The Height Private school of Engeneering
            </p>
            <h5 className="resume-card-title">Computer Science Engineering</h5>
            <p className="resume-card-name">
              The Height Private school of Engeneering
            </p>
            <p className="resume-card-details">Hamza Nasri</p>
          </div>
        </div>
        <div className="col-lg-6 resume-card">
          <h4 className="resume-card-heading">Experience</h4>
          <div className="resume-card-body">
            <h5 className="resume-card-title">Hamza Nasri</h5>
            <p className="resume-card-name">
              The Private Higher School of Engineering
            </p>
            <h5 className="resume-card-title">Hamza Nasri</h5>
            <p className="resume-card-name">
              The Private Higher School of Engineering
            </p>
            <h5 className="resume-card-title">Hamza Nasri</h5>
            <p className="resume-card-name">
              The Private Higher School of Engineering
            </p>
            <p className="resume-card-details">hamza</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language-heading">Language and Framework</h5>
          <div className="resume-language-body">
            {languages.map((lg) => (
              <Bar value={lg} />
            ))}
          </div>
        </div>
        <div className="col-lg-6 resume-languages">
          <h5 className="resume-language-heading">Softwares and Tools</h5>
          <div className="resume-language-body">
            {tools.map((tl) => (
              <Bar value={tl} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
