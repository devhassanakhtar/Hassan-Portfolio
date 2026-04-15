import React from "react";
import "./Experties.css";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JavaScript from "../../assets/js.png";
import Twailwind from "../../assets/tailwind.png";
import Wordpress from "../../assets/WordPress.png";
import Bootstrap from "../../assets/bootstrap.png";
import Reacticon from "../../assets/react.png";
import Redux from "../../assets/redux.png";
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
            <img src={HTML} alt="" className="HTML__img" />
            <p>HTML</p>
          </div>

          <div className="Experties">
            <img src={JavaScript} alt="" className="Webflow__img" />
            <p>JavaScript</p>
          </div>

          <div className="Experties">
            <img src={Wordpress} alt="" />
            <p>Wordpress</p>
          </div>

          <div className="Experties">
            <img src={Reacticon} alt="" className="Bootstrap" />
            <p>Reacticon</p>
          </div>
        </div>

        <div className="Experties__Area">
          <div className="Experties">
            <img src={CSS} alt="" className="Figma__img" />

            <p>CSS</p>
          </div>

          <div className="Experties">
            <img src={Twailwind} alt="" className="Twailwind" />
            <p>Twailwind</p>
          </div>

          <div className="Experties">
            <img src={Bootstrap} alt="" className="Bootstrap" />
            <p>Bootstrap</p>
          </div>

          <div className="Experties">
            <img src={Redux} alt="" className="Bootstrap" />
            <p>Redux</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experties;
