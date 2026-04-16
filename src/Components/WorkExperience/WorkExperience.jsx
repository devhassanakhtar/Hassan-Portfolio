import React from "react";
import "./WorkExperience.css";
import Peham from "../../assets/Peham.webp";
import Pakipreneurs from "../../assets/pakipreneurs.webp";
import Fiverr from "../../assets/fiver.webp";

const WorkExperience = ({ widthClass = "w-full" }) => {
  return (
    <div className={`Work__Section ${widthClass}`}>
      <h2>Work Experience</h2>

      <div className="Work__Area">
        <div className="Work__Shadow">
          <div className="Work__Company">
            <img src={Peham} alt="" />
            <div className="Company__info">
              <h3>Peham</h3>
              <p>As an Internship</p>
            </div>
          </div>
          <div className="Work__info">
            <p>2025-continue</p>
          </div>
        </div>
      </div>

      <div className="Work__Area">
        <div className="Work__Shadow">
          <div className="Work__Company">
            <img src={Fiverr} alt="" />
            <div className="Company__info">
              <h3>Fiverr</h3>
              <p>Frontend Web Developer</p>
            </div>
          </div>
          <div className="Work__info">
            <p>2024-continue</p>
          </div>
        </div>
      </div>

      <div className="Work__Area">
        <div className="Work__Shadow">
          <div className="Work__Company">
            <img src={Pakipreneurs} alt="" />
            <div className="Company__info">
              <h3>Pakipreneurs</h3>
              <p>As an Internship</p>
            </div>
          </div>
          <div className="Work__info">
            <p>2025-2026</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
