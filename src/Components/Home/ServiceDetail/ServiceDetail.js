import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css';
const ServiceDetail = ({ service }) => {
    const { img, name, _id } = service
    return (
        <div className='col-md-4 text-center mb-4 quotes'>
            <div className='service-style p-3 card'>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={`/dashboard/service/${_id}`} >
                    <div className='box box1'>
                        <img className='img-fluid w-75 mb-3 p-2' src={service.img} alt="" />
                        <h4>{name}</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, iusto?</p>
                        <h2>{service.price}</h2>
                    </div>
                </Link>
            </div >
        </div >
    );
};

export default ServiceDetail;