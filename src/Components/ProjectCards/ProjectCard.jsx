import React from "react";
import "./ProjectCard.css";
import ProjectCard1 from "./ProjectCard1/ProjectCard1";
import Product1 from "../../assets/product1.png";
import Product2 from "../../assets/product2.png";
import Product3 from "../../assets/product3.png";
import Product4 from "../../assets/product4.webp";

const ProjectCard = (prop) => {

    const projectCard = [
        {
            ProductImage : Product1,
            PrductHeading : 'Sass Product Design',
            ProductDescription : '2022 July'
        },
        {
            ProductImage : Product2,
            PrductHeading : 'Mobile App UI Design',
            ProductDescription : '2023 July'
        },
        {
            ProductImage : Product3,
            PrductHeading : 'Marketing Website Design',
            ProductDescription : '2022 October'
        },
        {
            ProductImage : Product4,
            PrductHeading : 'Creative Branding Design',
            ProductDescription : '2024 January'
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
