import React, { useState } from 'react'
import books from '../../assets/images/books.png'
import Navbar from '../navbar/Navbar';
import { STRING } from '../../assets/common'
import Dashboard from '../dashboard/Dashboard';
import { useNavigate } from 'react-router-dom';

export default function Header(props) {
  const navigate = useNavigate();

   const[showicons,setshowicons]=useState(false);
   
    const toogleaccording =()=>{
   document.body.classList.toggle("toggle-sidebar");
    }
    function logout(){
      localStorage.clear();
      navigate("/")
    }
   return (
    <div>
  <header id="header" className="header fixed-top d-flex align-items-center">
  <div className="svg">
  <a onClick={toogleaccording}>
    {/* <a onClick={props.togglle}>  */}
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
   </a>
   {/* <i  className= {props.showicons ? "toggle-sidebar":" sidebar"}>
      <Navbar showicons = {props.showicons}/> */}
       <i  className={showicons ? "toggle-sidebar":""}>
      <Navbar showicons = {{showicons}}/> 
      <div>
      </div>
      </i>
</div>
    <div className="d-flex align-items-center justify-content-between">
             
      <a className="logo d-flex align-items-center ">
        <img src={books} alt="books"/>
        <h5>{STRING.USER.heading}  <br></br><span className='clr'>{STRING.USER.heading2}</span></h5>
      </a>
    </div>

    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">

        <li className="nav-item d-block d-lg-none">
          <a className="nav-link nav-icon search-bar-toggle " href="#">
         
            <i className="bi bi-search"></i>
          </a>
        </li>    
        <li className="nav-item dropdown pe-3">
          <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            <span className="d-none d-md-block dropdown-toggle ps-2">{STRING.HEADER.PROFILE}</span>
          </a>

          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li>
              <hr className="dropdown-divider"/>
            </li>
            <li>
              <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                <i className="bi bi-person"></i>
                <span>{STRING.HEADER.PROFILE2}</span>
              </a>
            </li>
            <li>
              <a className="dropdown-item d-flex align-items-center" onClick={logout}>
                <i className="bi bi-box-arrow-right"></i>
                <span>login Out</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
    </div>
  )
}