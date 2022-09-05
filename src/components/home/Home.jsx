import React from 'react'
import './Home.css'
import image from '../../assets/image.png'
import {AiOutlineRight} from 'react-icons/ai'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div className='home' id='home'>
      <div className="home-container">
        <div className="home-left">
          <div className="home-name">
            <h1>
              <span>Hi, my name is</span> <br /> Israel Omitiran. <br /> I will help your  team build amazing experence.
            </h1>
            <p>Frontend Developer & a FullStack Blockchain developer. <br /> I create seamless web experiences for end-users.</p>
            <button className='go-to'>
              <Link to='contact' className='goto' smooth={true} offset={-70} duration={4}>
                Contact Me  <AiOutlineRight fontSize={40} className='icon-arrow'/>
              </Link>
            </button>
          </div>
        </div>
        {/* <img className='home-right' src={image} alt="" /> */}
      </div>
    </div>
  )
}

export default Home