import './style.css';

const ContactUs = () => {
  return (
    <div id='contactUs' className="container">
      <div className="address-container">
        <h2 className='addressContainerTitle'><i className="fas fa-address-card"></i> Contact Us</h2>
        <div className="addressContainerSubtitle">
          <div className="me-1">
            <i className="bi bi-geo-alt-fill"></i><span> : </span>
          </div>
          <div>
            <p>123 Main Street</p>
            <p>City, State, ZIP</p>
          </div>
        </div>
      </div>
      <p className='addressContainerSubtitle'><i className="bi bi-telephone-fill"></i>&nbsp;:&nbsp;(123) 456-7890</p>
      <p className='addressContainerSubtitle'><i className="bi bi-envelope-fill"></i>&nbsp;:&nbsp;example@email.com</p>
    </div >
  );
};

export default ContactUs;