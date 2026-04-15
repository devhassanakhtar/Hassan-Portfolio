import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiServer } from "react-icons/ci";
import { FiLayers } from "react-icons/fi";
import { GiNotebook } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navabar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setOpenMenu(false);
  }, [location]);

  return (
    <nav>
      <div className="nav__top">
        <Link to="/" className="title">
          <span className="title__color">Has</span>san
        </Link>

        <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? <IoClose /> : <RxHamburgerMenu />}
        </div>
      </div>

      <ul className={openMenu ? "open" : ""}>
        <li>
          <NavLink to="/">
            <span className="icon__shadow">
              <span className="icon__wrapper">
                <IoHomeOutline />
              </span>
            </span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <span className="icon__shadow">
              <span className="icon__wrapper">
                <FaRegUser />
              </span>
            </span>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services">
            <span className="icon__shadow">
              <span className="icon__wrapper">
                <CiServer />
              </span>
            </span>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/work">
            <span className="icon__shadow">
              <span className="icon__wrapper">
                <FiLayers />
              </span>
            </span>
            Work
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/blog">
            <span className="icon__shadow">
              <span className="icon__wrapper">
                <GiNotebook />
              </span>
            </span>
            Blog
          </NavLink>
        </li> */}
        <li className="contact">
          <NavLink to="/contact">
            <span className="icon__shadow">
              <span className="icon__wrapper">
                <FiLayers />
              </span>
            </span>
            Let's Talk
          </NavLink>
        </li>
      </ul>

      <button className="hero__btn">
        <NavLink to="/contact">Let's Talk</NavLink>
      </button>
    </nav>
  );
};

export default Navabar;
