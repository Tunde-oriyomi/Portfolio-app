import React from 'react'
// import { FaLinkedin } from "react-icons/fal";
// import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaGithubSquare } from "react-icons/faG";
// import { FaSquareGithub } from "react-icons/fa6";
import github from "../../Assets/github.png"
import linkedIn from "../../Assets/linkedin.png"
import x from "../../Assets/twitter.png"
import displayPicture from "../../Assets/me.jpg"


const Header = () => {
    return (
        <>
            <div className="hero">
                <div className="intro">
                    <h2>Hi, I am <br />
                        <span className="primary-heading">tunde oriyomi</span><br />
                        <span className="span">And I am a</span>
                        <span className="updating-text" id="updating-text"> developer</span>
                    </h2>

                    <p className="paragraph">
                        Seeking a challenging role as a web developer where I can utilize my expertise in front-end and back-end
                        development to create seamless and engaging online experiences. Passionate about collaborating with
                        cross-functional teams to deliver high-quality, scalable solutions that drive business growth and user
                        satisfaction
                    </p>

                    <div className="social-icons">
                        <a href="linkedin.com">
                            <img className='social-icon' src={linkedIn} alt=""/>
                        </a>
                        <a href="x.com/Tundelyon20">
                            <img className='social-icon' src={x} alt="" />
                        </a>
                        <a href="https://github.com/Tunde-oriyomi/cloned-portfolio">
                            <img className='social-icon' src={github} alt="" />
                        </a>
                    </div>

                    <div className="intro-btn">
                        <a href="wa.me/2348100730011">
                            <button>Contact me</button>
                        </a>
                        <a href="#contact">
                            <button className='small-btn'>resume</button>
                        </a>
                    </div>
                </div>
                <img src={displayPicture} alt='' />
            </div>
        </>
    )
}

export default Header
