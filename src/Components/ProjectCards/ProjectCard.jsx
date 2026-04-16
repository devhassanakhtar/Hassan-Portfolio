import React from "react";
import "./ProjectCard.css";
import ProjectCard1 from "./ProjectCard1/ProjectCard1";
import Project1 from "../../assets/Project1.webp";
import Project2 from "../../assets/Project2.webp";
import Project3 from "../../assets/Project3.webp";
import Project4 from "../../assets/Project4.webp";
import Project5 from "../../assets/Project5.webp";
import Project6 from "../../assets/Project6.webp";
import Project7 from "../../assets/Project7.webp";
import Project8 from "../../assets/Project8.webp";
import Project9 from "../../assets/Project9.webp";
import Project10 from "../../assets/Project10.webp";
import Project11 from "../../assets/Project11.webp";
import Project12 from "../../assets/Project12.webp";
import Project13 from "../../assets/Project13.webp";
import { NavLink } from "react-router-dom";

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
      PrductHeading: "Add To Cart",
      ProductDescription: "2026 February",
    },
    {
      id: 6,
      ProductImage: Project6,
      PrductHeading: "Age Calculator",
      ProductDescription: "2026 March",
    },
    {
      id: 7,
      ProductImage: Project7,
      PrductHeading: "To-Do-List",
      ProductDescription: "2026 March",
    },
    {
      id: 8,
      ProductImage: Project8,
      PrductHeading: "Calculator",
      ProductDescription: "2025 December",
    },
    {
      id: 9,
      ProductImage: Project9,
      PrductHeading: "Currency Converter",
      ProductDescription: "2025 December",
    },
    {
      id: 10,
      ProductImage: Project10,
      PrductHeading: "Login & Registration Form",
      ProductDescription: "2025 December",
    },
    {
      id: 11,
      ProductImage: Project11,
      PrductHeading: "Password Generator",
      ProductDescription: "2025 December",
    },
    {
      id: 12,
      ProductImage: Project12,
      PrductHeading: "Rock Paper Scissor",
      ProductDescription: "2025 December",
    },
    {
      id: 13,
      ProductImage: Project13,
      PrductHeading: "Tic Tac Toe",
      ProductDescription: "2025 December",
    }
  ];

  const displayedProjects = props.limit
    ? projectCard.slice(0, props.limit)
    : projectCard;

  return (
    <div className="Project__Card">
      <div className="Project__Heading">
        <h2>My Projects</h2>
        <span><NavLink to="/work"> See All</NavLink></span>
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
