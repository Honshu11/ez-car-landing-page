import './style.css';

function Footer() {
  return (
    //  Footer 
    <footer className="text-center text-white" id="footer">
      <div className="container flex flex-col justify-between items-center">
        {/*Social media */}
        <div className="container">
          <a
            href="https://www.facebook.com/profile.php?id=61550210736412"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            <i className='bi bi-facebook mr-2 text-danger'></i>
          </a>

          <a
            href="https://goo.gl/maps/BuWPcw6bHatZjVbZA"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            <i className='bi bi-google mr-2 text-danger'></i>
          </a>

          <a
            href="https://www.yelp.com/biz/ez-car-registration-services-redwood-city"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            <i className='bi bi-yelp mr-2 text-danger'></i>
          </a>

          <a
            href="https://www.instagram.com/ezcarregistration/"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            <i className='bi bi-instagram mr-2 text-danger'></i>
          </a>

          <a
            href="https://nextdoor.com/pages/ezcar-registration-redwood-city-ca/"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            <i className='bi bi-house-door mr-2 text-danger'></i>
          </a>
        </div>
      </div>
      {/* Copyright section */}
      <div className="text-center text-white pb-2 px-1">
        &copy; {new Date().getFullYear()} Ez Car Registration Services. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer;