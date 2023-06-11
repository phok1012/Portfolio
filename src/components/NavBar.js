import React from 'react';
import SocialMedia from './SocialMedia';
import '../css/NavBar.css'
import {Github, Linkedin, FilePersonFill} from 'react-bootstrap-icons';

const NavBar = () => {
  const scrollTo = ((id) => {
    console.log(id)
    var target = document.getElementById(id)
    console.log(target)
    target.scrollIntoView(true)
    event.preventDefault();
  })

  return (
    <nav className='navbar rounded sticky-top navbar-expand-lg navbar-dark'>
      <div className="container-fluid">
        <a href="#" className="navbar-brand">Kevin Pho</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportContent" aria-controls="offcanvasNavbar" aria-expand='false' aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse"  id="navbarSupportContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item" onClick={()=>{scrollTo('Skills')}}>
              <a className="nav-link" href="#">Skills</a>
            </li>
            <li className="nav-item" onClick={()=>{scrollTo('Projects')}}>
              <a className="nav-link" href="#">Projects</a>
            </li>
            <li className="nav-item" onClick={()=>{scrollTo('Interest')}}>
              <a className="nav-link" href="#">Interest</a>
            </li>
          </ul>
          <span className="navbar-text">
            <a href="https://github.com/phok1012" target ='_blank'>
              <Github size='30' className='clickable px-1' />
            </a> |
            <Linkedin size='30' className='clickable px-1'/> |
            <FilePersonFill size='30' className='clickable  px-1'/> |
            kevinpho1012@gmail.com | (626)-278-0277
          </span>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
