import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './Credits.css';
import { NavLink, useOutletContext } from 'react-router-dom';
import Lottie from 'lottie-react';
import homePageAnimation from '../images/homePageAnimation.json';
import Bubble from './Bubble';
import { FaYoutube } from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";

export default function Credits() {
  const [isDark] = useOutletContext();
  const [showSuggestion, setShowSuggestion] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuggestion(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

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
            {showSuggestion && 
            <div className="suggestion">Know more!
            <div></div>
            </div>}
            <Lottie animationData={homePageAnimation} style={{ height: '700px', width: '700px' }} />
            <Bubble className="bubble1" content="Master DSA Concepts in One Video" icon={<FaYoutube size={90}/>} />
            <Bubble className="bubble2" content="Visualize Data Structures in Action" icon={<MdAnimation size={90} />} />
            <Bubble className="bubble3" content="Quiz Yourself for Better Practice" icon={<MdQuiz size={90} />} />
            <Bubble className="bubble4" content="Learn from Experienced Guides" icon={<FaChalkboardTeacher size={90} />} />
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
