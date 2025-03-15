
import React from "react";
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Deals from './components/Deals'
import Reservation from './components/Reservation'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Secondaryfooter from "./components/Secondaryfooter";



export default function App() {
  return (
    <div>
      <Router>
        <Header title="UNLEASH TRAVEL"/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Deals" element={<Deals/>}/>
          <Route path="/Reservation" element={<Reservation/>}/>
        </Routes>
        <Secondaryfooter/>
        
        <Footer/>
      </Router>
    </div>
  )
}
