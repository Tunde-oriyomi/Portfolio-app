import React from 'react'
import monkeyType from "../../Assets/monkeytype.png"
import todolist from "../../Assets/todolist.png"
import virtualkeyboard from "../../Assets/virtualkeyboard.png"

const Project = () => {
    return (
        <>
            <div className="projects sections" id='projects'>
                <h2 className="secondary-heading">projects</h2>
                <p className="paragraph">Check out some of my work</p>

                <div className="works">
                    <div className="work">
                        <img src={monkeyType} aria-label='monkeytype' alt='' />
                        <div className="project-1"></div>
                        <div className="desc-section">
                            <span className="tertiary-heading">monkeytype clone</span> <br /><br />
                            <span className='paragraph style'>Speed Type Tester using
                            HTML, CSS, JavaScript</span>

                            <div className="btn_section">
                                <button>Demo</button>
                                <button>Code</button>
                            </div>
                        </div>
                    </div>

                    <div className="work">
                    
                    <div className="project-2"></div>
                    <img src={virtualkeyboard} aria-label='virtual keyboard' alt='' />
                        <div className="desc-section">
                            <span className="tertiary-heading">virtual keyboard </span> <br /><br />
                            <span className='paragraph style'>Speed Type Tester
                            using HTML, CSS, JavaScript</span>

                            <div className="btn_section">
                                <button>Demo</button>
                                <button>Code</button>
                            </div>
                        </div>
                    </div>

                    <div className="work">
                        <img src={todolist} alt="" />
                        <div className="project-3"></div>
                        <div className="desc-section">
                            <span className="tertiary-heading"> to do application</span> <br /> <br />
                            <span className="paragraph style">Simple Todo App adding
                            Todos using JavaScript</span>

                            <div className="btn_section">
                                <button>Demo</button>
                                <button>Code</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project
