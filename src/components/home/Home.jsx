import React from 'react'
import './Home.css'
import image from '../../assets/image.png'
import {AiOutlineRight} from 'react-icons/ai'

const Home = () => {
  return (
    <div className='home'>
      <div className="home-container">
        <div className="home-left">
          <div className="home-name">
            <h1>
              Hi, I'm Israel. <br /> I will help your <br /> team build amazing experence.
            </h1>
            <p>Frontend Developer & a FullStack Blockchain developer. <br /> I create seamless web experiences for end-users.</p>
            <button>
              Contact Me  <AiOutlineRight fontSize={20} className='icon-arrow'/>
            </button>
          </div>
        </div>
        <img className='home-right' src={image} alt="" />
      </div>
    </div>
  )
}

export default Home