import './style.css';

function Footer() {
  return (
    //  Footer 
    <footer className="bg-dark text-center text-white" id="footer">
      <div className="container p-1 flex flex-col justify-between items-center">
        {/*Social media */}
        <div className="container p-1">
          <a
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            <i className='bi bi-facebook mr-2'></i>
          </a>

          <a
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            <i className='bi bi-google mr-2'></i>
          </a>

          <a
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            <i className='bi bi-yelp mr-2'></i>
          </a>

          <a
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            <i className='bi bi-instagram mr-2'></i>
          </a>

          <a
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            <i className='bi bi-house-door mr-2'></i>
          </a>
        </div>
      </div>
      {/* Copyright section */}
      <div className="text-center text-white p-2">
        &copy; {new Date().getFullYear()} Ez Car Registration Services. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer;