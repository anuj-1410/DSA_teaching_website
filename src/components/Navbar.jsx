import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { motion } from 'framer-motion';
import logo from '../images/logo.png';
import { MdLightMode , MdDarkMode } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

export default function Navbar({theme}) {
  const [isDark, setIsDark] = theme;

  React.useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);

  const handleTheme =()=>{
    setIsDark(!isDark)
    localStorage.setItem('isDarkMode', !isDark)
  }

  const [isArrowUp, setIsArrowUp] = useState(false);
  const handleMouseEnter = () => {
    setIsArrowUp(true);
  };
  const handleMouseLeave = () => {
    setIsArrowUp(false);
  };

  return (
    <header className={`${isDark? 'dark': ''}`}>
      <div className="left">
        <img src={logo} alt="Logo" height={60} width={60} />
        <p>CodeMatrix</p>
      </div>
      <div className="middle">
        <div className="allButtons">
          
          <motion.div className={'link-home'}
          whileHover={{backgroundColor:"var(--hover-color)"}}>
            <NavLink to="/" end className={'link'}
            style={({isActive})=>(isActive? {color: 'var(--activeLink-color)',backgroundColor:"#BEE9E8"}:{color:'var(--text-color)'})}>
              <span>Home</span>
            </NavLink>
          </motion.div>

          
          <motion.div className={'link-courses'}
          whileHover={{backgroundColor:"var(--hover-color)"}}
          onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <NavLink to="/courses"
              className={"link"}
              style={({isActive})=>(isActive? {color: 'var(--activeLink-color)',backgroundColor:"#BEE9E8"}:{color:'var(--text-color)'})}>
                  <span>Courses</span>
                  {isArrowUp ? <RiArrowDropUpLine className='arrow'/> : <RiArrowDropDownLine className='arrow'/> }
            </NavLink>
          </motion.div>

          
          <motion.div className={'link-about'}
          whileHover={{backgroundColor:"var(--hover-color)"}}>
            <NavLink to="/about"
            className={"link"}
            style={({isActive})=>(isActive? {color: 'var(--activeLink-color)',backgroundColor:"#BEE9E8"}:{color:'var(--text-color)'})}>
              <span>About</span>
            </NavLink>
          </motion.div>
        
          <div className="dropDown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <NavLink to="" className='option'>Sorting</NavLink>
            <NavLink to="" className='option'>Linked List</NavLink>
            <NavLink to="" className='option'>Stack</NavLink>
            <NavLink to="" className='option'>Hashing</NavLink>
            <NavLink to="" className='option'>Binary Tree</NavLink>
          </div>
        </div>
      </div>
      <div className="right">
        <motion.span 
        onTapStart={handleTheme}
        whileTap={{x:40}}
        className={"mode"}>
            {isDark ? <MdLightMode className='icon'/> : <MdDarkMode className='icon'/>}
        </motion.span>
        <p>
          {isDark? 'Light': 'Dark'} Mode
        </p>
      </div>
    </header>
  );
}
