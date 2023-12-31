import './style.css';
import { Link } from 'react-router-dom';
function HomeNavbar() {
  const handleOnClick = (bodyElementID) => {
    const targetElement = document.body.querySelector(`[id=${bodyElementID}]`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    } else {
      console.error(`Element with id "${bodyElementID}" not found.`);
    }
  }

  return (
    <>
      <nav className={'navbar navbar-expand-lg navbar-dark'}>
        <div className='container-fluid'>
          <img src="/Images/ezlogo2.png" alt="company logo" width="150" height="80"></img> {/*company logo here*/}
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <button className={'nav-link'} onClick={() => handleOnClick('about')}>About</button>
              </li>
              <li className='nav-item'>
                <button className={'nav-link'} onClick={() => handleOnClick('services')}>Services</button>
              </li>
              <li className='nav-item'>
                <Link to="/blogs" className={'nav-link'}>Blog</Link>
              </li>
              <li className='nav-item'>
                <button className={'nav-link'} onClick={() => handleOnClick('appointment')}>Appointment</button>
              </li>
              <li className='nav-item'>
                <button className={'nav-link'} onClick={() => handleOnClick('contactUs')}>Contact Us</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default HomeNavbar;