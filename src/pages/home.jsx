import About from '../Components/About/About';
import Appointment from '../Components/Appointment/Appointment';
import Services from '../Components/Services/Services';
import ContactUs from '../Components/ContactUs/ContactUs';
import Footer from '../Components/Footer/Footer';
import HomeNavbar from '../Components/Navbar/HomeNavbar';
import Testimonials from '../Components/Testimonials/testimonials';
//import TestimonialCard from '../Components/Testimonials/testimonialCard/testimonialCard';


function Home() {
  return (
    <>
      <HomeNavbar />
      <About />
      <Appointment />
      <Services />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  )
}

export default Home;