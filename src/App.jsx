import { useState } from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Services from './Components/Services';
import './App.css'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <About/>
      <Services/>
      <Footer/>
    </div> 
  )
}

export default App;
