import './style.css';

function About() {
  const services = [
    "Vehicle Registration",
    "CA Titling",
    "Registration Renewals",
    "Out-of-State Title Transfers",
    "Replacements of Stickers",
    "Replacements of License Plates",
    "Change of Address",
    "Release of Liability",
    "VIN Verification",
    // Add more services as needed
  ];

  // Calculate the number of services per column
  const servicesPerColumn = Math.ceil(services.length / 3);

  // Split the services into 3 columns
  const columns = [...Array(3)].map((_, columnIndex) =>
    services.slice(columnIndex * servicesPerColumn, (columnIndex + 1) * servicesPerColumn)
  );

  return (
    <div className="container mt-5 text-white">
      <h1 className="display-4 fw-bolder">EZ Car Registration Services</h1>
      <p className="lead">
        EZ Car Registration Services is a family-owned company that specializes in Business Partner Automation (BPA) programs.
        We are authorized to process various vehicle-related transactions, making it convenient for our customers.
      </p>

      <h2 className="mt-4">Our Services</h2>
      <div className="row">
        {columns.map((column, columnIndex) => (
          <div className="col-md-4" key={columnIndex}>
            <ul className="list-group">
              {column.map((service, index) => (
                <li className="list-group-item" key={index}>{service}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-4">
        At EZ Car Registration Services, we are committed to providing top-notch customer service. We understand the unique needs of our customers and strive to make the vehicle-related processes as smooth and hassle-free as possible.
      </p>
      <hr/>
    </div>
  );
}

export default About;

