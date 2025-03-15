import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
  <section id="section-1">
    <div className="content-slider">
      <input type="radio" id="banner1" className="sec-1-input" name="banner" checked/>
      <input type="radio" id="banner2" className="sec-1-input" name="banner"/>
      <input type="radio" id="banner3" className="sec-1-input" name="banner"/>
      
      <div className="slider">
        <div id="top-banner-1" className="banner">
          <div className="banner-inner-wrapper header-text">
            <div className="main-caption">
              <h2 className='text-black'>Take a Glimpse Into The Beautiful Country Of Nepal:</h2>
              <h1 className='text-black'>Mustang</h1>
              <div className="border-button "><a href="about.html">Go There</a></div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="more-info">
                    <div className="row">
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-user"></i>
                        <h4><span>Population:</span><br/>14,452</h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-globe"></i>
                        <h4><span>Territory:</span><br/>3,573 km<em>2</em></h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-home"></i>
                        <h4><span>AVG Price:</span><br/>Rs.75000</h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <div className="main-button">
                          <Link to="/About">Explore More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="top-banner-2" className="banner">
          <div className="banner-inner-wrapper header-text">
            <div className="main-caption">
              <h2 className='text-black'>Take a Glimpse Into The Beautiful Country Of Nepal:</h2>
              <h1 className='text-black'>Manaslu</h1>
              <div className="border-button"><a href="about.html">Go There</a></div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="more-info">
                    <div className="row">
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-user"></i>
                        <h4><span>Population:</span><br/>10,124</h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-globe"></i>
                        <h4><span>Territory:</span><br/>642 sq mi</h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-home"></i>
                        <h4><span>AVG Price:</span><br/>Rs.105000</h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <div className="main-button">
                          <Link to="/About">Explore More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="top-banner-3" className="banner">
          <div className="banner-inner-wrapper header-text">
            <div className="main-caption">
              <h2 className='text-black'>Take a Glimpse Into The Beautiful Country Of Nepal:</h2>
              <h1 className='text-black'>Annapurna</h1>
              <div className="border-button"><a href="about.html">Go There</a></div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="more-info">
                    <div className="row">
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-user"></i>
                        <h4><span>Population:</span><br/>7500</h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-globe"></i>
                        <h4><span>Territory:</span><br/>2,946 sq mi</h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-home"></i>
                        <h4><span>AVG Price:</span><br/>Rs.500000</h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <div className="main-button">
                          <Link to="/About">Explore More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="top-banner-4" className="banner">
          <div className="banner-inner-wrapper header-text">
            <div className="main-caption">
              <h2>Take a Glimpse Into The Beautiful Country Of Nepal:</h2>
              <h1>Thailand</h1>
              <div className="border-button"><a href="about.html">Go There</a></div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="more-info">
                    <div className="row">
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-user"></i>
                        <h4><span>Population:</span><br/>69.86 M</h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-globe"></i>
                        <h4><span>Territory:</span><br/>513.120 KM<em>2</em></h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <i className="fa fa-home"></i>
                        <h4><span>AVG Price:</span><br/>$165.450</h4>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-6">
                        <div className="main-button">
                          <a href="about.html">Explore More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav>
        <div className="controls">
          <label for="banner1"><span className="progressbar"><span className="progressbar-fill"></span></span><span className="text">1</span></label>
          <label for="banner2"><span className="progressbar"><span className="progressbar-fill"></span></span><span className="text">2</span></label>
          <label for="banner3"><span className="progressbar"><span className="progressbar-fill"></span></span><span className="text">3</span></label>
          
        </div>
      </nav>
    </div>
  </section>
  
  <div className="visit-country">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="section-heading">
            <h2 className='text-white'>Visit One Of These Now</h2>
            <p>its majestic Himalayas, rich culture, serene lakes, and breathtaking landscapes, making it a paradise for nature and adventure lovers.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="items">
            <div className="row">
              <div className="col-lg-12">
                <div className="item">
                  <div className="row">
                    <div className="col-lg-4 col-sm-5">
                      <div className="image">
                        <img src="assets/images/banner-01.jpg" alt=""/>
                      </div>
                    </div>
                    <div className="col-lg-8 col-sm-7">
                      <div className="right-content">
                        <h4 className='text-white'>MUSTANG</h4>
                        
                        <div className="main-button">
                          <a href="about.html">Explore More</a>
                        </div>
                        <p>Mustang, Nepal, is a stunning region known for its rugged landscapes, ancient monasteries,
                             and Tibetan-influenced culture. Nestled in the Himalayas, it offers breathtaking views, 
                             the famous Muktinath temple, and a unique blend of arid beauty and rich history. 🏔️✨</p>
                        <ul className="info">
                          <li><i className="fa fa-user"></i> 14,452 People</li>
                          <li><i className="fa fa-globe"></i> 3,573 km<em>2</em></li>
                          <li><i className="fa fa-home"></i> Rs.75000</li>
                        </ul>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="item">
                  <div className="row">
                    <div className="col-lg-4 col-sm-5">
                      <div className="image">
                        <img src="assets/images/banner-02.jpg" alt=""/>
                      </div>
                    </div>
                    <div className="col-lg-8 col-sm-7">
                      <div className="right-content">
                        <h4 className='text-white'>MANASLU</h4>
                        <div className="main-button">
                          <a href="about.html">Explore More</a>
                        </div>
                        <p>Manaslu, the eighth-highest mountain in the world (8,163m), is a hidden gem in Nepal, 
                            offering breathtaking Himalayan views, rich Tibetan culture, and the adventurous Manaslu 
                            Circuit Trek.</p>
                        <ul className="info">
                          <li><i className="fa fa-user"></i> 10,124 People</li>
                          <li><i className="fa fa-globe"></i> 642 sq mi</li>
                          <li><i className="fa fa-home"></i> Rs.105000</li>
                        </ul>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="item last-item">
                  <div className="row">
                    <div className="col-lg-4 col-sm-5">
                      <div className="image">
                        <img src="assets/images/banner-03.jpg" alt=""/>
                      </div>
                    </div>
                    <div className="col-lg-8 col-sm-7">
                      <div className="right-content">
                        <h4 className='text-white'>ANNAPURNA</h4>
                        <div className="main-button">
                          <a href="about.html">Explore More</a>
                        </div>
                        <p>Annapurna is a mountain range in the Himalayas, located in Nepal. 
                             is home to some of the highest peaks in the world, with Annapurna I being the 10th highest mountain, 
                             standing at 8,091 meters (26,545 feet). Known for its stunning beauty and 
                             challenging climbing conditions.</p>
                        <ul className="info">
                          <li><i className="fa fa-user"></i> 7500 People</li>
                          <li><i className="fa fa-globe"></i> 2,946 sq mi</li>
                          <li><i className="fa fa-home"></i> Rs.500000</li>
                        </ul>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="side-bar-map">
            <div className="row">
              <div className="col-lg-12">
                
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
