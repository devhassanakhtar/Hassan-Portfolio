import React from "react";
import "./ServicesSection.css";
import { BiSolidLayer } from "react-icons/bi";
import { CiMobile3 } from "react-icons/ci";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsBoxSeam } from "react-icons/bs";
import { CiMicrochip } from "react-icons/ci";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";
import ServicesSectionCard from "./ServicesSectionCard/ServicesSectionCard";
import Connect from "../ConnectSection/Connect";

const ServicesSection = () => {
  const ServicesData = [
    {
      id: 1,
      Icon: <BiSolidLayer className="icon" />,
      title: "UI/UX Design",
      description:
        "Seasoned Product Designer with 12 years in UI/UX design across more than 24 countries.",
      rightarrow: <BsArrowRight className="rightarrow" />,
    },
    {
      id: 2,
      Icon: <CiMobile3 className="icon" />,
      title: "WordPress Website",
      description:
        "Expert WordPress Developer with 3+ years of experience",
      rightarrow: <BsArrowRight className="rightarrow" />,
    },
    {
      id: 3,
      Icon: <LuLayoutDashboard className="icon" />,
      title: "Dashboard Design",
      description:
        "Versatile Product Designer with 12 years of experience across 24 different countries.",
      rightarrow: <BsArrowRight className="rightarrow" />,
    },
    {
      id: 4,
      Icon: <BsBoxSeam className="icon" />,
      title: "Landing Pages",
      description:
        "Landing Page Designer focused on creating high-converting and visually engaging digital experiences.",
      rightarrow: <BsArrowRight className="rightarrow" />,
    },
    {
      id: 5,
      Icon: <CiMicrochip className="icon" />,
      title: "Frond End",
      description:
        "Creative Product Designer with a decade of expertise across 25 countries.",
      rightarrow: <BsArrowRight className="rightarrow" />,
    },
    {
      id: 6,
      Icon: <MdOutlineDesktopWindows className="icon" />,
      title: "Webflow Dev",
      description:
        "Innovative Product Designer boasting 12 years of experience in over 24 nations.",
      rightarrow: <BsArrowRight className="rightarrow" />,
    },
  ];

  return (
    <div className="ServicesSection">
      <h1>Services I Offered</h1>
      <div className="services_Area">
        {ServicesData.map((elem) => {
          return (
            <ServicesSectionCard
              key={elem.id}
              Icon={elem.Icon}
              title={elem.title}
              description={elem.description}
              rightarrow={elem.rightarrow}
            />
          );
        })}
      </div>
        <div className="Connet__Area">
            <Connect />
        </div>
    </div>
  );
};

export default ServicesSection;
