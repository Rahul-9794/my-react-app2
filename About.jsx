import React from 'react'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <section id="about" className=' w-full py-20  bg-[#2E2B2B] px-6 md:px-16'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0'>
            <div className='flex-1 flex flex-col justify-center items-start space-y-6 md:space-y-8'>
                <motion.h2 className='text-4xl  md:text-5xl font-extrabold text-[#097706'
                  initial={{opacity:0,y:-50}}
                  whileInView={{opacity:1,y:0}}
                  viewport={{once:false,amount:0.5}}
                  transition={{duration:0.8 }} >
                    About Me
                </motion.h2>
                <motion.p className='text-lg md:text-xl  text-gray-300 '
                  initial={{opacity:0,y:+50}}
                  whileInView={{opacity:1,y:0}}
                  viewport={{once:false,amount:0.5}}
                  transition={{duration:0.8,delay:0.2 }}
                >Lorem*28hvjhghbgybhjgbmvjhhh hghgkhgihuhuugigiyfcfyruujvggiiuhvbbk</motion.p>
                 <motion.p className='text-lg md:text-xl  text-gray-300 '
                  initial={{opacity:0,y:+50}}
                  whileInView={{opacity:1,y:0}}
                  viewport={{once:false,amount:0.5}}
                  transition={{duration:0.8,delay:0.4 }}
                >Lorem*28hvjhghbgybhjgbmvjhhh hghgkhgihuhuugigiyfcfyruujvggiiuhvbbk</motion.p>
                <motion.a 
                href='my_Resume.pdf 'className='inline block mt-6 px-8 py-3 bg-[#d97706] text-lg font-semibold ' initial={{opacity:0,y:+50}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:false,amount:0.5}}
                transition={{duration:0.8 }}
                >Dowload My Resume</motion.a>
            </div>
            <div className='flex-1 '>
                <motion.img src='image1.png'
                  initial={{opacity:0,x:+100}}
                  whileInView={{opacity:1,x:0}}
                  viewport={{once:false,amount:0.5}}
                  transition={{duration:0.8 }}
                 className='w-full h-auto transform hover:scale-105  transition duration-300'></motion.img>
            </div>
        </div>
    </section>
  )
}
export default About