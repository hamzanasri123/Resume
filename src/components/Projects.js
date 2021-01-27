import React, { useState } from "react";
import data_projects from "./data/projects-data";
import ProjectCard from "./ProjectCard";
function Projects() {
  const [project, setProjects] = useState(data_projects);

  const hundelFilter = (name) => {
    const newarr = data_projects.filter((project) =>
      project.category.includes(name))
  
  };

  return (
    <div className="container projects">
      <div className="project-navbar">
        <div onClick={() => setProjects(data_projects)}>All</div>
        <div onClick={hundelFilter("reactjs")}>reactjs</div>
        <div onClick={hundelFilter("javascript")}>javascript</div>
        <div onClick={hundelFilter("redux")}>Redux </div>
        <div onClick={hundelFilter("mySql")}>MySql</div>
      </div>
      <div className="row">
        {project.map((project) => 
          <ProjectCard key={project.name} projects={project} />
        )}
      </div>
    </div>
  );
}

export default Projects;
