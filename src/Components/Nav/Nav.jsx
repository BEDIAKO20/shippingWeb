import React from 'react'
import "../Nav/Nav.css"
import { Link } from 'react-router-dom'
import { TbTruckDelivery } from "react-icons/tb";
import { FaBoxes } from "react-icons/fa";


function Nav() {
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid topbar px-0">
        <div className="row g-0 d-none d-lg-flex">
          <div className="col-lg-6 ps-5 text-start">
            <div className="h-100 d-inline-flex align-items-center text-white">
              <span>Follow Us:</span>
              <a className="btn btn-link text-light" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-link text-light" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-link text-light" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="btn btn-link text-light" href="">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <div className="h-100 topbar-right d-inline-flex align-items-center text-white py-2 px-5">
              <span className="fs-5 fw-bold me-2">
                <i className="fa fa-phone-alt me-2"></i>Call Us:
              </span>
              <span className="fs-5 fw-bold">+233 345 6789</span>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-0 pe-5">
        <a href="index.html" className="navbar-brand ps-5 me-0">
          <h1 className="m-0" style={{ color: '#ffff' }}>Shipping App</h1>
        </a>
        <button
          type="button"
          className="navbar-toggler me-0"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/home"  className="nav-item nav-link active">Home</Link>
            <Link to="/about"  className="nav-item nav-link">About</Link>

            <div className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Shipment & Security Boxes</Link>
              <div className="dropdown-menu bg-light m-0">
                <div className='terck'>
                <Link to="/TrackShipment"  className="dropdown-item" > <TbTruckDelivery size={30} /><span className='trackNav-text ms-3 mt-5'>Track Shipment </span><br/>
               <span className='' style={{width:"32%"}}> Track Your shipment using Your Shipment <br /> number</span>
                </Link>
                </div>
                
                <div className='terck'>
                <Link to="/CheckYourSafety"  className="dropdown-item" > <FaBoxes size={30} /><span className='trackNav-text ms-3 mt-5'>Check Sfety Deposite Box </span><br/>
               <span className='' style={{width:"32%"}}> Check the contents of your safety deposit <br /> boxes</span>
                </Link>
                </div>
                {/* <Link className="dropdown-item">Check Sfety Deposite Box</Link> */}
                
              </div>
            </div>
            <Link 
            className="nav-item nav-link" to="/contact">Contact</Link>
          </div>
          {/* <a
            href=""
            className="btn px-3 d-none d-lg-block"
            style={{ backgroundColor: '#22223B', color: '#ffff' }}
          >
            Get A Quote
          </a> */}
        </div>
      </nav>
      {/* Navbar End */}
    </>
  )
}

export default Nav
