import React from 'react'
import Tilt from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles';
import{services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion';
import {SectionWrapper} from '../hoc';

const ServiceCard =({index,title,icon}) => {
return(
        <Tilt className='xs:w-[250px] w-full'>
          <motion.div
          variants = {fadeIn("right","spring",0.5*index,0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div
            option={{
              max:45,
              scale:1,
              speed:450
            }}
            className="bg-territory rounder-[20px]
            py-5 px-12 min-h-[280px] flex
            justify-evenly items-center flex-col">
              <img src={icon} alt={title}
              className="w-16 h-16 object-contain " />
              <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3> 
            </div>
          </motion.div>
        </Tilt>  
  )
}

const About = () => {
  return (
      <>
      <motion.div variants = {textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>
      <motion.p
      variants = {fadeIn("","",0.1,1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] '
      >
        I am a highly skilled software developer with extensive experience in TypeScript and JavaScript.
         I have expertise in utilizing various frameworks, such as Angular, React, and Three.js,
          to create efficient and scalable web solutions that solve real-world problems.
           As a quick learner, I am always eager to stay up-to-date with the latest technologies
            and best practices to ensure the highest level of quality in my work.
             I enjoy collaborating closely with clients to understand their needs and bring their ideas to life,
              creating user-friendly solutions that exceed their expectations.
               Let's work together to create innovative and impactful web applications that make a difference in the world.
        </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index) => (
          <ServiceCard key = {service.title} index = {index} {...service} />
        ))}
      </div>
      </>
    ) 
}

export default SectionWrapper(About ,"about")