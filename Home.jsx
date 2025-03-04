import { motion } from 'framer-motion'
import React from 'react'
import {FaGithub,FaLinkedin,FaTwitter,FaFacebook} from 'react-icons/fa'
const Home = () => {
  return (
    <section id="home" className='w-full min-h-screen pt-16  md:pt-0 flex flex-col md:flex-row items-center justify-center bg-[#2E2B2B] text-white px-6 md:px-16 '>
      <div className='flex-1 flex flex-col justify-center items-start  space-y-6'>
        <motion.p className='text-lg md:text-xl text-gray-200 '
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:false,amount:0.5}}
        transition={{duration:0.8 }}
        >Hi,I' am Rahul Maddhesshiya</motion.p>
        <motion.h1 className='text-5xl md:text-7xl font-extrabold text-[#097706] '
        initial={{opacity:0,y:-50}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:false,amount:0.5}}
        transition={{duration:0.8,delay:0.2 }}> Welcome To My Portfiolio</motion.h1>
        <motion.p className='text-lg md:text-xl text-gray-200 '
         initial={{opacity:0,y:+50}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:false,amount:0.5}}
        transition={{duration:0.8 ,delay:0.2}}>I'am Passionate Web developer creating moderen,</motion.p>
        <motion.div className='flex space-x-6'
        initial={{opacity:0,scale:0.5}}
        whileInView={{opacity:1,scale:1}}
        viewport={{once:false,amount:0.5 }}
        transition={{duration:1,delay:0.4}}
        >
            <a href="https://github.com" className="herf">
            <FaGithub className='text-3xl hover:text-[#d97706]'/>
            </a>
            <a href="https://falinkedin.com" className="herf">
            <FaLinkedin className='text-3xl hover:text-[#d97706]'/>
            </a>
            <a href="https://fatwitter.com" className="herf">
            <FaTwitter className='text-3xl hover:text-[#d97706]'/>
            </a>
            <a href="https://fafacebook" className="herf">
            <FaFacebook className='text-3xl hover:text-[#d97706]'/>
            </a>
        </motion.div>
      </div>
      <div className='flex-1 flex items-center justify-center w-full relative '>
        <div className='absolute w-96 h-96 bg-[#d97706] rounded-full blur-3xl z-0 opacity-50 '></div>
         <motion.div className='z-10 flex items-center justify-center w-full  '
         initial={{opacity:0,scale:0.5}}
         whileInView={{opacity:1,scale:1}}
         viewport={{once:false,amount:0.5 }}
         transition={{duration:1}}
         >
        <img src="image1.png" alt=""className='rounded-full'/>
         </motion.div>
      </div>
    </section>
  )
}
export default Home