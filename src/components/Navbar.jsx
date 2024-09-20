import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { motion } from 'framer-motion';
import logo from './images/logo.png';

export default function Navbar() {
  return (
    <header>
      <div className="left">
        <img src={logo} alt="Logo" height={60} width={60} />
        <li>AlgoKnot</li>
      </div>
      <div className="middle">
        <div className="allButtons">
          <motion.div whileHover={{ backgroundColor: '#BEE9E8' }} whileTap={{ scale: 0.9 }}
          className='link-home'>
            <NavLink to="/" end
            className={({ isActive }) => (isActive ? 'link link-home active' : 'link link-home')}
            >Home</NavLink>
          </motion.div>

          <motion.div whileHover={{ backgroundColor: '#BEE9E8' }} whileTap={{ scale: 0.9 }}>
            <NavLink to="/about"
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >About</NavLink>
          </motion.div>

          <motion.div whileHover={{ backgroundColor: '#BEE9E8' }} whileTap={{ scale: 0.9 }}
          className='link-courses'> 
            <NavLink to="/courses"
            className={({ isActive }) => (isActive ? 'link link-courses active' : 'link link-courses')}
            >Courses</NavLink>
          </motion.div>
        </div>
      </div>
      <div className="right"></div>
    </header>
  );
}
