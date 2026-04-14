import React from "react";
import MainCard from "../Components/MainCard/MainCard";
import ServicesSection from "../Components/ServicesSection/ServicesSection";


const Services = () => {
  

  return (
    <div className="md:flex md:flex-rowflex-col md:justify-between flex-wrap">
      <MainCard />
      <ServicesSection />
    </div>
  );
};

export default Services;
