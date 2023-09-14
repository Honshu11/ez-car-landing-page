import './style.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="mb-4">
              <img src="/Images/ezlogo.png" alt="ez-car-logo" className='img-fluid'/>
            </div>
            <div className="social-icons">
              <a href="" target='_blank'>
                <i className='bi bi-facebook mr-2'></i>
              </a>
              <a href="" target='_blank'>
                <i className='bi bi-google mr-2'></i>
              </a>
              <a href="" target='_blank'>
                <i className='bi bi-yelp mr-2'></i>
              </a>
              <a href="" target='_blank'>
                <i className='bi bi-instagram mr-2'></i>
              </a>
              <a href="" target='_blank'>
                <i className='bi bi-nextdoor mr-2'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;