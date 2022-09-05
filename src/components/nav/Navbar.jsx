import React, { useState } from 'react'
import { Link } from 'react-scroll'
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
                    <li>
                        <Link to='home' smooth={true} duration={1200}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='about' smooth={true} duration={1200} offset={-70}>
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link to='project' smooth={true} duration={1200} offset={-70}>
                            Project
                        </Link>
                    </li>
                    <li>
                        <Link to='service' smooth={true} duration={1200} offset={-70}>
                            Service
                        </Link>
                    </li>
                    <li>
                        <Link to='contact' smooth={true} duration={1200} offset={-70}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Media Query Hambuger Menu */}
            <div className="menu-bar" onClick={() => setToggle(prevToggle => !prevToggle)}>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
            </div>
        </div>
            <div className="nav-small">
                <div className={toggle ? 'active' : 'menu-list'}>
                    <ul>
                        <li >
                            <Link onClick={() => setToggle(prevToggle => !prevToggle)} to='home'  smooth={true} duration={1200}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setToggle(prevToggle => !prevToggle)} to='about'  smooth={true} duration={1200}>
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setToggle(prevToggle => !prevToggle)} to='project'  smooth={true} duration={1200}>
                                Project
                            </Link>
                        </li>
                        <li>
                            <Link onClick={() => setToggle(prevToggle => !prevToggle)} to='service'  smooth={true} duration={1200}>
                                Services
                            </Link>
                        </li>
                        <li>
                        <Link onClick={() => setToggle(prevToggle => !prevToggle)} to='contact'  smooth={true} duration={1200}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>


    </div>
  )
}

export default Navbar