import React from 'react'

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="container">
          <a href="/" className="brand-logo">
            Movies
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/">Top films</a>
            </li>
            <li>
              <a href="/">Top serials</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
