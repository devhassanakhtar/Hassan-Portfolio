import React from "react";
import "./Services.css";
import { BiSolidLayer } from "react-icons/bi";
import { CiMobile3 } from "react-icons/ci";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsBoxSeam } from "react-icons/bs";
import { CiMicrochip } from "react-icons/ci";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { NavLink } from "react-router";

const Services = () => {
  return (
    <div className="Services__Section">
      <div className="Project__Heading">
        <h2>Services | Offers</h2>
        <span><NavLink to="services"> See All </NavLink></span>
      </div>

      <div className="Services">
        <div className="Services__Info">
          <div className="shadow">
            <BiSolidLayer className="icon" />
            <h3>UI/UX Design</h3>
          </div>
        </div>

        <div className="Services__Info">
          <div className="shadow">
            <CiMobile3 className="icon" />
            <h3>WordPress Website</h3>
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
            <h3>Landing Pages</h3>
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
