import React from 'react'
import './About.css'
import { Helmet } from 'react-helmet-async'

const About = () => {
  return (
    <div className=''>
       <Helmet><title>About</title> </Helmet>
        <h1 className='about-heading'>About</h1>  
       
      </div>
  )
}

export default About