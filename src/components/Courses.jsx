import React from 'react'
import { motion } from "framer-motion"
export default function Courses() {
    let arr = [[1,"Sorting"],[2,"Linked List"],[3,"Stack"],[4,"Hashing"],[5,"Binary Tree"]];
  return (
    <div className="outer">
    {arr.map((data)=>{
      return <motion.div
      className='box'>
        <div className="img">{data[0]}</div>
        <div className="text">{data[1]}</div>
      </motion.div>
    })}
    </div>
  )
}
