import { useRef } from "react";
import "./TopAboutSection.css";
import AboutImg from "../../../assets/Aboutimage.png";
import AchievementsCard from "./AchievementsCard/Achievements";
import WorkExperience from "../../WorkExperience/WorkExperience";
import Experties from "../../Experties/Experties";
import Testimonials from "./TestimonialsCard/Testimonials";
import { LiaClipboardListSolid } from "react-icons/lia";
import { TbMessage2Heart } from "react-icons/tb";
import { RiUserStarLine } from "react-icons/ri";
import Jessica from "../../../assets/Jessica.png";
import Ethan from "../../../assets/Ethan.png";
import Zonathon from "../../../assets/Zonathan.png";
import Connect from "../../ConnectSection/Connect";

const TopAboutSection = () => {
  const Achivements = [
    {
      id: 1,
      icon: <LiaClipboardListSolid />,
      title: "10+",
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
      title: "1+",
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
      image: Ethan,
      quote:
        "Planners help people understand how to manage their money and where to invest it properly. They make financial planning easy and clear. They show how to use money in the most useful way.",
      name: "Ethan Brooks",
      profession: "Product Designer",
    },
    {
      id: 3,
      image: Zonathon,
      quote:
        "Financial planners help people to knowledge in about how to invest and in save their moneye the most efficient way eve plan ners help people tioniio know ledige in about how.",
      name: "Zonathon Doe",
      profession: "Product Designer",
    },
    // {
    //   id: 4,
    //   image: Jessica,
    //   quote:
    //     "Financial planners help individuals make smart decisions about saving and investing money to achieve financial goals in the most effective and efficient way possible.",
    //   name: "Jesicca Martin",
    //   profession: "UI/UX Designer",
    // },
    // {
    //   id: 5,
    //   image: Jessica,
    //   quote:
    //     "Financial planners help individuals make smart decisions about saving and investing money to achieve financial goals in the most effective and efficient way possible.",
    //   name: "Jesicca Martin",
    //   profession: "UI/UX Designer",
    // },
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
          I am a passionate Frontend Developer focused on building modern, responsive, and user-friendly web applications. I enjoy turning ideas into clean and visually appealing interfaces that provide a great user experience. I have strong skills in HTML, CSS, JavaScript, and React, with experience in creating responsive designs across different devices. I focus on performance, usability, and continuous learning to improve my development skills. My goal is to build efficient and scalable frontend solutions that enhance user engagement and contribute to overall product success.
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
      </div>
      <div className="Connect__Section">
        <Connect />
      </div>
    </div>
  );
};

export default TopAboutSection;
