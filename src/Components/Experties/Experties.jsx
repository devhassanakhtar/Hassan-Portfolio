import React from "react";
import "./Experties.css";
import HTML from "../../assets/html.webp";
import CSS from "../../assets/css.webp";
import JavaScript from "../../assets/js.webp";
import Twailwind from "../../assets/tailwind.webp";
import Wordpress from "../../assets/WordPress.webp";
import Bootstrap from "../../assets/bootstrap.webp";
import Reacticon from "../../assets/react.webp";
import Redux from "../../assets/redux.webp";


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
