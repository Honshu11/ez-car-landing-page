import ServiceCard from './ServiceCard/serviceCard';
import services from './servicesData';
function Services() {
    return (
        <div id='services' className='section-services container my-5'>
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
            <div className="d-flex flex-row flex-wrap align-items-stretch justify-content-center " style={{ gap: '20px' }}>
                {services.map((service, index) => (
                    <ServiceCard key={index}
                        serviceInfo={service}
                        serviceNumber={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default Services;