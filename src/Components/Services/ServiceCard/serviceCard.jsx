import './style.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
ServiceCard.propTypes = {
    serviceInfo: PropTypes.object,
    serviceNumber: PropTypes.number,
}

function ServiceCard({ serviceInfo, serviceNumber }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="single-service col-12 col-md-5 col-lg-4 col-xl-3 col-xxl-2">
            <div className="part-1">
                {serviceInfo.serviceIcon}
                <h3 className="title">{serviceInfo.serviceTitle}</h3>
            </div>
            <div className="part-2">
                <p className="description collapse" id={`collapse${serviceNumber}`}>{serviceInfo.serviceDescription}</p>
                <a
                    data-bs-toggle="collapse"
                    href={`#collapse${serviceNumber}`}
                    role="button"
                    aria-expanded={isExpanded}
                    aria-controls={`collapse${serviceNumber}`}
                    onClick={toggleExpand}
                >
                    <i className="fas fa-arrow-circle-right"></i>
                    {isExpanded ? "Read Less -" : "Read More +"}
                </a>
            </div>
        </div>
    )
}

export default ServiceCard;