import './style.css';
import PropTypes from 'prop-types';
ServiceCard.propTypes = {
    serviceInfo: PropTypes.object,
    serviceNumber:PropTypes.number,
}
function ServiceCard({ serviceInfo, serviceNumber} ) {
    return (
        <div className="col-mg-6 col-lg-4">
            <div className="single-service">
                <div className="part-1">
                    <i className={serviceInfo.serviceIcon}></i>{/*fa-car*/}
                    <h3 className="title">{serviceInfo.serviceTitle}</h3>
                </div>
                <div className="part-2">
                    <p className="description collapse" id={`collapse${serviceNumber}`}>{serviceInfo.serviceDescription}</p>
                    <a data-bs-toggle="collapse" href={`#collapse${serviceNumber}`} role="button" aria-expanded="false" aria-controls={`collapse${serviceNumber}`}>
                        <i className="fas fa-arrow-circle-right"></i>Read More +
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard;