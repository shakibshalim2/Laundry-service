import React, { useState } from 'react';
import Testimonials from '../Testimonials/Testimonials';
import './Testimonial.css'
import { useEffect } from 'react';






const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([]);





    useEffect(() => {
        fetch('http://localhost:5000/testimonial')
            .then(res => res.json())
            .then(data => setTestimonial(data))

    }, [])





    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-color text-uppercase">Testimonials  ........</h5>
                    <h1 className='testimonial-text'>What Our Clients Say?</h1>
                </div>
                <div className="card-deck mt-5">

                    {
                        testimonial.map(testimonial => <Testimonials testimonial={testimonial} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonial;