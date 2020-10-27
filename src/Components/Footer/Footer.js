import React from 'react';
import './Footer.css';
import footerLogo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className="bg-dark mt-5">
            <div className="d-flex justify-content-between container py-5">
                <div className="footerLogo widthFifty">
                    <img style={{width: '150px'}} src={footerLogo} alt=""/>
                </div>
                <div className="footerText d-flex justify-content-between widthFifty text-white">
                    <div>
                        <h5 className="footerLink my-3">About Online Food</h5>
                        <h5 className="footerLink my-3">Read our blog</h5>
                        <h5 className="footerLink my-3">Sign up for deliver</h5>
                        <h5 className="footerLink my-3">Add your restaurant</h5>
                    </div>
                    <div>
                        <h5 className="footerLink my-3">Get help</h5>
                        <h5 className="footerLink my-3">Read FAQs</h5>
                        <h5 className="footerLink my-3">View all cities</h5>
                        <h5 className="footerLink my-3">Restaurant near me</h5>
                    </div>
                </div>
            </div>
            <div className="container text-white d-flex justify-content-between align-items-center">
                <div>
                    <p className="p-0 m-0 text-secondary" style={{fontSize: '12px'}}>Copyright © 2020 Online Food</p>
                </div>
                <div className="d-flex">
                    <h5 className="footerLink m-4">Privacy Policy.</h5>
                    <h5 className="footerLink m-4">Terms of Use</h5>
                    <h5 className="footerLink m-4">Pricing</h5>
                </div>
            </div>
        </div>
    );
};

export default Footer;