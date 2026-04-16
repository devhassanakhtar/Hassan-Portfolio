import React from "react";
import "./ContactSection.css";
import { useState, useRef } from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { RiUserLocationFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_z44dewi', 'template_3rd9add', form.current, {
        publicKey: "5LsB2o7ADd8-gUTND",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
  };

  const [username, setUserName] = useState("");

  const handleName = (e) => {
    setUserName(e.target.value);

    setErrors((prev) => ({
      ...prev,
      name: "",
    }));
  };

  const [tel, setTel] = useState("");

  const handleTel = (e) => {
    setTel(e.target.value);
    // console.log(e.target.value);
  };

  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    // console.log(e.target.value);
  };

  const [select, setSelect] = useState("");

  const handleSelect = (e) => {
    setSelect(e.target.value);
    // console.log(e.target.value);
  };

  const [message, setMessage] = useState("");

  const handleMessage = (e) => {
    setMessage(e.target.value);
    // console.log(e.target.value);
  };

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!username.trim()) {
      newErrors.username = "Name is required";
    }

    if (!tel.trim()) {
      newErrors.tel = "Phone number is required";
    } else if (!/^[0-9]{10,15}$/.test(tel)) {
      newErrors.tel = "Enter valid phone number";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter valid email";
    }

    if (!select) {
      newErrors.select = "Please select a service";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form Submitted ✅");

      // yahan API call / email send kar sakte ho
    }
  };

  return (
    <div className="ContactSection__Container">
      <div className="ContactSection">
        <h1>Contact with Me</h1>
        <div className="Form__Section">
          <div className="Form">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={username}
                onChange={handleName}
                className={`input ${errors.username ? "input-error" : ""}`}
              />
              {errors.username && <p className="error">{errors.username}</p>}
              <input
                type="tel"
                name="tel"
                placeholder="Your Phone Number"
                value={tel}
                onChange={handleTel}
                className={`input ${errors.tel ? "input-error" : ""}`}
              />
              {errors.tel && <p className="error">{errors.tel}</p>}
              <input
                type="email"
                name="email"
                id=""
                placeholder="Your Email"
                value={email}
                onChange={handleEmail}
                className={`input ${errors.email ? "input-error" : ""}`}
              />
              {errors.email && <p className="error">{errors.email}</p>}
              <select
                name="Service"
                id=""
                className={`input ${errors.email ? "input-error" : ""}`}
                value={select}
                onChange={handleSelect}
              >
                <option value="Wordpress Website">Wordpress Website</option>
                <option value="React Website">React Website</option>
                <option value="E-Commerce Website">E-Commerce Website</option>
                <option value="Marketing Website Design">
                  Marketing Website Design
                </option>
              </select>
              {errors.select && <p className="error">{errors.select}</p>}
              <textarea
                name="message"
                id=""
                placeholder="Your Message"
                className={`input ${errors.message ? "input-error" : ""}`}
                rows={4}
                value={message}
                onChange={handleMessage}
              ></textarea>
              {errors.message && <p className="error">{errors.message}</p>}

              <button type="submit" className="Form__Btn">
                Send Message
              </button>
            </form>
          </div>

          <div className="Location">
            <div className="phone">
              <span>
                <FaPhone size={25} />
              </span>
              <div className="phone__info">
                <h3>Phone</h3>
                <p>+1 (888) 456 7852</p>
              </div>
            </div>

            <div className="email">
              <span>
                <MdEmail size={25} />
              </span>
              <div className="email__info">
                <h3>email</h3>
                <p>info@advisium.com</p>
              </div>
            </div>

            <div className="navigation">
              <span>
                <IoLocationSharp size={25} />
              </span>
              <div className="navigation__info">
                <h3>Location</h3>
                <p>123 Main Street, City, Country</p>
              </div>
            </div>

            <div className="Assistance">
              <span>
                <RiUserLocationFill size={25} />
              </span>
              <div className="Assistance__info">
                <h3>Assistance Hours</h3>
                <p>Sun - Fri: 9am - 6pm </p>
                <p>Mon - Fri: 9am - 6pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5893.731297041149!2d73.16650442737891!3d33.5707271633418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf49c71bac3b%3A0x440c38883a64cd51!2sThe%20Monal%20Islamabad!5e1!3m2!1sen!2s!4v1776235321005!5m2!1sen!2s"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;
