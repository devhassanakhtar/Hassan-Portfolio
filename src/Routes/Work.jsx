import React from 'react'
import MainCard from '../Components/MainCard/MainCard'
import WorkSection from '../Components/WorkSections/WorkSection'

const Work = () => {
  return (
    <div className='md:flex md:flex-rowflex-col md:justify-between flex-wrap'>
      <MainCard />
      <WorkSection />
    </div>
  )
}

export default Work