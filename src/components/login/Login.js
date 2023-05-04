import React, { useEffect, useState } from 'react'
import img from '../../assets/images/books.png'
import { STRING, API_END_POINTS } from '../../assets/common'
import validation from '../../validation'
import { useNavigate } from 'react-router-dom'
// import Loader from 'rsuite/Loader';

import axios from 'axios'
export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {

    if(localStorage.getItem('admin')){
      navigate("/main/dashboard")
    }
    else if(!localStorage.getItem('admin')){
          navigate("/")
              }
  },[])

// function page(){
//   if(localStorage.getItem('admin')){
//     navigate("/main/dashboard")
//   }else if(!localStorage.getItem('admin')){
//     navigate("/")
//   page();
// }
  const [values, setValues] = useState({
    email: "",
    password: ""
  })
  const [errors, setErrors] = useState({})
  function valid(){
    setErrors(validation(values));
  }

  function changeinput(e) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  function changesubmit(e) {
    e.preventDefault()
             
    const val = {
      email: values.email,
      password: values.password 
    }
  //   fetch("http://13.234.136.26:3333/api/user/admin/login").then(function (response) {
  //     return response.json()
  // }) 
  // .then(function (jsonData){
  //     console.log('Banner log',jsonData);
  // })

  axios.post(API_END_POINTS.LOGIN_API,val).then(res=>{  
          console.log(res);      
if(res.data.is_active && res.data.role_id==1){
  localStorage.setItem('admin',JSON.stringify(res.data)) 
 
  const timer = setTimeout(() => {
    navigate("/main/dashboard")
 }, 1000);
 return () => clearTimeout(timer)
 
}else{

}
  const timer = setTimeout(() => {
        navigate("/main/dashboard")
     }, 1000);
     return () => clearTimeout(timer)
  })
  }
  function myFunction(e){
    // var x=val.password
    // e.preventDefault()

    var x=document.getElementById("pass");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
 
 

  return (
    <div>
      <div>
        <div className='Auth-form-container'> 
          <form className="Auth-form" onSubmit={changesubmit}>
            <div className="Auth-form-content">
              <div className='img'>
                <img src={img} alt="img"/>
                <h5 className='font'>{STRING.USER.heading} <br></br><span className='clr'>{STRING.USER.heading2} </span></h5>
              </div>
              <h1 className="Auth-form-title lab"> {STRING.USER.h1} </h1>
              <h3 className='text-align-center'></h3>
              <div className="form-group mt-3">
                {STRING.USER.EMAIL}
                <input
                  onBlur={valid}
                  type="email"
                  name='email'
                  className="form-control mt-1"
                  placeholder={STRING.USER.placeholder}
                  value={values.email}
                  onChange={changeinput}
                />
                {errors.email && <p style={{ color: "red", fontSize: "15px" }}>{errors.email}  </p>}
              </div>  

              <div className="form-group mt-3">
                {STRING.USER.PASSWORD}
                <input
                  type="password"
                  id='pass'
                  name='password'
                  className="form-control mt-1"
                  placeholder={STRING.USER.placeholder2}
                  value={values.password}
                  onChange={changeinput}
                />
                 <input
                  type="checkbox"
                  name='show' 
                  onClick={myFunction}                 
                />Show password
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary"  disabled={!values.password || !values.email}>Submit </button>
              </div>
            </div>
          </form>
        </div>
      </div >
    </div >
  )
}
