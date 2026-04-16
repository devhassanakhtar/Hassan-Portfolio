import React from "react";
import "./ProfileCard.css";
import ProfileImage from "../../assets/hassan.webp";
import { LuPhoneCall } from "react-icons/lu";
import { LiaTelegramPlane } from "react-icons/lia";
import { TbBrandFiverr } from "react-icons/tb";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { NavLink } from "react-router";

const ProfileCard = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/03085409842", "_blank");
  };

  return (
    <div className="Card">
      <img src={ProfileImage} alt="" />

      <h1 className="Username">
        Hassan <br /> Akhtar 👋
      </h1>

      <p>
        I'm a passionate Frontend Developer 🖥️ with 1 year of experience, and
        I’m continuously learning to improve my skills.
      </p>

      <div className="profile__btn">
        <button className="book__a__call" onClick={handleWhatsApp}>
          <span className="icon">
            <LuPhoneCall />
          </span>
          Book a call
        </button>
        <NavLink to="/contact">
          <button className="mail__btn">
            <span className="icon">
              <LiaTelegramPlane />
            </span>
            Send Mail
          </button>
        </NavLink>
      </div>

      <div className="social__links">
        <div className="link__text">Follow Me</div>
        <div className="social__icons">
          <span className="icon">
            <a
              href="https://github.com/devhassanakhtar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://www.fiverr.com/hawebtech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandFiverr />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://linkedin.com/in/devhassanakhtar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
