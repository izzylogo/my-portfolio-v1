import React from 'react'
import './About.css'
import { Link } from 'react-scroll'
import {motion} from 'framer-motion'


const headAni={
  offscreen:{y: -50,opacity: 0,display: 'none'},
  onscreen:{ y: 0,opacity: [0, 0.2, 0.5, 0.7, 1], display: 'block', transition: { duration: 1, delay: 0.9, type: 'spring', bounce: 0.2}}
}

const subAni={
  offscreen:{y: -30,opacity: 0,display: 'none'},
  onscreen:{ y: 0,opacity: [0, 0.2, 0.5, 0.7, 1], display: 'block', transition: { duration: 1.5, delay: 1, type: 'spring'}}
}

const mainAni={
  offscreen:{y: -30,opacity: 0},
  onscreen:{ y: 0,opacity: 1, transition: { duration: 1.5, delay: 1, type: 'spring'}}
}

const knowAniL={
  offscreen:{x: -30,opacity: 0},
  onscreen:{ x: 0,opacity: 1,  transition: { duration: 1, delay: 2, type: 'spring', bounce: 0.3}}
}

const skiAniR={
  offscreen:{x: 30,opacity: 0,},
    onscreen:{ x: 0,opacity: 1, transition: { duration: 1, delay: 2.15, type: 'spring', bounce: 0.3}}
}

const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about-container">
        <motion.div className="about-head"
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{once:true, amount:0.7}}
          transition={{staggerChildren:2}}
        >
          <motion.h1 className="a-in" variants={headAni}>About Me</motion.h1>
          <motion.h4 className="sum" variants={subAni}>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</motion.h4>
        </motion.div>
        <motion.div className="about-main"
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{once:true, amount:0.7}}
          transition={{staggerChildren:2}}
          variants={mainAni}
        >
          <motion.div className="know" variants={knowAniL}>
            <motion.div className="bar" ></motion.div>
            <motion.h3>Get to know me!</motion.h3>
            <h4>
              I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.
              I also a certified Blockchain Devloper, who graduated from LEARNWEB3.IO. I write smart contracts and develop Decntralised Application(DAPPs), Decentralised Autonomos Organization(DAO), NFT and so on.
              I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
            </h4>
            <button className='go-to'>
              <Link to='project' smooth={true} duration={500} delay={1000} offset={-70}>
                Projects
              </Link>
            </button>
          </motion.div>
          <motion.div className="my-skills" variants={skiAniR}>
            <div className="bar"></div>
            <h3>My Skills</h3>
            <div className="skills">
              <div className="skill">HTML</div>
              <div className="skill">CSS</div>
              <div className="skill">Javascript</div>
              <div className="skill">React</div>
              <div className="skill">SASS</div>
              <div className="skill">Styled Components</div>
              <div className="skill">Solidity</div>
              <div className="skill">Nextjs</div>
              <div className="skill">Hardhat</div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}

export default About