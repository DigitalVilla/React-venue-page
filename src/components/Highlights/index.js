import React from 'react'
import Description from "./Description"
import Skill from "./Skill"

const Highlights = () => {

  const skills = [
    {
      percent:91,
      skill:"uno"
    }, 
    {
      percent:77,
      skill:"dos"
    }, 
    {
      percent:78,
      skill:"tres"
    }, 
    {
      percent:86,
      skill:"cuatro"
    } 
      
    ];
  return (
    <div className="highlight_wrapper">
      <Description />
      {
        skills.map((el, i) => {
          return <Skill key = {el.skill} percent={el.percent}  skill={el.skill} />
        })
      }
    </div>
  )
}

export default Highlights
