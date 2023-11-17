import '../style.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

TestimonialCard.propTypes = {
    testimonialInfo: PropTypes.object,
}

function TestimonialCard({ testimonialInfo }) {
    const isReviewLengthGreaterThan200Characters = testimonialInfo.Review.length > 100 ? true : null;
    const displayText = isReviewLengthGreaterThan200Characters
        ? testimonialInfo.Review.slice(0, 100) : testimonialInfo.Review;
    const [showMore, setShowMore] = useState(isReviewLengthGreaterThan200Characters);
    const [displayReview, setDisplayReview] = useState(displayText);
    const toggleShowMore = () => {
        setShowMore(!showMore);
        if (showMore) {
            setDisplayReview(testimonialInfo.Review);
        } else {
            setDisplayReview(testimonialInfo.Review.slice(0, 100));
        }
    };



    return (
        <div className="col">
            <div className="card border-light bg-light text-center xs:vW-90">
                <i className="card-img-top rounded-circle" aria-hidden="true"><FontAwesomeIcon icon={faQuoteLeft} size="2xl" /></i>
                <div className="card-body blockquote">
                    <p className="card-text">{displayReview}
                        {
                            showMore != null && <span onClick={toggleShowMore} className='text-primary'>
                                {showMore ? ' Read more' : ' Read less'}
                            </span>
                        }
                    </p>
                    <footer className="blockquote-footer text-capitalize"><cite title="Source Title">{testimonialInfo.Name}</cite></footer>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard;