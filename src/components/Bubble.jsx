import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Bubble = ({ className, content, icon }) => {
  const [showContent, setShowContent] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 300);
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout);
    setShowContent(false);
  };

  return (
    <motion.div
      className={className}
      whileHover={{ height: '100px', width: '200px', borderRadius: '15px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      transition={{ duration: 0.3 }}
    >
      {showContent && 
      <div style={{display:"flex", alignItems:"center", margin:"5px 15px"}}>
      {icon}
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} style={{marginLeft:"15px"}}>
        {content}
      </motion.p>
      </div>}
    </motion.div>
  );
};

export default Bubble;
