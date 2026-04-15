import React from "react";
import "./WorkExperience.css";
import Peham from "../../assets/Peham.webp";
import Behance from "../../assets/behance.png";
import Notion from "../../assets/Notion.png";

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
            <img src={Behance} alt="" />
            <div className="Company__info">
              <h3>Behance</h3>
              <p>Senior UI UX Designer</p>
            </div>
          </div>
          <div className="Work__info">
            <p>2020-2022</p>
          </div>
        </div>
      </div>

      <div className="Work__Area">
        <div className="Work__Shadow">
          <div className="Work__Company">
            <img src={Notion} alt="" />
            <div className="Company__info">
              <h3>Notion</h3>
              <p>Senior Product Designer</p>
            </div>
          </div>
          <div className="Work__info">
            <p>2022-2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
