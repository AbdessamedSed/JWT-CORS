import React from "react";

const Nav = () => {
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" href="">Login </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Register </a>
              </li>
            </ul>
          </div>
        </div> 
      </nav>
    )
}

export default Nav;

// ****** comment