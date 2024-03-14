import React from 'react'
import '../App.css'
import {useNavigate} from "react-router-dom";

function Header() {
  const navigate=useNavigate()
  const handleTabChange = (e) => {
    e.preventDefault();
    if (e?.target?.id === "home-tab") {
      document.getElementById("home-tab").className = "nav-link active";
      document.getElementById("about-tab").className = "nav-link text-white";
      navigate("/")
    }
    if (e?.target?.id === "about-tab") {
      document.getElementById("home-tab").className = "nav-link text-white";
      document.getElementById("about-tab").className = "nav-link active";
      navigate("/about")
    }
  }
  return (
    <div className='container-fluid'>
      <header>
      <div className='row bg d-flex justify-content-end align-items-center'>
      <div className='col-lg-6 d-flex justify-content-start'>
        <h4>Machine Learning</h4>
      </div>
      <div className='col-lg-6 header1'>
        <nav className="navbar navbar-expand-lg">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav" onClick={handleTabChange}>
              <li className="nav-link p-2 pointer">
                <span className="nav-link active text-black" id="home-tab">Home</span>
              </li>
              <li className="nav-link p-2 pointer" >
                <span className="nav-link text-white" id="about-tab">About Us</span>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
      </header>
    </div>
  )
}

export default Header