import './style.css';

// LocationComponent.js
function Location(){

  return (
    <div className="container py-5 text-white">
      <div className="row">
        <hr/>
        <div className="col-md-12">
          <div className="bg-dark p-4 rounded">
            <h2 className="mb-4">Our Address</h2>
            <address>
              <p className="mb-2">123 Main Street</p>
              <p className="mb-2">City, State, ZIP</p>
            </address>
            <h2 className="mt-4">Business Contact</h2>
            <ul className="list-unstyled">
              <li className="mb-2">Phone: (123) 456-7890</li>
              <li className="mb-2">Email: example@email.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
