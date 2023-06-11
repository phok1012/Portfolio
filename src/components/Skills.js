import React from 'react'
import SkillsBlock from './SkillsBlock';
import SkillsData from '../data/SkillsData';
import '../css/Skills.css';

const Skills = () => {
  const keys = Object.keys(SkillsData)

  return (
    <div id='Skills'>
      <h1 className='text-center'>Skills</h1>
      {keys.map((name) => {
        return (
        <div className='Container' key={name}>
          <h3 className='skills-title'>{name}</h3>
          <div className="row">
            {SkillsData[name].map((skill) =>
              <SkillsBlock name={skill.name} icon={skill.icon} key={skill.name} />
            )}
          </div>
        </div>
        )
      })}
    </div>
  )
}

export default Skills