import React from "react";
import "./Testimonials.css";
import { useRef } from "react";

const Testimonials = (props) => {
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

  console.log("Testimonials component rendered");
  return (
    <div>
      <div className="Testimonial__Section">
        <img src={props.image} alt="Jessica Martin" />
        <h4>
          Financial planners help individuals make smart decisions about saving
          and investing money to achieve financial goals in the most effective
          and efficient way possible.
        </h4>
        <h3>{props.name}</h3>
        <p>{props.profession}</p>
      </div>
    </div>
  );
};

export default Testimonials;
