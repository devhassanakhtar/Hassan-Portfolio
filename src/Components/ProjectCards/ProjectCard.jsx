import React from "react";
import "./ProjectCard.css";
import ProjectCard1 from "./ProjectCard1/ProjectCard1";
import Project1 from "../../assets/Project1.webp";
import Project2 from "../../assets/Project2.webp";
import Project3 from "../../assets/Project3.webp";
import Project4 from "../../assets/Project4.webp";

const ProjectCard = (prop) => {

    const projectCard = [
        {
            ProductImage : Project1,
            PrductHeading : 'Wizard Landing Page',
            ProductDescription : '2025 November'
        },
        {
            ProductImage : Project2,
            PrductHeading : 'Edusity Landing Page',
            ProductDescription : '2025 December'
        },
        {
            ProductImage : Project3,
            PrductHeading : 'Tilia Wedding Page',
            ProductDescription : '2026 January'
        },
        {
            ProductImage : Project4,
            PrductHeading : 'Xian Gallers Portfolio',
            ProductDescription : '2024 November'
        }
    ]

  return (
    <div className="Project__Card">
      <div className="Project__Heading">
        <h2>My Projects</h2>
        <span>See All</span>
      </div>
      <div className="Project__Section">
        {projectCard.map(function(elem){
            return <ProjectCard1 heading={elem.PrductHeading} image={elem.ProductImage} des={elem.ProductDescription}/>
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
