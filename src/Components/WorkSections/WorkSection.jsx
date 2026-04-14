import React from 'react'
import "./WorkSection.css"
import ProjectCard from '../ProjectCards/ProjectCard'
import Connect from '../ConnectSection/Connect'


const WorkSection = () => {
  return (
    <div className="WorkSection__Container">
      <div className='WorkSection__Header'>
        <h1>My Projects</h1>
        <ProjectCard />
      </div>
      <div className='WorkSection_Connect'>
        <Connect />
      </div>
    </div>
  )
}

export default WorkSection
