import React from "react";
import "./TopAboutSection.css";
import AboutImg from "../../../assets/Aboutimage.png";
import AchievementsCard from "./AchievementsCard/Achievements";
import WorkExperience from "../../WorkExperience/WorkExperience";
import Experties from "../../Experties/Experties";
import { PiUsersThree } from "react-icons/pi";
import { TbMessage2Heart } from "react-icons/tb";
import { RiUserStarLine } from "react-icons/ri";

const TopAboutSection = () => {
  const Achivements = [
    {
      id: 1,
      icon: <PiUsersThree />,
      title: "40+",
      description: "Projects Completed",
    },
    {
      id: 2,
      icon: <TbMessage2Heart />,
      title: "15+",
      description: "Client Testimonials",
    },
    {
      id: 3,
      icon: <RiUserStarLine />,
      title: "12+",
      description: "Years Experiences",
    },
  ];

  return (
    <div className="About___Section">
      <div className="Top__Section">
        <span className="About__img">
          <img src={AboutImg} alt="" />
        </span>
        <h1>
          Hey, i'm <span className="Name">Hassan Akhtar</span> <br />
          FrontEnd web developer!
        </h1>
        <p>
          As a creative developer, I blend code and design to build unique,
          user-centric experiences. Let’s turn your ideas into a dynamic &
          engaging digital reality!
        </p>

        <div className="Achievements__Card">
          {Achivements.map(function (elem) {
            return (
              <AchievementsCard
                key={elem.id}
                icon={elem.icon}
                title={elem.title}
                description={elem.description}
              />
            );
          })}
        </div>
      </div>

      <div className="work-experience-wrapper">
        <WorkExperience />
        <Experties />
      </div>

      <div className="About__Testimonials">
        <h2>What Clients Say!</h2>
        
      </div>
    </div>
  );
};

export default TopAboutSection;
