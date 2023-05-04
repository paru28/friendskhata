import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'

export default function Main() {
  //  const[showicons,setshowicons]=useState(false);
  //  const toogleaccording =()=>{
  //  setshowicons(!showicons)
  // }
  return (
    <div>
      <Header/>
      <Outlet/>
           {/* <Header showicons={showicons} togglle={toogleaccording}/> 
      <Outlet context={showicons}/> */}
    </div>
  )
}

