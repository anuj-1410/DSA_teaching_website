import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Bubble = ({ className, content }) => {
  const [showContent, setShowContent] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 400);
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
      transition={{ duration: 0.1 }}
    >
      {showContent && 
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        {content}
        </motion.p>}
    </motion.div>
  );
};

export default Bubble;
