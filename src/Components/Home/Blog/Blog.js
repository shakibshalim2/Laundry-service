import React from 'react';
import './blog.css'
import blog1 from '../../../media/blog1.jpg';
import blog2 from '../../../media/blog2.jpg';
import blog3 from '../../../media/blog3.jpg';
import BlogDetails from '../BlogDetails/BlogDetails';


const blogData = [
    {
        img: blog1,
        name: 'Wedding suit deserves special treatment',
        post: 'Posted on 12 Jul 2012'
    },
    {
        img: blog2,
        name: 'Power laundry service at its best!',
        post: 'Posted on 27 aug 2019'
    },
    {
        img: blog3,
        name: 'Dry cleaning saves money in the long run',
        post: 'Posted on 31 Jan 2020'
    }
]



const Blog = () => {
    return (
        <section className="mt-3">
            <div className="text-center">
                <h2 className='blog-text'>OUR BLOG</h2>
            </div >
            <div className="container justify-content-center">
                <div className="row mt-4">
                    {

                        blogData.map(blog => <BlogDetails blog={blog}></BlogDetails>)
                    }
                </div>
            </div>



        </section >
    );
};

export default Blog;