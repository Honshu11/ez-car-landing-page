import './style.css';

function Navbar() {
  const handleOnClick = (bodyElementID) => {
    document.body.querySelector(`[id=${bodyElementID}]`)?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
  return (
    <>
      <nav className={'navbar navbar-expand-lg navbar-dark bg-dark bgdark'}>
        <div className='container-fluid'>
          <img src="/Images/ezlogo2.png" alt="company logo" width="150" height="80"></img> {/*company logo here*/}
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <button className={'nav-link navtitleColor'} onClick={() => handleOnClick('about')}>About</button>
              </li>
              <li className='nav-item'>
                <button className={'nav-link navtitleColor'} onClick={() => handleOnClick('pricing')}>Pricing</button>
              </li>
              <li className='nav-item'>
                <button className={'nav-link navtitleColor'} onClick={() => handleOnClick('services')}>Services</button>
              </li>
              <li className='nav-item'>
                <button className={'nav-link navtitleColor'} onClick={() => handleOnClick('blog')}>Blog</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;