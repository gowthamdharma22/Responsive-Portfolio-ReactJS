import React from 'react'
import {content} from "./Data"
import {nav} from "./Data"
import WorkItem from './WorkItem'


function Works() {
  
  const[item,setItem]=React.useState({name:'all'})
  const[proj,setProj]=React.useState([])
  const[active,setActive]=React.useState(0)

  React.useEffect(()=>{
    if(item.name==='all') setProj(content);
    else{
      const newProj=content.filter((proj)=>{
        return proj.cat===item.name  
      })
      setProj(newProj)
    }
  },[item])

  const handleClick=(e,index)=>{
    setItem({name:e.target.textContent})
    setActive(index);
  }

  return (
    <div>
      <div className="work_filters">
        {nav.map((props,index)=>{
          return(
            <span onClick={(e)=>{
              handleClick(e,index)
            }} className={`${active===index?'active_work':""}work_item`} key={index}>{props.name}</span>
          )
        })}
      </div>

      <div className="work_container conatiner grid">
        {proj.map((prop)=>{
          return(
            <WorkItem prop={prop} key={prop.id}/>
          )
        })}
      </div>
    </div>
  )
}

export default Works
