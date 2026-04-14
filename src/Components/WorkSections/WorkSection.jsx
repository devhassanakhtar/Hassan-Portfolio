import React from 'react'
import "./WorkSection.css"
import ProjectCard from '../ProjectCards/ProjectCard'


const WorkSection = () => {
  return (
    <div className="WorkSection__Container">
      <div className='WorkSection__Header'>
        <h1>My Projects</h1>
        <ProjectCard />
      </div>
    </div>
  )
}

export default WorkSection
