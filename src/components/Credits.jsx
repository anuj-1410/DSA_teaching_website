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
          <div className="text-home">
            <h1>WELCOME!!!</h1>
            <p style={{marginTop:"10px"}}>Dive into the world<br/>of <span style={{color:"#62B6CB"}}>Data Structures
               </span><br />and <span style={{color:"#62B6CB"}}>Algorithms</span> with us!</p>
            <p style={{fontSize:"1.6rem",marginTop:"20px"}}>
            Invest in your future and build a robust and reliable foundation for your programming career now.
            </p>
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
