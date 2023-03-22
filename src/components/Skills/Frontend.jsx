import React from 'react'
import Data from "./Data"

function Frontend() {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Frontend Development</h3>
      {Data.FE.map((skill) => (
        <div className="skill_box" key={skill.id}>
          <div className="skills_group">
            <div className="skills_data">
            <i class='bx bxs-badge-check'></i>
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

export default Frontend
