import React from "react";
import { useRef } from "react";
import "./TopAboutSection.css";
import AboutImg from "../../../assets/Aboutimage.png";
import AchievementsCard from "./AchievementsCard/Achievements";
import WorkExperience from "../../WorkExperience/WorkExperience";
import Experties from "../../Experties/Experties";
import Testimonials from "./TestimonialsCard/testimonials";
import { PiUsersThree } from "react-icons/pi";
import { TbMessage2Heart } from "react-icons/tb";
import { RiUserStarLine } from "react-icons/ri";
import Jessica from "../../../assets/Jessica.png";

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

  const TestimonialsContent = [
    {
      id: 1,
      image: Jessica,
      quote:
        "Financial planners help individuals make smart decisions about saving and investing money to achieve financial goals in the most effective and efficient way possible.",
      name: "Jesicca Martin",
      profession: "UI/UX Designer",
    },
    {
      id: 2,
      image: Jessica,
      quote:
        "Financial planners help individuals make smart decisions about saving and investing money to achieve financial goals in the most effective and efficient way possible.",
      name: "Jesicca Martin",
      profession: "UI/UX Designer",
    },
    {
      id: 3,
      image: Jessica,
      quote:
        "Financial planners help individuals make smart decisions about saving and investing money to achieve financial goals in the most effective and efficient way possible.",
      name: "Jesicca Martin",
      profession: "UI/UX Designer",
    },
    {
      id: 4,
      image: Jessica,
      quote:
        "Financial planners help individuals make smart decisions about saving and investing money to achieve financial goals in the most effective and efficient way possible.",
      name: "Jesicca Martin",
      profession: "UI/UX Designer",
    },
    {
      id: 5,
      image: Jessica,
      quote:
        "Financial planners help individuals make smart decisions about saving and investing money to achieve financial goals in the most effective and efficient way possible.",
      name: "Jesicca Martin",
      profession: "UI/UX Designer",
    },
  ];

  const sliderRef = useRef(null);

  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    sliderRef.current.classList.add("active");
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // speed control
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

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
        <div
          className="Testimonials"
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {TestimonialsContent.map((elem) => {
            return (
              <Testimonials
                key={elem.id}
                image={elem.image}
                quote={elem.quote}
                name={elem.name}
                profession={elem.profession}
              />
            );
          })}
        </div>
        {/* <Testimonials /> */}
      </div>
    </div>
  );
};

export default TopAboutSection;
