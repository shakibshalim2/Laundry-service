import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import facebook from '../../../media/facebook.png';
import instagram from '../../../media/instagram.png'
import './Footer.css'



const Footer = () => {
    const ceoStatement = [
        {
            name: 'Fashion is not something that exists only in dresses'

        },
        {
            name: ' It exists in people who are well dressed in clean crisp clothes. Therefore, make your fashion statement with Dry Cleaners!'

        }
    ]
    const ourAddress = [
        { name: "Canada - 101010 Hudson", link: "//google.com/map" },
        { name: "Yards", link: "//google.com/map" },

    ]
    const quickLinks = [
        { name: "About Us", link: "/about" },
        { name: "Our Services", link: "/service" },
        { name: "How It Works", link: "/works" },
        { name: "Blog & News", link: "/blog" },
        { name: "Contact Us", link: "/contact" },
        { name: "Faq", link: "/faq" }
    ]
    const services = [
        { name: "House Cleaning", link: "/home" },
        { name: "Office Cleaning", link: "/home" },
        { name: "After Party Cleaning", link: "/home" },
        { name: "Move in / Out Clean", link: "/home" },
        { name: "window Cleaning", link: "/home" },
        { name: "Carpet Cleaning", link: "/home" }
    ]


    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"OUR CEO’s STATEMENT"} menuItems={ceoStatement} />
                    <FooterCol key={2} menuTitle="Our Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Quick Links" menuItems={quickLinks} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><img src={facebook} alt="" /> </a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><img src={instagram} alt="" /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+46373782828</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;