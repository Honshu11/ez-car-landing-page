import './style.css';
{/*}
function About() {
  return (
    <div id='about' className="container col-xxl-8 text-light">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src="https://getbootstrap.com/docs/5.0/examples/heroes/bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">EZ Car Registration Services</h1>
          <p className="lead"> EZ Car Registration Services is a family-owned company that specializes in Business Partner Automation (BPA) programs.We are authorized to process various vehicle-related transactions, making it convenient for our customers.</p>
        </div>
      </div>
    </div>
  );
}
*/}

function About() {
  return (
    <div id="about" className="container col-xxl-8 text-light">
<<<<<<< HEAD
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src=".\Images\ezcar-getYourStickersLicense.png" alt="license plate picture." />
              </div>
              <div className="carousel-item active">
                <img src=".\Images\EzCar-skipTheLine.png" alt="People waiting in line." />
              </div>
              <div className='carousel-item active'>
                <img src=".\Images\ezcar-alldocs.png" alt="information about what ez car registration svcs do." />
              </div>
            </div>
            <button className='carousel-control-prev' type='button' data-bs-target='carousel' data-bs-slide='prev'>
              <span className='carousel-control-prev-icon' aria-hidden='true'></span>
              <span className='visually-hidden'>Previous</span>  
            </button>
            <button src='carousel-control-next' type='button' data-bs-target='carousel' data-bs-slide='next'>
              <span className='carousel-control-next-icon' aria-hidden='true'></span>
              <span className='visually-hidden'>Next</span>
            </button>
          </div>
        </div>
=======
      <div className="d-flex flex-lg-row flex-column-reverse align-items-center g-5 py-5">
>>>>>>> c621b79327611b4437da5697b20e732336f5f708
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold 1h-1 mb-3">EZ Car Registration Services</h1>
          <p className="lead"> EZ Car Registration Services is a family-owned company that specializes in Business Partner Automation (BPA) programs.We are authorized to process various vehicle-related transactions, making it convenient for our customers.</p>
        </div>
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src=".\Images\ezcar-getYourStickersLicense.png" alt="license plate picture." className="img-fluid" />
            </div>
            <div className="carousel-item active">
              <img src=".\Images\EzCar-skipTheLine.png" alt="People waiting in line." className="img-fluid" />
            </div>
          </div>
          <button className='carousel-control-prev' data-bs-target='#carousel' data-bs-slide='prev'>
            <span className='carousel-control-prev-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button className='carousel-control-next' data-bs-target='#carousel' data-bs-slide='next'>
            <span className='carousel-control-next-icon' aria-hidden='true'></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default About;