import React from 'react';
import './AllService.css'
const AllServices = (props) => {
    console.log(props.pd);
    const { name, img } = props.pd
    return (

        <div className='services-style'>
            <div className='row services-page'>

                <div className='col-md-4'>
                    <img className='img-fluid w-25 mt-3 img-style' src={img} alt="" />
                </div>

                <div className='col-md-8 mt-2'>
                    <p>{name}</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, non?</p>

                </div>

            </div>

        </div>

    );
};

export default AllServices;