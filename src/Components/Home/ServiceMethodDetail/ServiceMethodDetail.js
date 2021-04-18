import React from 'react';
import './ServiceMethodDetil.css'
const ServiceMethodDetail = ({ serviceMethod }) => {
    return (
        <div className='col-md-4 mt-2'>
            <img className='img-style' src={serviceMethod.icon} alt="" />
            <h4 className='text-style'>{serviceMethod.name}</h4>
            <p className='description-style'>{serviceMethod.description}</p>
        </div>
    );
};

export default ServiceMethodDetail;