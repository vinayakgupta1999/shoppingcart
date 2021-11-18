import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <i class="fa fa-facebook-f"></i>
                <i class="fa fa-linkedin-square"></i>
                <i class="fa fa-instagram"></i>
                <i class="fa fa-github"></i>
                <i class="fa fa-envelope"></i>
            </div>
            <div className="footer-bottom">
                &copy; 2021Copyright Vinayak Gupta
            </div>
        </div>
    )
}

export default Footer