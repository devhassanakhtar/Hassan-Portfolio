import React from 'react'
import MainCard from '../Components/MainCard/MainCard'
import ContactSection from '../Components/ContactSections/ContactSection'

const Contact = () => {
  return (
    <div className='md:flex md:flex-rowflex-col md:justify-between flex-wrap'>
      <MainCard />
      <ContactSection />
    </div>
  )
}

export default Contact
