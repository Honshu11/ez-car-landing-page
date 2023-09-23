import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Appointment from './Components/Appointment/Appointment';
import Location from './Components/Location/Location';
import Blog from './Components/Blog/Blog';
import './App.css'

function App() {
  return (
    <div className='App bg-dark'>
      <Navbar/>
      <About id='about'/>
      <Appointment id='appointment'/>
      <Location id='location'/>
      <Blog id='blog'/>
      <Footer/>
    </div> 
  )
}

export default App;
