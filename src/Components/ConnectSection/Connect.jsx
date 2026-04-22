import React from "react";
import "./Connect.css";
import { NavLink } from "react-router";

const Connect = () => {
  return (
    <div className="Connect">
      <h1>
        Collaborate, 👋 <br />
      </h1>
      <h1>create amazing things together!</h1>
      <p>
        Ready to elevate 🚀 your brand? I specialize in creating stunning 🎨
        digital experiences that 🎨 captivate and engage. Let’s bring 🚀 your
        vision to life!
      </p>

      <button>
        <NavLink to="/contact"> Let's Talk</NavLink>
      </button>
    </div>
  );
};

export default Connect;
