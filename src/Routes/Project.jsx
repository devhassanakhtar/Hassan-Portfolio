import React from 'react'
import ProjectSection from '../Components/ProjectSection/Project'
import MainCard from '../Components/MainCard/MainCard'

const Project = () => {
  return (
     <div className="md:flex md:flex-rowflex-col md:justify-between flex-wrap">
        <MainCard />
      <ProjectSection />
    </div>
  )
}

export default Project
