import React from 'react';
import './Courses.css';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import binaryTree from './images/binaryTree.png';
import hashing from './images/hashing.png';
import linkedList from './images/linkedList.png';
import sorting from './images/sorting.png';
import stack from './images/stack.png';

export default function Courses() {
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
    <>
      <h1 className='typewriter'>
        Let's begin your journey with
        <span style={{ color: 'green' }}>{text}</span>
        <span>
          <Cursor />
        </span>
      </h1>
      <div className='outer'>
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
    </>
  );
}
