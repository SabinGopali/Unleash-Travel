import React from 'react'
import { Link } from 'react-router-dom'

export default function Reservation() {
  return (
    <>
      <div className="second-page-heading">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h4>Book Prefered Deal Here</h4>
          <h2>Make Your Reservation</h2>
          <p>"Adventure awaits! Secure your reservation today and let your journey begin."</p>
          <div className="main-button"><a href="about.html">Discover More</a></div>
        </div>
      </div>
    </div>
  </div>

  <div className="more-info reservation-info">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-sm-6">
          <div className="info-item">
            <i className="fa fa-phone"></i>
            <h4>Make a Phone Call</h4>
            <Link >+123 456 789 (0)</Link>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="info-item">
            <i className="fa fa-envelope"></i>
            <h4>Contact Us via Email</h4>
            <Link >company@email.com</Link>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="info-item">
            <i className="fa fa-map-marker"></i>
            <h4>Visit Our Offices</h4>
            <Link >24th Street North Avenue London, UK</Link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="reservation-form">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          
        </div>
        <div className="col-lg-12">
          <form id="reservation-form" name="gs" method="submit" role="search" action="#">
            <div className="row">
              <div className="col-lg-12">
                <h4>Make Your <em>Reservation</em> Through This <em>Form</em></h4>
              </div>
              <div className="col-lg-6">
                  <fieldset>
                      <label for="Name" className="form-label">Your Name</label>
                      <input type="text" name="Name" className="Name" placeholder="Ex. John Smithee" autocomplete="on" required/>
                  </fieldset>
              </div>
              <div className="col-lg-6">
                <fieldset>
                    <label for="Number" className="form-label">Your Phone Number</label>
                    <input type="text" name="Number" className="Number" placeholder="Ex. +xxx xxx xxx" autocomplete="on" required/>
                </fieldset>
              </div>
              <div className="col-lg-6">
                  <fieldset>
                      <label for="chooseGuests" className="form-label">Number Of Guests</label>
                      <select name="Guests" className="form-select" aria-label="Default select example" id="chooseGuests" onChange="this.form.click()">
                          <option selected>ex. 3 or 4 or 5</option>
                          <option type="checkbox" name="option1" value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4+">4+</option>
                      </select>
                  </fieldset>
              </div>
              <div className="col-lg-6">
                <fieldset>
                    <label for="Number" className="form-label">Check In Date</label>
                    <input type="date" name="date" className="date" required/>
                </fieldset>
              </div>
              <div className="col-lg-12">
                  <fieldset>
                      <label for="chooseDestination" className="form-label">Choose Your Destination</label>
                      <select name="Destination" className="form-select" aria-label="Default select example" id="chooseCategory" onChange="this.form.click()">
                          <option selected>ex. Switzerland, Lausanne</option>
                          <option value="Italy, Roma">Italy, Roma</option>
                          <option value="France, Paris">France, Paris</option>
                          <option value="Engaland, London">Engaland, London</option>
                          <option value="Switzerland, Lausanne">Switzerland, Lausanne</option>
                      </select>
                  </fieldset>
              </div>
              <div className="col-lg-12">                        
                  <fieldset>
                      <button className="main-button">Make Your Reservation Now</button>
                  </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
