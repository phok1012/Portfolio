import React from 'react'

const SkillsBlock = ({name, icon}) => {
  return (
    <div className='col-4 d-flex justify-content-center'>
      <div className='skills-tile'>
        <i className={`${icon}`}></i>
        <div className='icon-text'>{name}</div>
      </div>
    </div>
  )
}

export default SkillsBlock