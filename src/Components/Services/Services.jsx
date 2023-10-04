import ServiceCard from './ServiceCard/serviceCard';

function Services() {
    const services = [
        {
            serviceTitle: 'Vehicle Registration',
            serviceIcon: 'fa fa-car',
            serviceDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a officia molestiae quo. Excepturi accusantium voluptate amet sapiente. Autem ex nesciunt minus inventore eum architecto corporis labore mollitia, explicabo dolorem!'
        },
        {
            serviceTitle: 'CA Titling',
            serviceIcon: 'fa-regular fa-address-card',
            serviceDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a officia molestiae quo. Excepturi accusantium voluptate amet sapiente. Autem ex nesciunt minus inventore eum architecto corporis labore mollitia, explicabo dolorem!'
        },
        {
            serviceTitle: 'Registration Renewals',
            serviceIcon: 'fa fa-car',
            serviceDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a officia molestiae quo. Excepturi accusantium voluptate amet sapiente. Autem ex nesciunt minus inventore eum architecto corporis labore mollitia, explicabo dolorem!'
        },
        {
            serviceTitle: 'Out-of-State Title Transfers',
            serviceIcon: 'fa fa-car',
            serviceDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a officia molestiae quo. Excepturi accusantium voluptate amet sapiente. Autem ex nesciunt minus inventore eum architecto corporis labore mollitia, explicabo dolorem!'
        },
        {
            serviceTitle: 'Replacements of Stickers',
            serviceIcon: 'fa fa-car',
            serviceDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a officia molestiae quo. Excepturi accusantium voluptate amet sapiente. Autem ex nesciunt minus inventore eum architecto corporis labore mollitia, explicabo dolorem!'
        },
        {
            serviceTitle: 'Replacements of License Plates',
            serviceIcon: 'fa fa-car',
            serviceDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a officia molestiae quo. Excepturi accusantium voluptate amet sapiente. Autem ex nesciunt minus inventore eum architecto corporis labore mollitia, explicabo dolorem!'
        },
        {
            serviceTitle: 'Change of Address',
            serviceIcon: 'fa fa-car',
            serviceDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a officia molestiae quo. Excepturi accusantium voluptate amet sapiente. Autem ex nesciunt minus inventore eum architecto corporis labore mollitia, explicabo dolorem!'
        },
        {
            serviceTitle: 'Release of Liability',
            serviceIcon: 'fa fa-car',
            serviceDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a officia molestiae quo. Excepturi accusantium voluptate amet sapiente. Autem ex nesciunt minus inventore eum architecto corporis labore mollitia, explicabo dolorem!'
        },
        {
            serviceTitle: 'VIN Verification',
            serviceIcon: 'fa fa-car',
            serviceDescription: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a officia molestiae quo. Excepturi accusantium voluptate amet sapiente. Autem ex nesciunt minus inventore eum architecto corporis labore mollitia, explicabo dolorem!'
        }
    ];

    return (
        <div id='services'>
            <section className='section-services'>
                <div className="container mt-3">
                    <div className="row justify-content-center text-center">
                        <div className="col-md-10 col-lg-8">
                            <div className="header-section">
                                <h2 className="title">Ez Car Registration<span> Services</span></h2>
                                <p className="description">
                                    At EZ Car Registration Services, we are committed to providing top-notch customer service. We understand the unique needs of our customers and strive to make the vehicle-related processes as smooth and hassle-free as possible.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {services.map((service, index) => (
                            <ServiceCard key={index}
                                serviceInfo={service}
                                serviceNumber={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;