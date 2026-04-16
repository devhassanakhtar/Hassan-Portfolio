import React, { useRef, useState } from "react";
import "./ContactSection.css";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    select: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!formData.select) {
      newErrors.select = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors!");
      return;
    }

    setErrors({});

    emailjs
      .sendForm(
        "service_z44dewi",
        "template_3rd9add",
        form.current,
        {
          publicKey: "5LsB2o7ADd8-gUTND",
        }
      )
      .then(() => {
        toast.success("Message sent successfully!");

      
        setFormData({
          username: "",
          email: "",
          select: "",
          message: "",
        });

     
        form.current.reset();
      })
      .catch((error) => {
        toast.error("Failed to send message!");
        console.log(error);
      });
  };

  return (
    <div className="ContactSection__Container">
      <div className="ContactSection">
        <h1>Contact with Me</h1>

        <div className="Form__Section">
          <div className="Form">
            <form ref={form} onSubmit={handleSubmit}>
              
              <input
                type="text"
                name="username"
                placeholder="Your Name"
                value={formData.username}
                onChange={handleChange}
                className={`input ${errors.username ? "input-error" : ""}`}
              />
              {errors.username && <p className="error">{errors.username}</p>}

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={`input ${errors.email ? "input-error" : ""}`}
              />
              {errors.email && <p className="error">{errors.email}</p>}

              <select
                name="select"
                value={formData.select}
                onChange={handleChange}
                className={`input ${errors.select ? "input-error" : ""}`}
              >
                <option value="">Select Service</option>
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
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`input ${errors.message ? "input-error" : ""}`}
              />
              {errors.message && <p className="error">{errors.message}</p>}

              <button type="submit" className="Form__Btn">
                Send Message
              </button>
            </form>
          </div>

          <div className="Location">
            <div className="phone">
              <FaPhone size={25} />
              <div>
                <h3>Phone</h3>
                <p>+92 308 5409842</p>
              </div>
            </div>

            <div className="email">
              <MdEmail size={25} />
              <div>
                <h3>Email</h3>
                <p>hcodex5@gmail.com</p>
              </div>
            </div>

            <div className="navigation">
              <IoLocationSharp size={25} />
              <div>
                <h3>Location</h3>
                <p>Jinnah Garden Islamabad</p>
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
        ></iframe>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default ContactSection;