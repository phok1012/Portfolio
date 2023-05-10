import React from 'react'

const NavBar = ({setPage}) => {
  const changePage = (page) => {
    setPage(page)
    console.log(page)
  }

  return (
    <nav className='navbar navbar-expand'>
      <div className='container'>
        <a href="#" className="navbar-brand" onClick={() => changePage('Home')}>Kevin Pho</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={() => changePage('Projects')}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={() => changePage('Contact')}>Contact</a>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default NavBar