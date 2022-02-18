import React from 'react'
import { Link } from 'react-router-dom';
import './css/style.css';
export default function Navbar() {
  return (
    <div className="navbar">
     <nav className="navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/addgroup">Add Group</Link>
        <Link className="nav-link" to="/joingroup">Join Group</Link>
      </div>
    </div>
  </div>
</nav>
{/* <div classNameName="tab-content" id="nav-tabContent">
  <div classNameName="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">...</div>
  <div classNameName="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
  <div classNameName="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
</div> */}
    </div>
  )
}
