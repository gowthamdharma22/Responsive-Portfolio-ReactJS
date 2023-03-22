import React from 'react'
import "./Project.css"
import Works from "./Works"
import Fade from "react-reveal/Fade"


function Project() {
  return (
    <section className="work section" id="projects">
      <Fade>
        <div className="section_top">
          <h2 className="section_title">Projects</h2>
          <span className="section_sub">Some of my works</span>
        </div>
        <Works/>
      </Fade>
    </section>
  )
}

export default Project
