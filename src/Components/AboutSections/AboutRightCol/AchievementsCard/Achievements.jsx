import React from "react";
import "./Achievements.css";
import { LiaClipboardListSolid } from "react-icons/lia";

const Achievements = (props) => {
  return (
    <div className="Achievement">
      <span>{props.icon}</span>
      <div className="info">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Achievements;
