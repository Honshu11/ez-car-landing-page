import './style.css';
import { Link } from 'react-router-dom';

function BlogNavbar() {
    return (
        <nav className={'navbar navbar-expand-lg navbar-dark'}>
            <div className='container-fluid'>
                <img src="/Images/ezlogo2.png" alt="company logo" width="150" height="80"></img> {/*company logo here*/}
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to="/" className={'nav-link'}>Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default BlogNavbar