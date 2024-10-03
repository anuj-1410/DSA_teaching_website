import React from 'react';
import './Courses.css';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import binaryTree from '../images/binaryTree.png';
import hashing from '../images/hashing.png';
import linkedList from '../images/linkedList.png';
import sorting from '../images/sorting.png';
import stack from '../images/stack.png';
import { useOutletContext, useNavigate } from 'react-router-dom';

export default function Courses() {
  
  const [isDark] = useOutletContext();
  const navigate = useNavigate();

  const [text] = useTypewriter({
    words: [' Sorting', ' Linked List', ' Stack', ' Hashing', ' Binary Tree'],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 50,
  });

  let arr = [
    { image: sorting, name: 'Sorting', path: 'sorting' },
    { image: linkedList, name: 'Linked List', path: 'linkedList' },
    { image: stack, name: 'Stack', path: 'stack' },
    { image: hashing, name: 'Hashing', path: 'hashing' },
    { image: binaryTree, name: 'Binary Tree', path: 'binaryTree' },
  ];

  const handleBoxClick = (path) => {
    navigate(`/course/${path}`);
  };

  return (
    <div className={`outer ${isDark ? 'dark' : ''}`}>
      <h1 className='typewriter'>
        Let's upgrade your skills with
        <span style={{ color: '#386FA4' }}>{text}</span>
        <span>
          <Cursor />
        </span>
      </h1>
      <div className='courseBoxes'>
        {arr.map((data, index) => {
          return (
            <motion.div
              key={index}
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 0.9 }}
              className='box'
              onClick={() => handleBoxClick(data.path)}
            >
              <div className='img'>
                <motion.img
                  className='imgSize'
                  src={data.image}
                  alt={data.name}
                />
              </div>
              <div className='text'>{data.name}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
