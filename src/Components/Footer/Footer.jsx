import './style.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className="row">
          <div className="col-lg-3 col-md-9">
            <div className="mb-4">
              <img src="/Images/ezlogo.png" alt="ez-car-logo" className='img-fluid'/>
            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61550210736412" target='_blank' rel='noreferrer'>
                <i className='bi bi-facebook mr-2'></i>
              </a>
              <a href="https://www.google.com/maps/place/EZ+Car+Registration+Services/@37.4731845,-122.205735,15z/data=!4m6!3m5!1s0x808fa3f88356861b:0x753206e8e27144f0!8m2!3d37.4731845!4d-122.205735!16s%2Fg%2F11h8jbx161?entry=ttu" target='_blank' rel='noreferrer'>
                <i className='bi bi-google mr-2'></i>
              </a>
              <a href="https://www.yelp.com/biz/ez-car-registration-services-redwood-city" target='_blank' rel='noreferrer'>
                <i className='bi bi-yelp mr-2'></i>
              </a>
              <a href="https://www.instagram.com/ezcarregistration" target='_blank' rel='noreferrer'>
                <i className='bi bi-instagram mr-2'></i>
              </a>
              <a href="https://nextdoor.com/pages/ezcar-registration-redwood-city-ca/" target='_blank' rel='noreferrer'>
                <i className='bi bi-house-door mr-2'></i>
              </a>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="text-center text-md-right">
                &copy; {new Date().getFullYear()} Ez Car Registration Services. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;