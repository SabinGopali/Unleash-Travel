import React from 'react'
import { Link } from 'react-router-dom'

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
                        <li><Link className="active" to="/" >Home</Link></li>
                        <li><Link to="/About" >About</Link></li>
                        <li><Link to="/Deals">Deals</Link></li>
                        <li><Link to="/Reservation">Reservation</Link></li>
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
