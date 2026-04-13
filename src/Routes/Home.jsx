import React from "react";
import ProfileCard from "../Components/ProfileCard/ProfileCard";
import ProjectCard from "../Components/ProjectCards/ProjectCard";
import Services from "../Components/Services&Offers/Services";
import Experties from "../Components/Experties/Experties";
import WorkExperience from "../Components/WorkExperience/WorkExperience";
import ContactCard from "../Components/ContectCard/ContactCard";

const Home = () => {
  return (
    <>
      <div className="md:flex md:justify-between flex-wrap">
        <ProfileCard />
        <ProjectCard />
        <Services />
      </div>
      <div className="md:flex md:justify-between flex-wrap">
        <Experties />
        <WorkExperience />
        <ContactCard />
      </div>
    </>
  );
};

export default Home;
