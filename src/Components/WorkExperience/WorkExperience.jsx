import React from "react";
import "./WorkExperience.css";
import Google from "../../assets/google.png";
import Behance from "../../assets/behance.png";
import Notion from "../../assets/Notion.png";

const WorkExperience = () => {
  return (
    <div className="Work__Section">
      <h2>Work Experience</h2>

      <div className="Work__Area">
        <div className="Work__Shadow">
          <div className="Work__Company">
            <img src={Google} alt="" />
            <div className="Company__info">
              <h3>Google</h3>
              <p>Product Designer</p>
            </div>
          </div>
          <div className="Work__info">
            <p>2016-2020</p>
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
