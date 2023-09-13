import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Pricing from './Components/Pricing/Pricing';
import Services from './Components/Services/Services';
import './App.css'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <About id='about'/>
      <Pricing id='pricing'/>
      <Services id='services'/>
      <Footer/>
    </div> 
  )
}

export default App;
