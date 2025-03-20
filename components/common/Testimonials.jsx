import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Testimonials = () => {
    return (
        <div id="testimonialCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="d-block w-100">
                        <p>"This is the first testimonial text."</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-block w-100">
                        <p>"This is the second testimonial text."</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-block w-100">
                        <p>"This is the third testimonial text."</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#testimonialCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#testimonialCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Testimonials;