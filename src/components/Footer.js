import React from 'react';
import { FaFacebookF,FaTwitter,FaInstagram } from 'react-icons/fa'


export const Footer = () => {
    return (
        <div className="footer-distributed">
            <div className="footer-left">
                
                <img src="https://i.postimg.cc/DzhHHYd5/logo.png" />
                <p className="footer-company-name">Flow &amp; Wellness Studio @ 2020</p>
            </div>

            <div className="footer-center">
                <div>
                    <p>
                        <span>50 King St S</span>
                        Waterloo, Canada
                </p>
                </div>
                <div>
                    <p>+1 555 444320</p>
                </div>
                <div>
                    <p><a href="#">support@flowandwellness.com</a></p>
                </div>
            </div>
            <div className="footer-right">
                <div className="footer-company-about">
                    <p>
                        <span>About Us</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                    </p>
                </div>
                <div className="footer-icons">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
