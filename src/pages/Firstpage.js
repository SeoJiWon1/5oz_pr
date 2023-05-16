import './Firstpage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import React from "react";



function Firstpage() {
  return (
    <div className="header-all">
      <div className='header-home'>
      <Link to="/" className="header-home-text">
        <span className="first-line">5Oz</span>
        <br />
        <span className="second-line">Software</span>
      </Link>

      </div>
        <div className="custom-shape-divider-top-1684120266">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
          </svg>
        </div>
        {/* <div>
          <img src = {blob}>
          
          </img>
        </div> */}
      <div className = "header-form">
          <Link to="/Login" className="header-login">Login</Link>
    </div>
  </div>    
  )
    
  };



export default Firstpage;
