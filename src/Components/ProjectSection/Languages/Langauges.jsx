import React, { useContext } from "react";
import "./Languages.css";
import { IoArrowRedoCircle } from "react-icons/io5";
import { ProjectContext } from "../../Context/ProjectContext";

const Languages = () => {
  const project = useContext(ProjectContext);

  if (!project) return null;

  return (
    <>
      <h1 className="des">Languages Used</h1>

      <h2 className="heading">This project was built using:</h2>

      <div className="Language__used">
        {project.Language1 && (
          <div className="language">
            <span>
              <IoArrowRedoCircle size={20} />
              <h2>{project.Language1}</h2>
            </span>
          </div>
        )}

        {project.Language2 && (
          <div className="language">
            <span>
              <IoArrowRedoCircle size={20} />
              <h2>{project.Language2}</h2>
            </span>
          </div>
        )}

        {project.Language3 && (
          <div className="language">
            <span>
              <IoArrowRedoCircle size={20} />
              <h2>{project.Language3}</h2>
            </span>
          </div>
        )}

        {project.Language4 && (
          <div className="language">
            <span>
              <IoArrowRedoCircle size={20} />
              <h2>{project.Language4}</h2>
            </span>
          </div>
        )}

        {project.Language5 && (
          <div className="language">
            <span>
              <IoArrowRedoCircle size={20} />
              <h2>{project.Language5}</h2>
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Languages;