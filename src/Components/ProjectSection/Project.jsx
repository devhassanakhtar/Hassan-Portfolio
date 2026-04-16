import React, { useContext } from "react";
import "./Project.css";

import { ProjectContext } from "../Context/ProjectContext";
import Connect from "../ConnectSection/Connect";
import Languages from "./Languages/Langauges";

const ProjectSection = () => {
  const project = useContext(ProjectContext);

  if (!project) return null;

  return (
    <div className="Project__Section__Container">
      <h1>{project.ProjectName}</h1>

      <img src={project.ProjectImage} alt={project.ProjectName} />

      <h1 className="des">Project Description</h1>
      <h3>{project.ProjectDescription}</h3>

      {project.Link && (
        <>
          <h2 className="link">Click Here To Visit 👇</h2>
          <a
            target="_blank"
            rel="noreferrer"
            className="project_link"
            href={project.Link}
          >
            <h4>{project.ProjectName}</h4>
          </a>
        </>
      )}

      <Languages />

      <Connect />
    </div>
  );
};

export default ProjectSection;