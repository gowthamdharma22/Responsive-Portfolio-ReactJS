import React from 'react'
import "./Skill.css"
import Frontend from './Frontend'
import Programming from "./Programming" 
import Game from "./Game"
import Pulse from 'react-reveal/Pulse';
import Fade  from 'react-reveal/Fade'

function Skills() {
  return (
    <section className="skills section" id="skills">
      <Fade bottom>
        <div className="section_top">
            <h2 className="section_title">Skills</h2>
            <span className="section_sub">My Technical Skill</span>
        </div>
      </Fade>
      <Pulse>
        <div  className="skills_container container grid">
            <Frontend/>
            <Programming/>
            <Game/>
        </div>
      </Pulse>
    </section>
  )
}

export default Skills
