import React from 'react'
import { motion } from "framer-motion"
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import binaryTree from './images/binaryTree.png';
import hashing from './images/hashing.png';
import linkedList from './images/linkedList.png';
import sorting from './images/sorting.png';
import stack from './images/stack.png';

export default function Courses() {
  const [text] = useTypewriter({
    words: [' Sorting',' Linked List',' Stack',' Hashing',' Binary Tree'],
    loop:{},
    typeSpeed: 50,
    deleteSpeed: 50
  });
    let arr = [[sorting,"Sorting"],[linkedList,"Linked List"],[stack,"Stack"],[hashing,"Hashing"],[binaryTree,"Binary Tree"]];
  return (
    <>
    <h1 className='typewriter'>
        Lets begin your journey with
        <span style={{color:'green'}}>
          {text}
        </span>
        <span>
          <Cursor/>
        </span>
      </h1>
    <div className="outer">
    {arr.map((data)=>{ 
      return <motion.div
      whileTap={{ scale: 0.9 }}
      className='box' style={{backgroundImage: "url("+data[0]+")"}}>
        <div className="img">
        {/* <motion.img 
        // initial={{opacity:0}}
        // whileHover={{opacity:1 ,scale: 1.8}}
        className='imgSize' src={data[0]} alt="random"/> */}
        </div>
        <div className="text">{data[1]}</div>
      </motion.div>
    })}
    </div>
    </>
  )
}
