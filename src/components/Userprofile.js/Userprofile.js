import React from 'react'
import img from '../../assets/images/userprofile.jpg'

export default function Userprofile() {
  return (
   
  <main id="main" className="main">
 <section className="section profile">
      
      <div className="row">
        <div className="col-xl-4">

          <div className="card prf">
          <h1 className='hh'>My profile</h1>
            <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
              <img className='rounded-circle'style={{height: "60px"}} src={img} alt="img/"/>
              <h2>sandeep singh</h2>
              <h5>sandeep00@gmail.com || 8295547939</h5>
            </div>
          </div>
        </div>
        </div>
        
        <div className="col-xl-5">
        <div className="card">
        </div>
            </div>
        <div className="row">
        <div className="col-xl-5">
     <div className="card">
    <div className="card-body pt-3">
    <form>
     <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="name" className="form-control"/>
     </div>

  <div class="mb-3">
    <label htmlFor="Emailaddress" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1"/>
    </div>
  <div class="mb-3">
    <label htmlFor="Phonenumber" className="form-label">Phone number</label>
    <input type="password" className="form-control"/>
  </div>
</form>
            </div>
          </div>
        </div>
      </div>
    </section>
</main>
  )
}
