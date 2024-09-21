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
          <NavLink to="/" end
            className={({ isActive }) => (isActive ? 'link-home active' : 'link-home')}>
              <motion.div whileHover={{ backgroundColor: '#BEE9E8' }} whileTap={{ scale: 0.9 }}
              className='link-home'>
                <span className="link">Home</span>
              </motion.div>
          </NavLink>

          <NavLink to="/about"
            className={({ isActive }) => (isActive ? 'link-about active' : 'link-about')}>
              <motion.div whileHover={{ backgroundColor: '#BEE9E8' }} whileTap={{ scale: 0.9 }}
              className='link-about'>
                <span className="link">About</span>
              </motion.div>
          </NavLink>

          <NavLink to="/courses"
            className={({ isActive }) => (isActive ? 'link-courses active' : 'link-courses')}>
              <motion.div whileHover={{ backgroundColor: '#BEE9E8' }} whileTap={{ scale: 0.9 }}
              className='link-courses'>
                <span className="link">Courses</span>
              </motion.div>
          </NavLink>
        </div>
      </div>
      <div className="right"></div>
    </header>
  );
}
