import React from 'react'
import { motion } from 'framer-motion'
import { FaCss3, FaCss3Alt, FaDatabase, FaFlag, FaHtml5, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { div } from 'framer-motion/client'
import { FaJs } from 'react-icons/fa6'
const Marque = () => {
    const icons=[
    <FaHtml5 className='text-orange-500 '/>,
    <FaCss3Alt className='text-blue-500'/>,
    <FaJs className='text-yellow-500 '/>,
    <FaReact className='text-cyan-500'/>,
    <FaNodeJs className='text-green-500'/>,
    <FaPython className='text-green-500'/>,
    <FaDatabase className='text-red-500'/>, 
    <FaFlag className='text-gray-500'/>,

]
  return (
    <div className='relative w-full bg-yellow-300 py-4 overflow-hidden shadow-lg'>
        <div className='absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#1E1C1C] via-[#1E1C1C] to-transparent z-10'></div>
        <div className='absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#1E1C1C] via-[#1E1C1C] to-transparent z-10'></div>

        <div className='flex overflow-hidden w-full '>
            <motion.div
            animate={{x:['0%','-100%']}}
            transition={{repeat:Infinity, duration:10, ease:"linear"}}
             className='flex space-x-10 items-center px-10 min-w-max'>
                
              {[...icons,...icons,...icons,...icons].map((icons,index)=>(
              <div key={index} className='text-5xl'>{icons}</div>
              ))}
              
            </motion.div>
            <motion.div 
            animate={{x:['0%','-100%']}}
            transition={{repeat:Infinity, duration:10, ease:"linear"}}
            className='flex space-x-10 items-center px-10 min-w-max'>
            {[...icons,...icons,...icons,...icons].map((icons,index)=>(
              <div key={index} className='text-5xl'>{icons}</div>
              ))}
            </motion.div>
        </div>
    </div>
  )
}

export default Marque