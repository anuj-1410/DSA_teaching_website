import React from 'react';
import './Courses.css';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import binaryTree from '../images/binaryTree.png';
import hashing from '../images/hashing.png';
import linkedList from '../images/linkedList.png';
import sorting from '../images/sorting.png';
import stack from '../images/stack.png';
import { useOutletContext } from 'react-router-dom';

export default function Courses() {
  
  const [isDark] = useOutletContext();

  const [text] = useTypewriter({
    words: [' Sorting', ' Linked List', ' Stack', ' Hashing', ' Binary Tree'],
    loop: {},
    typeSpeed: 50,
    deleteSpeed: 50,
  });

  let arr = [
    [sorting, 'Sorting'],
    [linkedList, 'Linked List'],
    [stack, 'Stack'],
    [hashing, 'Hashing'],
    [binaryTree, 'Binary Tree'],
  ];

  return (
    <div className={`outer ${isDark? 'dark': ''}`}>
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
              whileHover={{scale:0.9}}
              className='box'
            >
              <div className='img'>
                <motion.img
                  className='imgSize'
                  src={data[0]}
                  alt='random'
                />
              </div>
              <div className='text'>{data[1]}</div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
