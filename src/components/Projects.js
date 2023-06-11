import React from 'react'
import ProjectsBlock from './ProjectsBlock'
import '../css/Projects.css'
import ProjectsData from '../data/ProjectsData'

const Projects = () => {

  return (
    <div id='Projects'className='container mt-5'>
      <h1 className='text-center'>Projects</h1>
      {ProjectsData.map((project, index) =>
        <div className='mh-100' key={index}>
          <ProjectsBlock project={project}/>
        </div>
      )
      }
    </div>
  )
}

export default Projects