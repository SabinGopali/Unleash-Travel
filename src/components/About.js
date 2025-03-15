import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  
  return (
    <>
      <div className="about-main-content">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="content">
            <div className="blur-bg"></div>
            <h4>EXPLORE OUR COUNTRY</h4>
            <div className="line-dec"></div>
            <h2>Welcome To Nepal🚩</h2>
            <p >Nestled in the heart of the Himalayas, Nepal is a paradise for travelers seeking adventure, 
              spirituality, and breathtaking landscapes. Home to Mount Everest, the world's highest peak,
               and rich cultural heritage, Nepal offers a unique blend of nature and tradition.</p>
            <div className="main-button">
              <Link to="/Reservation">Discover More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  

  <div className="more-about">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 align-self-center">
          <div className="left-image">
            <img src="assets/images/about-left-image.jpg" alt=""/>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="section-heading">
            <h2 className='text-white'>Discover More About Our Country</h2>
            
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="info-item">
                <h4>1.14mil +</h4>
                <span>Total Guests Yearly</span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="info-item">
                <h4>142,233+</h4>
                <span>Amazing Accomoditations</span>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="info-item">
                <div className="row">
                  <div className="col-lg-6">
                    <h4>1000+</h4>
                    <span>Amazing Places</span>
                  </div>
                  <div className="col-lg-6">
                    <h4>	1,147,567+</h4>
                    <span>Different Check-ins Yearly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p> Whether you're an adventurer seeking thrills or a cultural enthusiast exploring historic sites, Nepal has something for everyone.</p>
          
        </div>
      </div>
    </div>
  </div>

  

  
    </>
  )
}
