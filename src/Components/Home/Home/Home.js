import React from 'react';
import Blog from '../Blog/Blog';
import Brances from '../Brances/Brances';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ServiceMethod from '../ServiceMethod/ServiceMethod';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ServiceMethod></ServiceMethod>
            <Services></Services>
            <Contact></Contact>
            <Brances></Brances>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;