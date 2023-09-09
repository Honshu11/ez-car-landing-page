import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Blog from './Components/Blog';
import Services from './Components/Services';
import './App.css'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <About id='about'/>
      <Blog id='blog'/>
      <Services id='services'/>
      <Footer/>
    </div> 
  )
}

export default App;
