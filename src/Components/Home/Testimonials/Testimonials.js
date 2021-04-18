import React from 'react';
import './Testimonials.css'

const Testimonials = ({ testimonial }) => {
    const { quote, name, from } = testimonial;
    return (
        <div className="card shadow-sm">
            <div className="card-footer">

                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-center">{quote}</p>

            </div>

        </div>
    );
};

export default Testimonials;