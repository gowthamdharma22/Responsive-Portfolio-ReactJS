import React from 'react'

function WorkItem({prop}) {
  return (
    <div className="work_card" key={prop.id}>
        <img src={prop.img} alt="" className="work_img" />
        <h3 className="work_title">{prop.tit}</h3>
        <a href={prop.link} target={'_blank'} className="work_link">
            Demo <i className="bx bx-right-arrow-alt work_icon"></i>
        </a>
    </div>
  )
}

export default WorkItem
