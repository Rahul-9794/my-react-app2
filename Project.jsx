import { motion } from "framer-motion";
import React from 'react'

const ProjectCard=({project,index})=>{
  return(
    <motion.div 
    initial={{ opacity: 0, x: -100 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false, amount: 0.5 }}
    transition={{ duration: 1}}
    className="relative w-full md:w-[320px]  lg:w-[350px] h-[400px] shadow-xl overflow-hidden cursor-pointer transition duration-300 group">
      <motion.div 
      style={{backgroundImage:`url(${project.image})`}}
      whileHover={{scale:1.1}}
      transition={{duration:0.3}}
       className="w-full h-full absolute top-0 left-0 bg-cover bg-center ">
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black  via-transparent to-transparent opacity-30 group-hover:opacity-100 transition duration-300 p-6 flex flex-col justify-between">
      <motion.h3
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.6}}
       className="text-2xl md:text-3xl font-bold text-black mb-4 ">
        {project.title}
      </motion.h3>
      <motion.p className="text-sm md:text-lg text-black bg-amber-200 mb-6 "
      >{project.decsription}</motion.p>
      <motion.a href={project.link} target="-blank" className="inline-block text-lg  text-[#097706] underline font-bold ">
        View Projects
      </motion.a>
    </div>
    </motion.div>
  </motion.div>
  )
}

const Project = () => {
  const project=[
    {
      title:"Project one",
      decsription:"A Decsription of project 1",
      image:"image1.png",
      link:"https://github.com"

    },
    {
      title:"Project one",
      decsription:"A Decsription of project 1",
      image:"image1.png",
      link:"https://github.com"

    },
    {
      title:"Project one",
      decsription:"A Decsription of project 1",
      image:"image1.png",
      link:"https://github.com"

    },
  ]
  return (
    <section id="project" className="w-full py-20 bg-[#2E2B2B] text-white px-6  md:px-16">
    <motion.h2 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-[#d97706]  text-center mb-12">
        My Projects
      </motion.h2>
      <motion.div className="flex flex-wrap justify-between gap-8">
        {project.map((project,index)=>(
          <ProjectCard key={index} project={project} index={index}/>
        ))}
      </motion.div>
    </section>
  )
}

export default Project