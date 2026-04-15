import React from "react";
import "./ContactCard.css";
import { NavLink } from "react-router";

const ContactCard = () => {
  return (
    <div className="Contact__Card">
      <h1>
        Let's 👋 <br /> Work Together
      </h1>
      <p>
        Available for Hire 🚀 | Crafting Digital Experiences 🎨 | Frontend
        Developer Focused on Clean & Responsive Design
      </p>
      <button className="contact__btn">
        <NavLink to="/contact">Let's Talk</NavLink>
      </button>
    </div>
  );
};

export default ContactCard;
