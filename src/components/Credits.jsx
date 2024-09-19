import React from 'react';
import {AnimatePresence, motion} from "framer-motion";
import './Credits.css';
import {NavLink} from 'react-router-dom';
import Lottie from 'lottie-react';
// import frontpage from './images/frontpage.json';
import homeAnimation from './images/homeAnimation.json';

export default function Credits(){

  return (

    <AnimatePresence>
    <div className='outerbox'>
    <motion.div className="wel"
    initial={{opacity:0}} 
    animate={{opacity:1}} 
    transition={{duration:1}} >
      <h1>WELCOME!!!</h1>
      <p>Dive into the world of Data <br/>Structures and Algorithms with us!</p>
        <motion.div className="name" 
        // initial={{opacity:0}} 
        // animate={{opacity:1}}
        // transition={{duration:0.5}}
         >
        <p>The website is designed and developed by</p>
          <ul>
          <li>Abhishek Shrivastav</li>
          <li>Anshul Parate</li>
          <li>Anuj Agrawal</li>
          <li>Aryan Patel</li>
          <li>Deepanshu Nanure</li>
          </ul>
        </motion.div>
        <motion.li 
          whileHover={{ scale: 1.1}}
          whileTap={{ scale: 0.9 }}
        className='getStartButton'><NavLink to={'/courses'} className={'linkToCourses'}>Get Started</NavLink></motion.li>
    </motion.div>
    <div className='getStarted'>
        <Lottie animationData={homeAnimation}/>
        
    </div>
    </div>
    </AnimatePresence>
  )
}
