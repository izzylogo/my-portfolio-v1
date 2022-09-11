import React from 'react'
import './Footer.css'



const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <h4 className="f-lang">React Developer, Blockchain Developer</h4>
            <h4 className="f-name">	&copy; Copyright, Made by Israel Omitiran</h4>
            <div className="f-icons">
                <a href="https://github.com/izzylogo" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://twitter.com/IzzyLogo" target="_blank" rel="noopener noreferrer">Tweeter</a>
                <a href="https://www.linkedin.com/in/israel-omitiran-104817224/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </div>
    </div>
  )
}

export default Footer