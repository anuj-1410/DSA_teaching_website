import React from 'react';
import {NavLink} from 'react-router-dom' ;
import './Navbar.css'
import {motion} from "framer-motion";
import logo from './images/logo.png';
export default function Navbar() {
  return (
    <header>
        <div className="left">
          <img src={logo} alt="" height={60} width={60}/>
          <li>AlgoKnot</li>
        </div>
        <div className="right">
        <motion.li 
          whileHover={{ scale: 1.1, backgroundColor : '#BEE9E8'}}
          whileTap={{ scale: 0.9 }}
        className='homeButton'><NavLink to={'/'} className={'link'}>Home</NavLink></motion.li>
        <motion.li 
          whileHover={{ scale: 1.1, backgroundColor : '#62B6CB'}}
          whileTap={{ scale: 0.9 }}
        className='aboutButton'><NavLink to={'/about'} className={'link'}>About</NavLink></motion.li>
        {/* <motion.li 
          whileHover={{ scale: 1.1, backgroundColor : '#5FA8D3'}}
          whileTap={{ scale: 0.9 }}
        className='contactButton'><NavLink to={'/Courses'} className={'link'}>Courses</NavLink></motion.li> */}
        </div>
    </header>
  )
}


