import React from 'react'
import './Project.css'
import firstp from '../../assets/izzyDapp.png'
import tictac from '../../assets/tic-tac-toe.png'
import whiteDapp from '../../assets/whitelistDapp.png'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <div className='project' id='project'>
      <div className="project-container">
        <div className="project-header">
          <h1>projects</h1>
          <p>Here are come of my project i have done over my years of development. (including this website)</p>
        </div>
        <div className="projects">
          <a href='https://my-dapp-xi.vercel.app/' target='_blank' className="main-pro">
            <img src={firstp} alt="" />
          </a>
          <a href='https://java-script-project-five.vercel.app/' target='_blank' rel='noopener' className="main-pro">
            <img src={tictac} alt="" />
          </a>
          <a href='https://whitelist-dapp-0.vercel.app/' target='_blank' className="main-pro">
            <img src={whiteDapp} alt="" />
          </a>
          <div className="main-pro">
            <img src={firstp} alt="" />
          </div>
          <div className="main-pro">
            <img src={tictac} alt="" />
          </div>
          <div className="main-pro">
            <img src={whiteDapp} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project