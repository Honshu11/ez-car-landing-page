import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Services from './Components/Services/Services';
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
