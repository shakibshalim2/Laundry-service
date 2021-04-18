import React from 'react';
import laundryImg from '../../../media/laundry.jpg'
import './Headermain.css'

const HeaderMain = () => {
    return (
        <main className='mb-5'>
            <div className="img">
                <img className='img-fluid img-height' src={laundryImg} alt="" />
            </div>
            <div className="text-block">
                <h1 className='mt-2'>10+ Years of Experiences in Cleaning Service</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, eius.</p>
                <button className="link-button mb-3">Order Now</button>
            </div>

        </main >
    );
};

export default HeaderMain;