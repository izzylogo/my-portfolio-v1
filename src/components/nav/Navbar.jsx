import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    console.log(toggle)


  return (
    <div className='navbar'>
        <div className="navbar-container">
            <div className="nav-left">Izzy-Dev</div>
            <div className="nav-right nav-large">
                <ul>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Project</li>
                    <li>Service</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/* Media Query Hambuger Menu */}
            <div className="nav-small">
                <div className="menu-bar" onClick={() => setToggle(prevToggle => !prevToggle)}>
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                </div>
                <div className={toggle ? 'active' : 'menu-list'}>
                    <ul>
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Project</li>
                        <li>Service</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Navbar