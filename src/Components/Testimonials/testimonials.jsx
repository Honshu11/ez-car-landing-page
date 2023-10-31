import { useState, useEffect } from "react";
import { getTestimonials } from "./testimonialData";
import TestimonialCard from './testimonialCard/testimonialCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons'
import './style.css';
function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);
    async function getTestimonialsData() {
        const testimonials = await getTestimonials();
        setTestimonials(testimonials);
    }

    useEffect(() => {
        getTestimonialsData();
    }, [])

    return (
        <div className="testimonials text-center my-5">
            <div className="container">
                <h3><FontAwesomeIcon icon={faCommentDots} /> Testimonials</h3>
                <div className="customRow">
                    {testimonials.map((testimonialInfo, index) => <TestimonialCard key={index} testimonialInfo={testimonialInfo} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Testimonials;