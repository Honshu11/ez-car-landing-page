import './style.css';

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

export default About;