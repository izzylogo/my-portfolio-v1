import React from 'react'
import './About.css'
import { Link } from 'react-scroll'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about-container">
        <div className="about-head">
          <h1 className="a-in">About Me</h1>
          <h4 className="sum">Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</h4>
        </div>
        <div className="about-main">
          <div className="know">
            <div className="bar"></div>
            <h3>Get to know me!</h3>
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
          </div>
          <div className="my-skills">
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
          </div>
        </div>

      </div>
    </div>
  )
}

export default About