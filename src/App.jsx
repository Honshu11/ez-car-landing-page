import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Pricing from './Components/Pricing/Pricing';
import Appointment from './Components/Appointment/Appointment';
import Blog from './Components/Blog/Blog';
import './App.css'

function App() {
  return (
    <div className='App bg-dark'>
      <Navbar/>
      <About id='about'/>
      <Pricing id='pricing'/>
      <Appointment id='appointment'/>
      <Blog id='blog'/>
      <Footer/>
    </div> 
  )
}

export default App;
