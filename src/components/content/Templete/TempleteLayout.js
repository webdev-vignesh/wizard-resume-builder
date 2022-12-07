import React from 'react'
import{Link} from 'react-router-dom'
import logo from '../logo/logo.jpg'
import './TempleteLayout.css'

function TempleteLayout() {
    function temp1(e){
        e.preventDefault();
        console.log('you clicked');
        
    }
 
      return (
        <div id="image">
            <p className='imgThumb'>
            <img src={logo} alt="" />
            <Link to="temp1">
            <span><button >templete1</button></span>
            </Link>
            </p>
            <p className='imgThumb'>
            <img src={logo} alt="" />
            <Link to="temp1">
            <span><button >templete2</button></span>
            </Link>
            </p>
            <p className='imgThumb'>
            <img src={logo} alt="" />
            <Link to="temp1">
            <span><button >templete3</button></span>
            </Link>
            </p>
            <p className='imgThumb'>
            <img src={logo} alt="" />
            <Link to="temp1">
            <span><button >templete3</button></span>
            </Link>
            </p>
        </div>
    
      )
   
}

export default TempleteLayout
