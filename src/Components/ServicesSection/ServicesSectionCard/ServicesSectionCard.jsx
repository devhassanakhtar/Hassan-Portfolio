import React from "react";
import "./ServicesSectionCard.css";

const ServicesSectionCard = (props) => {
  return (
    <div className="Services_Cards">
      {props.Icon}
      <h2>{props.title}</h2>
      <p>
        {props.description}
      </p>
      {props.rightarrow}
    </div>
  );
};

export default ServicesSectionCard;
