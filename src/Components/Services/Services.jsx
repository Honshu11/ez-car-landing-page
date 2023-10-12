import ServiceCard from './ServiceCard/serviceCard';

function Services() {
    const services = [
        {
            serviceTitle: 'Vehicle Registration',
            serviceIcon: 'fa fa-car',
            serviceDescription: `Get a quick California title transfer with our service.
            You'll need: Signed original Title and a Smog Check (depending on vehicle).
            Contact us today!`
        },
        {
            serviceTitle: 'Registration Renewals',
            serviceIcon: 'fa-regular fa-calendar-check',
            serviceDescription: `Renew your tags and get immediately your registration and stickers on location. You'll need one of the following: Your DMV renewal notice letter, Car registration or provide your CA license plate and last 3 of the VIN. Stay hassle-free with EZ Car Registration Services!`
        },
        {
            serviceTitle: 'Out-of-State Title Transfers',
            serviceIcon: 'fa-solid fa-truck-moving',
            serviceDescription: `You will have to do an out-of-state transfer when the vehicle you buy has an out of state license. You'll need the following: The out-of-state title and smog.`
        },
        {
            serviceTitle: 'LicensePlate/Sticker Replacements',
            serviceIcon: 'fa-solid fa-ticket',
            serviceDescription: 'We can help you replace your lost/stolen sticker and/or license plate. You will just need an ID/Passport and an old registration card to show proof that you are the owner of the vehicle.'
        },
        {
            serviceTitle: 'Release of Liability',
            serviceIcon: 'fa-solid fa-user-minus fa-fade',
            serviceDescription: 'We can help you fill out the release of liability of your recently sold vehicle.'
        },
        {
            serviceTitle: 'VIN Verification',
            serviceIcon: 'fa-solid fa-check',
            serviceDescription: 'We provide seamless VIN verification on site, with our licensed VIN verification personnel. You will just need to bring the car that needs to be VIN verified on site and the title or car registration. Ask for our mobile VIN verification service.'
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