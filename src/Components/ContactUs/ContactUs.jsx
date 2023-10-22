import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
const ContactUs = () => {
  return (
    <div id='contactUs' className="container">
      <div className="address-container">
        <h2 className='addressContainerTitle'><FontAwesomeIcon icon={faAddressCard} /> Contact Us</h2>
        <div className="addressContainerSubtitle">
          <div className="me-1">
            <i className="bi bi-geo-alt-fill text-danger"></i><span> : </span>
          </div>
          <div>
            <p>3131 Middlefield Rd</p>
            <p>Redwood City, CA, 94063</p>
          </div>
        </div>
      </div>
      <p className='addressContainerSubtitle'><i className="bi bi-telephone-fill text-danger"></i>&nbsp;:&nbsp;(650) 362-4308</p>
      <p className='addressContainerSubtitle'><i className="bi bi-envelope-fill text-danger"></i>&nbsp;:&nbsp;EzCar.Management@gmail.com</p>
    </div>
  );
};

export default ContactUs;