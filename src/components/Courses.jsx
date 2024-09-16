import React from 'react'
import { motion } from "framer-motion"
export default function Courses() {
    let arr = [1,2,3,4,5];
  return (
    <div>
    <div className="outer">
    {arr.map((data)=>{
      return <motion.div
      className='box'><center><h1>{data}</h1></center></motion.div>
    })}
    </div>
  {/* <div className='outer'>
  <motion.div 
      animate = {{x : 235}}
      transition={{duration:0.5}}
  className='box'>
  </motion.div>
  </div> */}
    </div>
  )
}
