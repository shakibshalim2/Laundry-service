import React from 'react';
import './BlogDetails.css';
import arrow from '../../../media/right-arrow.png'
const BlogDetails = ({ blog }) => {
    return (


        <div className='col-md-4 text-center mb-4'>
            <div className='p-2'>
                <div>
                    <img className='img-fluid w-100 mb-3 p-2' src={blog.img} alt="" />
                    <h6 className='posted-date-style'>{blog.post}</h6>
                    <p className='text-style'>{blog.name}</p>
                    <p className='description-style'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, quia!</p>
                </div>
                <div>
                    <a href="#home"><h6 className='link-btn'>CONTINUE READING <img className='arrow-icon' src={arrow} alt="" /> </h6></a>
                </div>
            </div>
        </div >

    );
};

export default BlogDetails;