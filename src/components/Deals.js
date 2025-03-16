import React from 'react'
import { Link } from 'react-router-dom'

export default function Deals() {
  return (
    <>
      <div className="page-heading">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h4>Discover Our Weekly Offers</h4>
          <h2>Amazing Prices &amp; More</h2>
        </div>
      </div>
    </div>
  </div>

 

  <div className="amazing-deals">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-heading text-center">
            <h2 className='text-white'>Best Weekly Offers In Each City</h2>
            <p>"Unbeatable Deals, Unforgettable Journeys!"</p>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6">
          <div className="item">
            <div className="row">
              <div className="col-lg-6">
                <div className="image">
                  <img src="assets/images/deals-01.jpg" alt=""/>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="content">
                  <span className="info">*Limited Offer Today</span>
                  <h4>Pokhara City</h4>
                  <div className="row">
                    <div className="col-6">
                      <i className="fa fa-clock"></i>
                      <span className="list">5 Days</span>
                    </div>
                    <div className="col-6">
                      <i className="fa fa-map"></i>
                      <span className="list">Daily Places</span>
                    </div>
                  </div>
                  <p>"Pokhara – Where nature meets adventure, with serene lakes and stunning Himalayan views!"</p>
                  <div className="main-button">
                    <Link to="/Reservation">Make a Reservation</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6">
          <div className="item">
            <div className="row">
              <div className="col-lg-6">
                <div className="image">
                  <img src="assets/images/deals-02.jpg" alt=""/>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="content">
                  <span className="info">*Today & Tomorrow Only</span>
                  <h4>Lumbini</h4>
                  <div className="row">
                    <div className="col-6">
                      <i className="fa fa-clock"></i>
                      <span className="list">5 Days</span>
                    </div>
                    <div className="col-6">
                      <i className="fa fa-map"></i>
                      <span className="list">Daily Places</span>
                    </div>
                  </div>
                  <p>"Lumbini – The sacred birthplace of Buddha, where peace and spirituality shine."</p>
                  <div className="main-button">
                  <Link to="/Reservation">Make a Reservation</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6">
          <div className="item">
            <div className="row">
              <div className="col-lg-6">
                <div className="image">
                  <img src="assets/images/deals-03.jpeg" alt=""/>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="content">
                  <span className="info">**Undefined</span>
                  <h4>Bhaktapur Durbar Square</h4>
                  <div className="row">
                    <div className="col-6">
                      <i className="fa fa-clock"></i>
                      <span className="list">5 Days</span>
                    </div>
                    <div className="col-6">
                      <i className="fa fa-map"></i>
                      <span className="list">Daily Places</span>
                    </div>
                  </div>
                  <p>"Bhaktapur Durbar Square – A living museum of art, culture, and timeless heritage."</p>
                  <div className="main-button">
                  <Link to="/Reservation">Make a Reservation</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-6">
          <div className="item">
            <div className="row">
              <div className="col-lg-6">
              <div className="image ">
                  <img src="assets/images/deals-04.png" alt=""/>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="content">
                  <span className="info">*Offer Until 24th March</span>
                  <h4>Manang</h4>
                  <div className="row">
                    <div className="col-6">
                      <i className="fa fa-clock"></i>
                      <span className="list">5 Days</span>
                    </div>
                    <div className="col-6">
                      <i className="fa fa-map"></i>
                      <span className="list">Daily Places</span>
                    </div>
                  </div>
                  <p>"Manang – A Himalayan paradise of rugged landscapes, ancient culture, and breathtaking adventures."</p>
                  <div className="main-button">
                  <Link to="/Reservation">Make a Reservation</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>

  
    </>
  )
}
