import React from "react";
import "./ProfileCard.css";
import ProfileImage from "../../assets/profileimg.avif";
import { LuPhoneCall } from "react-icons/lu";
import { LiaTelegramPlane } from "react-icons/lia";
import { FaFacebookF , FaTwitter , FaInstagramSquare , FaLinkedin } from "react-icons/fa";

const ProfileCard = () => {
  return (
    <div className="Card">
      <img src={ProfileImage} alt="" />

      <h1 className="Username">
        Hassan <br /> Akhtar 👋
      </h1>

      <p>
        I'm a passionate Frontend Developer 🖥️ with 1 year of experience, and I’m continuously learning to improve my skills.
      </p>

      <div className="profile__btn">
        <button className="book__a__call">
          <span className="icon">
            <LuPhoneCall />
          </span>
          Book a call
        </button>
        <button className="mail__btn">
            <span className="icon">
                <LiaTelegramPlane />
            </span>
            Send Mail
        </button>
      </div>

      <div className="social__links">
        <div className="link__text">Follow Me</div>
        <div className="social__icons">
            <span className="icon"><FaFacebookF /> </span>
            <span className="icon"><FaTwitter /></span>
            <span className="icon"><FaInstagramSquare /></span>
            <span className="icon"><FaLinkedin /></span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
