import React from "react";
import "./Project.css";
import ProjectImg from "../../assets/ProjectImage1.webp";
import { IoArrowRedoCircle } from "react-icons/io5";
import Connect from "../ConnectSection/Connect";


const Project = () => {
  return (
    <div className="Project__Section__Container">
      <h1>Xian Gallers Portfolio</h1>
      <img src={ProjectImg} alt="" />
      <h1 className="des">Project Description</h1>
      <h3>
        This is a modern and responsive personal portfolio website designed to
        showcase a developer’s skills, projects, and services in a visually
        engaging way. The layout focuses on clean UI, smooth user experience,
        and structured content presentation. The website includes sections like
        featured projects, services offered, work experience, and a contact
        form, making it easy for visitors or potential clients to understand the
        developer’s capabilities and get in touch. The design follows a dark
        theme with strong visual hierarchy, modern card layouts, and interactive
        elements to enhance user engagement.
      </h3>

      <h1 className="des">Languages Used</h1>

      <div className="Language__used">
        <div className="language">
          <span>
            <IoArrowRedoCircle size={20} />
            <h2>HTML</h2>
          </span>
        </div>
        <div className="language">
          <span>
            <IoArrowRedoCircle size={20} />
            <h2>CSS</h2>
          </span>
        </div>
        <div className="language">
          <span>
            <IoArrowRedoCircle size={20} />
            <h2>JavaScript</h2>
          </span>
        </div>
      </div>

      <Connect />

    </div>
  );
};

export default Project;
