import React from 'react'
import reactLogo from "../../Assets/react-logo.png"
import htmlLogo from "../../Assets/html.png"
import cssLogo from '../../Assets/css-logo.png'
import javascriptLogo from "../../Assets/js-logo.png"
import tailwindLogo from "../../Assets/tailwind.png"
import nodeLogo from "../../Assets/node.png"
import mongoLogo from "../../Assets/mongo.png"
import expressLogo from "../../Assets/express.png"
import javaLogo from "../../Assets/java.png"

const Skills = () => {
    return (
        <div>
            <div className="sections" id="skills">
                <h2 className="secondary-heading">skills</h2>
                <p className="paragraph">These are the technologies i've worked with</p>

                <div className="skills">
                    <div className="skill">
                        <img src={htmlLogo} alt="" />
                        <span className='paragraph'>HTML</span>
                    </div>

                    <div className="skill">
                        <img src={cssLogo} alt="" />
                        <span className='paragraph'>CSS</span>
                    </div>

                    <div className="skill">
                        <img src={javascriptLogo} alt="" />
                        <span className='paragraph'>JavaScript</span>
                    </div>

                    <div className="skill">
                        <img src={reactLogo} alt="" />
                        <span className='paragraph'>React</span>
                    </div>

                    <div className="skill">
                        <img src={tailwindLogo} alt="" />
                        <span className='paragraph'>Tailwind</span>
                    </div>

                    <div className="skill">
                        <img src={nodeLogo} alt="" />
                        <span className='paragraph'>Node js</span>
                    </div>

                    <div className="skill">
                        <img src={mongoLogo} alt="" />
                        <span className='paragraph'>Mongo DB</span>
                    </div>

                    <div className="skill">
                        <img src={expressLogo} alt="" />
                        <span className='paragraph'>Express Js</span>
                    </div>

                    <div className="skill">
                        <img src={javaLogo} alt="" />
                        <span className='paragraph'>java</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills
