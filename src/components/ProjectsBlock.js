import React from 'react'
import {Github} from 'react-bootstrap-icons'

const ProjectsBlock = ({project}) => {
  console.log(project)
  return (
    <div className="card mt-5">
      <img src={project.gif} className="card-img-top p-4 rounded" alt='#'></img>
      <div className="card-body p-4">
        <h5 className="card-title">{project.name}</h5>
        {project.github ? <a href={project.github} target='_blank' className="btn btn-secondary">
          <Github /> Git Hub
        </a>
        : null}
        <p className="card-text">{project.info}</p>
      </div>
    </div>
  )
}

export default ProjectsBlock