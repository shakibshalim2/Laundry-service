import React from 'react';
import './Contact.css'
import telephone from '../../../media/telephone.png';

const Contact = () => {
    return (
        <div className='text-center mt-5 mb-5'>
            <div className='contact-style p-2'>
                <img className='telephone-img' src={telephone} alt="" />
                <h3 className='contact-text-color'>CALL US @ 544 223 6665</h3>
                <p className='contact-text-color'>We deliver the goods to the most complicated places on earth</p>
            </div>
        </div>
    );
};

export default Contact;