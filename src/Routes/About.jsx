import React from 'react'
import MainCard from '../Components/MainCard/MainCard'
import TopAboutSection from '../Components/AboutSections/AboutRightCol/TopAboutSection'
import WorkExperience from '../Components/WorkExperience/WorkExperience'

const About = () => {
  return (
    <div className='md:flex md:flex-rowflex-col md:justify-between flex-wrap'>
      <MainCard />
      <TopAboutSection />
    </div>
  )
}

export default About