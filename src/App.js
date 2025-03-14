
import React from 'react'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App() {
  return (
    <div>
     
      <Header title="UNLEASH TRAVEL"/>
        
      <Home/>
      <Footer/>

          
        
    </div>
  )
}
