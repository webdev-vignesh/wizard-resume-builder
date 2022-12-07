import React from 'react'
import './Aboutus.css'
import Navlogo from './Navlogo.jpg'
function Aboutus() {
  return (
  <div className='about'>
    <div className='left'>
      <h1>Project</h1>
      <h1>Resume Builder Website</h1>
      <p>A web application using which you can create your professional work resume in a few minutes. </p>
<p>We will provide you with a set of templates to choose from and then enter all your details. </p>
<p>Then click 'Finish' </p>
<p>Tada!!💐 Your resume is created and ready to be downloaded as a pdf file.</p>
    <h1>Created by</h1>
    <h3>Web3 Wizards</h3>
    </div>
    <div className='right'>
      <img src={Navlogo} alt=""/>

    </div>
    </div>
  )
}

export default Aboutus
