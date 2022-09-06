import React from 'react'
import './Project.css'
// import firstp from '../../assets/izzyDapp.png'
import tictac from '../../assets/tic-tac-toe.png'
import whiteDapp from '../../assets/whitelistDapp.png'
import zuri from '../../assets/zuri2clone.png'
import crypto from '../../assets/cryptosearch.png'
import gym from '../../assets/gym.png'
import nft from '../../assets/nftcollection.png'
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
          <a href='https://nftcollections.vercel.app/' target='_blank' className="main-pro">
            <img src={nft} alt="nft collection dapp" />
          </a>
          <a href='https://java-script-project-five.vercel.app/' target='_blank' rel='noopener' className="main-pro">
            <img src={tictac} alt="tic tac toe" />
          </a>
          <a href='https://whitelist-dapp-0.vercel.app/' target='_blank' rel='noopener' className="main-pro">
            <img src={whiteDapp} alt="whitelistDapp" />
          </a>
          <a href='https://zuri-clone.vercel.app/train' target='_blank' rel='noopener'  className="main-pro">
            <img src={zuri} alt="zuri clone" />
          </a>
          <a href='https://crypto-search-eta.vercel.app/' target='_blank' rel='noopener' className="main-pro">
            <img src={crypto} alt="cypto search" />
          </a>
          <a href='https://gym-api-sigma.vercel.app/' className="main-pro">
            <img src={gym} alt="gym app" />
          </a> 
        </div>
      </div>
    </div>
  )
}

export default Project