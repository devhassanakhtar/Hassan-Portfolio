import React from "react";
import "./ContactSection.css";
import { useState } from "react";

const ContactSection = () => {
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
            <form onSubmit={handleSubmit}>
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
                name="country"
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
                rows={5}
                value={message}
                onChange={handleMessage}
              ></textarea>
              {errors.message && <p className="error">{errors.message}</p>}

              <button type="submit" className="Form__Btn">Send Message</button>
            </form>
          </div>

          <div className="Location">
            <h1>Location</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
