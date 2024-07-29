import React from 'react'
// import { FaBars } from "react-icons/fa";
// import { IoMdClose } from "react-icons/io";
import Hamburger from "../../Assets/hamburger.png"
import closedIcon from "../../Assets/closed-icon.png"
import { useState } from 'react';


const Navbar = () => {

    const [showNav, setShowNav] = useState(false);
    return (
        <>
            <header className="navbar" id="header">
                <h1 className="logo" onClick={()=> setShowNav(false)}>
                    @codewithlyon
                </h1>
                <div className="mobile-nav-toggle active" aria-controls="primary-navigation" >
                </div>
                <div className="mobile-nav-toggle" onClick={()=> setShowNav(prev => !prev)}>
                    {
                        showNav ? <img src={closedIcon} alt="" className='icon-close'/> : <img src={Hamburger} alt="" className='hamburger'/>
                    }
                </div>
                <nav className="primary-navigation" id="primary-navigation">
                    <ul aria-label="primary-navigation" className={`navlinks ${showNav ? "show-nav" : "hide-nav"}`}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Project</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <button className='btn'>
                    <p>Download CV</p>
                </button>
            </header>
        </>
    )
}

export default Navbar
