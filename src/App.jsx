import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
    <Navbar />
    <Home/>
    <Services/>
    <About/>
    <Products/>
    <Footer/>
  </Router>
  )
}

export default App
