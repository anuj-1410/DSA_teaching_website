import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Credits.css';
import { NavLink, useOutletContext } from 'react-router-dom';
import Lottie from 'lottie-react';
import homePageAnimation from '../images/homePageAnimation.json';
import Bubble from './Bubble';

export default function Credits() {
  const [isDark] = useOutletContext();

  return (
    <AnimatePresence>
      <div className={`outerbox ${isDark ? 'dark' : ''}`}>
        <motion.div
          className="wel"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>WELCOME!!!</h1>
          <p>Dive into the world of Data <br />Structures and Algorithms with us!</p>
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
            whileTap={{ scale: 0.9 }}
            className="getStartButton"
          >
            <NavLink to={'/courses'} className="linkButton">
              <span>Get Started</span>
            </NavLink>
          </motion.div>
        </motion.div>
        <div className="animation">
          <div className="aniBubble">
            <Lottie animationData={homePageAnimation} style={{ height: '700px', width: '700px' }} />
            <Bubble className="bubble1" content="Hello Everyone" />
            <Bubble className="bubble2" content="Welcome to our site" />
            <Bubble className="bubble3" content="Explore our courses" />
            <Bubble className="bubble4" content="Join us now" />
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
