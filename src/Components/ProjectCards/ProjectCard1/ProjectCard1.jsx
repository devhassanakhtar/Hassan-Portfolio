import React from "react";
import "./ProjectCard1.css";
import { IoIosArrowRoundDown } from "react-icons/io";
import { Link } from "react-router-dom";

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
              <Link to="/project">
                <IoIosArrowRoundDown className="icon" />
              </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard1;
