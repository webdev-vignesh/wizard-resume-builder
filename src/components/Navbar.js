import React from 'react'
import {Link} from 'react-router-dom'
import Navlogo from '../assets/navlogo.jpg'
function Navbar() {
  return (

    <div className='Nav'>
        <div>
          <img  className='img' src={Navlogo}alt=""></img>
        </div>
        <div className='Nav-items'>
          <Link className='Nav-link'to="home">Templete</Link>
          <Link className='Nav-link'to="about">About Page</Link>
        </div>
    </div>
    
    
 
  )
}

export default Navbar
