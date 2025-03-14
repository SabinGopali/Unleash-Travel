import React from 'react'

export default function Header(props) {
  return (
    <div>
        <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    
                <a href="index.html" 
                className="logo text-10x4 font-bold text-white hover:text-gray-700 transition-all my-4">
  {props.title}
</a>
                    
                    <ul className="nav">
                        <li><a href="index.html" className="active">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="deals.html">Deals</a></li>
                        <li><a href="reservation.html">Reservation</a></li>
                    </ul>   
                    <a className='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    
                </nav>
            </div>
        </div>
    </div>
  </header>
      
    </div>
  )
}
