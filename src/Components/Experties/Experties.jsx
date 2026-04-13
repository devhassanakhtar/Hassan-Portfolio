import React from "react";
import "./Experties.css";
import Figma from "../../assets/figma.png";
import Framer from "../../assets/framer.png";
import Webflow from "../../assets/Webflow.png";
import Zeplin from "../../assets/Zeplin.png";
import Miro from "../../assets/Miro.png";
import Notion from "../../assets/Notion.png";

const Experties = () => {
  return (
    <div className="Experties__Section">
      <h2>My Expert Area</h2>
      <div className="flex justify-between">
        <div className="Experties__Area">
          <div className="Experties">
            <img src={Figma} alt="" className="Figma__img" />

            <p>Figma</p>
          </div>

          <div className="Experties">
            <img src={Webflow} alt="" className="Webflow__img" />
            <p>Webflow</p>
          </div>

          <div className="Experties">
            <img src={Miro} alt="" className="Webflow__img" />
            <p>Miro</p>
          </div>
        </div>

        <div className="Experties__Area">
          <div className="Experties">
            <img src={Framer} alt="" className="Figma__img" />

            <p>Framer</p>
          </div>

          <div className="Experties">
            <img src={Zeplin} alt="" className="Webflow__img" />
            <p>Zeplin</p>
          </div>

          <div className="Experties">
            <img src={Notion} alt="" className="Webflow__img" />
            <p>Notion</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experties;
