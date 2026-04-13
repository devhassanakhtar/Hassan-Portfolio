import React from "react";
import "./ProjectCard1.css";
import { IoIosArrowRoundDown } from "react-icons/io";
import { NavLink } from "react-router";


const ProjectCard1 = (props) => {
  return (
    <div className="Card1">
      <div className="Shadow">
        <img src={props.image} alt="" />
        <div className="Card__info">
          <div>
            <h3>{props.heading}</h3>
            <p>{props.des}</p>
          </div>
          <span>
            <NavLink to='/'> <IoIosArrowRoundDown className="icon" /> </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard1;
