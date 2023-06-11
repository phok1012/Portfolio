import React from 'react'
import '../css/SocialMedia.css'

const SocialMedia = ({image, href}) => {
  return (
    <div className='col'>
      <a href={href} className='nav-link icon-container' target='_blank'>
        <img className='icon img-fluid' src={image}></img>
      </a>
    </div>
  )
}

export default SocialMedia