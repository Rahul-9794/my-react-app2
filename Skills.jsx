import React from "react";
import {
  FaCss3,
  FaDatabase,
  FaGit,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { FaPaypal } from "react-icons/fa";
// import { AiFillCalendar } from "react-icons/ai";
const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative w-32 h-32 md:w-40 md:h-40 rounded-full  boxShadow[0px 4px 25px rgba(255,215,0,0.8)] flex items-center justify-center text-white text-xl font-bold cursor-pointer group transition-all duration-300:">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360, borderColor: skill.color }}
        style={{ color: skill.color }}
        className="w-32 h-32 md:w-40 md:h-40  rounded-full flex items-center justify-center relative  border-4 ">
        <div
          className="absolute top-1/4 text-4xl  md:text-5xl"
          style={{ color: skill.color }}>
          {skill.icon}
        </div>
        <span className="absolute  bottom-4 text-2xl md:text-3xl font-bold  ">
          {skill.level}%
        </span>
        <div className="absolute bottom-0 left-0 right-0  text-center text-sm md:text-lg font-semibold opacity-0 group-hover:opacity-100:"></div>
      </motion.div>
      <motion.h3 className="absolute bottom-0 left-0 right-0 text-center text-sm md:text-lg font-semibold opacity-0 group-hover:opacity-100: transition duration-300 ">
        {skill.name}
      </motion.h3>
    </motion.div>
  );
};
const Skills = () => {
  const skills = [
    { name: "HTML", level: 95, icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS", level: 85, icon: <FaCss3 />, color: "#E34F26" },
    { name: "React", level: 80, icon: <FaReact />, color: "#E34F26" },
    { name: "JavaScript", level: 75, icon: <FaJs />, color: "#E34F26" },
    { name: "Node.js", level: 70, icon: <FaNodeJs />, color: "#E34F26" },
    { name: "Git", level: 95, icon: <FaGit />, color: "#E34F26" },
    { name: "Python", level: 95, icon: <FaPaypal />, color: "#E34F26" },
    { name: "MongoDB", level: 95, icon: <FaDatabase />, color: "#E34F26" },
  ];
  return (
    <section
      id="skills"
      className="w-full py-20 bg-[#2E2B2B]  text-white  px-6 md:px-16 ">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-[#d97706]  text-center mb-12">
        My Skills
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-8 ">
        {skills.map((skills, index) => (
          <SkillCard key={index} skill={skills} index={index} icon />
        ))}
      </div>
    </section>
  );
};
export default Skills;
