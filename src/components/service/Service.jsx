import React from 'react'
import './Service.css'
import teamwork from '../../assets/teamwork.svg'

const Service = () => {
  return (
    <div className='service' id='service'>
        <h2>My Service</h2>
      <div className="service-container">
        <div className="service-left">
          <h1>The most creative <br /> intuitive and <br /> innovative teammate.</h1>
          <img src={teamwork} />
        </div>
        <div className="service-right">
          <div className="tab">
            <h3>Developer Skill</h3>
            <p>I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS.</p>
          </div>
          <div className="tab">
            <h3>Blockchain Development</h3>
            <p>I create decentralized application and write smart contract with solidty and read data from the smart contarct using ethers.js.</p>
          </div>
          <div className="tab">
            <h3>Version Control</h3>
            <p>I can use version control systems well, and Git & Mecurial are my go-to tool.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service