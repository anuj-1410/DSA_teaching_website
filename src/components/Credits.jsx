import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import './Credits.css';
import {NavLink, useOutletContext} from 'react-router-dom';
import Lottie from 'lottie-react';
// import frontpage from './images/frontpage.json';
import homeAnimation from './images/homeAnimation.json';

export default function Credits(){
  const [isDark] = useOutletContext();

  return (

    <AnimatePresence>
    <div className={`outerbox ${isDark? 'dark': ''}`}>
    <motion.div className="wel"
    initial={{opacity:0}} 
    animate={{opacity:1}} 
    transition={{duration:1}} >
      <h1>WELCOME!!!</h1>
      <p>Dive into the world of Data <br/>Structures and Algorithms with us!</p>
        <div className="name">
        <p>The website is designed and developed by</p>
          <ul>
          <li>Abhishek Shrivastav</li>
          <li>Anshul Parate</li>
          <li>Anuj Agrawal</li>
          <li>Aryan Patel</li>
          <li>Deepanshu Nanure</li>
          </ul>
        </div>
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} className='getStartButton'>
          <NavLink to={'/courses'}
          className='linkButton'>
            <span>Get Started</span>
          </NavLink>
        </motion.div>
    </motion.div>
    <div className='animation'>
      <div className="aniBubble">
        <Lottie animationData={homeAnimation} style={{height:"700px", width:"700px"}}/>
        <div className="bubble1"></div>
        <div className="bubble2"></div>
        <div className="bubble3"></div>
        <div className="bubble4"></div>
      </div>
    </div>
    </div>
    </AnimatePresence>
  )
}
