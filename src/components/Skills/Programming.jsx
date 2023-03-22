import React from 'react'
import Data from "./Data"

function Programming() {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Programming Language</h3>
      {Data.PR.map((skill) => (
        <div className="skill_box" key={skill.id}>
          <div className="skills_group">
            <div className="skills_data">
              <i className='bx bxs-badge-check'></i>
              <div className='skill_cont'>
                <h3 className="skills_name">{skill.t}</h3>
                <span className="skills_level">{skill.tl}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Programming
