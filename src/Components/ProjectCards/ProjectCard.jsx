import React from "react";
import "./ProjectCard.css";
import ProjectCard1 from "./ProjectCard1/ProjectCard1";
import Project1 from "../../assets/Project1.webp";
import Project2 from "../../assets/Project2.webp";
import Project3 from "../../assets/Project3.webp";
import Project4 from "../../assets/Project4.webp";
import Project5 from "../../assets/Project5.webp";

const ProjectCard = (props) => {
  const projectCard = [
    {
      id: 1,
      ProductImage: Project1,
      PrductHeading: "Wizard Landing Page",
      ProductDescription: "2025 November",
    },
    {
      id: 2,
      ProductImage: Project2,
      PrductHeading: "Edusity Landing Page",
      ProductDescription: "2025 December",
    },
    {
      id: 3,
      ProductImage: Project3,
      PrductHeading: "Tilia Wedding Page",
      ProductDescription: "2026 January",
    },
    {
      id: 4,
      ProductImage: Project4,
      PrductHeading: "Xian Gallers Portfolio",
      ProductDescription: "2024 November",
    },
    {
      id: 5,
      ProductImage: Project5,
      PrductHeading: "Xian Gallers Portfolio",
      ProductDescription: "2024 November",
    }
  ];

  const displayedProjects = props.limit
  ? projectCard.slice(0, props.limit)
  : projectCard;

  return (
    <div className="Project__Card">
      <div className="Project__Heading">
        <h2>My Projects</h2>
        <span>See All</span>
      </div>
      <div className="Project__Section">
        {displayedProjects.map(function (elem) {
          return (
            <ProjectCard1
              heading={elem.PrductHeading}
              image={elem.ProductImage}
              des={elem.ProductDescription}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
