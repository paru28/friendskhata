import React from 'react'
import {  NavLink } from 'react-router-dom'
import { STRING } from '../../assets/common'

export default function Navbar (props) {
  return (
    <>
     <aside  id='sidebar' className={props.showicons ?"sidebar": "  " }>

<ul className="sidebar-nav" id="sidebar-nav">
  <li className="nav-item">
      <NavLink className='nav-link collapsed' to="dashboard"> <i className="fa fa-dashboard"> </i> {STRING.NAVBAR.DASH}</NavLink>
  </li>

  <li className="nav-item">
   
      
      <NavLink className="nav-link collapsed" to="user"><i className="fa fa-users"></i> {STRING.NAVBAR.USER}</NavLink>
      
  </li>
  {/* <li class="nav-item">
        <a class="nav-link collapsed"data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-journal"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg></i>
        <span className='spn'>{STRING.NAVBAR.ACCOUNT}</span>
        </a>
        <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          
          <li>
             <NavLink to="userprofile">
              <i className="bi bi-circle"></i><span>{STRING.HEADER.PROFILE2}</span>
            </NavLink>
          </li>
          <li>
            <a href="/">
              <i className="bi bi-circle"></i><span>{STRING.HEADER.PROFILE3}</span>
            </a>
          </li>
        </ul>
      </li> */}
 </ul>
</aside>
     </>
  )
}