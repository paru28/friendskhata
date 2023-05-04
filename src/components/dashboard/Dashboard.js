import React, { useState } from 'react'
import img from '../../assets/images/books.png'
import { STRING } from '../../assets/common'
import { useOutletContext } from 'react-router-dom'

export default function Dashboard(props) {
   //const showicons = useOutletContext();
  return (
    <main id="main" className='main'>
    <div className="pagetitle">
      <h1>{STRING.NAVBAR.DASH}</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="index.html">{STRING.DASHBOARD.HOME}</a></li>
          <li className="breadcrumb-item active">{STRING.NAVBAR.DASH}</li>
        </ol>
      </nav>
    </div>{/*End Page Title */}

    <section className="section dashboard">
      <div className="row">

        
        <div className="col-lg-8">
          <div className="row">        
            <div className="col-xxl-4 col-md-6">
              <div className="card info-card sales-card">

                <div className="card-body">
                  <h5 className="card-title">{STRING.DASHBOARD.USER}</h5>
                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <img style={{'height': '46px'}} src={img} alt="img"/>
                    </div>
                    <div className="ps-3">
                      <h6></h6>
                      <span className="text-success small pt-1 fw-bold">2</span> <span className="text-muted small pt-2 ps-1">active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          
           <div className="col-xxl-4 col-md-6">
              <div className="card info-card revenue-card">
                <div className="card-body">
                  <h5 className="card-title">{STRING.DASHBOARD.MARKET} <span>|Account </span></h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-currency-dollar"></i>
                    </div>
                    <div className="ps-3">
                      <h6></h6>
                      <span className="text-success small pt-1 fw-bold">4</span><span className="text-muted small pt-2 ps-1">active</span>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          
            <div className="col-xxl-4 col-xl-12">
              <div className="card info-card customers-card">

          
                <div className="card-body">
                  <h5 className="card-title">Inactive<span>| Account</span></h5>

                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-people"></i>
                    </div>
                    <div className="ps-3">
                      <h6></h6>
                      <span className="text-danger small pt-1 fw-bold">4 </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
 
            <div className="col-12">
              <div className="card">

                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6></h6>
                    </li>

                    <li><a className="dropdown-item" href="#"></a></li>
                    <li><a className="dropdown-item" href="#"></a></li>
                    <li><a className="dropdown-item" href="#"></a></li>
                  </ul>
                </div>

                <div className="card-body">
                  <h5 className="card-title"> <span></span></h5>

                  <div id="reportsChart"></div>
                </div>
              </div>
            </div>

          </div>
            <div className="col-12">
              <div className="card recent overflow-auto">

                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a className="dropdown-item" href="#">Today</a></li>
                    <li><a className="dropdown-item" href="#">This Month</a></li>
                    <li><a className="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="col-12">
              <div className="card top-selling overflow-auto">

                <div className="filter">
                  <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                  <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a className="dropdown-item" href="#">Today</a></li>
                    <li><a className="dropdown-item" href="#">This Month</a></li>
                    <li><a className="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      
        <div className="col-lg-4">
          <div className="card">
            <div className="filter">
              <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                  <h6>Filter</h6>
                </li>

                <li><a className="dropdown-item" href="#">Today</a></li>
                <li><a className="dropdown-item" href="#">This Month</a></li>
                <li><a className="dropdown-item" href="#">This Year</a></li>
              </ul>

        </div>
        </div>
        </div>        
    </section> 
    
    
  </main>
  )
}