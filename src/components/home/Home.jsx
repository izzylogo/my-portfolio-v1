import React from 'react'
import './Home.css'
// import image from '../../assets/image.png'
import {AiOutlineRight} from 'react-icons/ai'
import { Link } from 'react-scroll'
import {motion, variants} from 'framer-motion'

const textAnimate={
  offscreen:{y: -1000, opacity: 0, display: 'none'},
  onscreen:{y: 0, 
    display: 'block',
    opacity: [0.2, 0.5, 0.7, 0.9, 1 ],
    transition: {type: 'spring',
    bounce: 0.2,
    delay: 1.5,
    duration: 2.3}
  }
}

const spanAni={
  offscreen:{y: -10, opacity: 0},
  onscreen:{y: 0,
    opacity: [0.2, 1],
    transition: {type: 'spring',
    bounce: 0.2,
    delay: 1,
    duration: 1.5}
  }
}

const pAni={
  offscreen:{y: -100, opacity: 0},
  onscreen:{y: 0,
    opacity: [0, 0.2, 0.5, 0.8, 1],
    transition: {type: 'spring',
    bounce: 0.2,
    delay: 2.2,
    duration: 2.5}
  }
}

const butAni={
  offscreen:{y: -100, opacity: 0},
  onscreen:{y: 0,
    opacity: [0, 0.2, 0.5, 0.8, 1],
    transition: {type: 'spring',
    bounce: 0.2,
    delay: 2.8,
    duration: 2.5}
  }
}

const Home = () => {
  return (
    <div className='home' id='home'>
      <div className="home-container">
        <div className="home-left">
          <motion.div className="home-name"
            initial={'offscreen'}
            whileInView={'onscreen'}
            viewport={{once:true, amount:0.3}}
            transition={{staggerChildren:0.5}}
          >
            <motion.h1
              variants={textAnimate}
            >
              <motion.span
                variants={spanAni}
              >
                Hi, my name is
              </motion.span>
                <br /> Israel Omitiran. <br /> I will help your  team build amazing experence.
            </motion.h1>
            <motion.p
              variants={pAni}
            >
              Frontend Developer & a FullStack Blockchain developer. <br /> I create seamless web experiences for end-users.
            </motion.p>
            <motion.button className='go-to'
              variants={butAni}
            >
              <Link to='contact' className='goto' smooth={true} offset={-70} duration={4}>
                Contact Me  <AiOutlineRight fontSize={40} className='icon-arrow'/>
              </Link>
            </motion.button>
          </motion.div>
        </div>
        {/* <img className='home-right' src={image} alt="" /> */}
      </div>
    </div>
  )
}

export default Home