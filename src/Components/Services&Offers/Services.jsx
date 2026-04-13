import React from "react";
import "./Services.css";
import { FiLayers } from "react-icons/fi";
import { CiMobile3 } from "react-icons/ci";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsBoxSeam } from "react-icons/bs";
import { CiMicrochip } from "react-icons/ci";
import { MdOutlineDesktopWindows } from "react-icons/md";

const Services = () => {
  return (
    <div className="Services__Section">
      <div className="Project__Heading">
        <h2>Services | Offers</h2>
        <span>See All</span>
      </div>

      <div className="Services">
        <div className="Services__Info">
          <div className="shadow">
            <FiLayers className="icon" />
            <h3>UI/UX Design</h3>
          </div>
        </div>

        <div className="Services__Info">
          <div className="shadow">
            <CiMobile3 className="icon" />
            <h3>Mobile App</h3>
          </div>
        </div>

        <div className="Services__Info">
          <div className="shadow">
            <LuLayoutDashboard className="icon" />
            <h3>Dashboard Design</h3>
          </div>
        </div>

        <div className="Services__Info">
          <div className="shadow">
            <BsBoxSeam className="icon" />
            <h3>Branding</h3>
          </div>
        </div>

        <div className="Services__Info">
          <div className="shadow">
            <CiMicrochip className="icon" />
            <h3>Front End</h3>
          </div>
        </div>

        <div className="Services__Info">
          <div className="shadow">
            <MdOutlineDesktopWindows className="icon" />
            <h3>Webflow Dev</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
