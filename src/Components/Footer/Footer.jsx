import React from 'react'
import './Footer.css'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className='Footer'>
        <Link to="/" className="title">
          <span className="title__color">Has</span>san
        </Link>
        <h1>© Hassan 2026, Design By Hcode</h1>
    </div>
  )
}

export default Footer