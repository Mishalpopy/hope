import React from "react";
import { Link } from "react-router-dom";

const ContactAddress = () => {
    return (
        <div className="contact-info-content">
            <div className="info-address">
                <h2 className="title">
                    Dubai, <span>UAE</span>
                </h2>
                <p>
                    Villa #G2U2, Al Wasl Road، Jumeirah 1 - Dubai United Arab
                    Emirates
                </p>
                <Link to="/">
                    <span>Email:</span> booking@brightwhite.ae
                </Link>
            </div>
            <div className="brand-office">
                <div className="info-tem style-two">
                    <h6>Call directly:</h6>
                    <p>04 334 4484</p>
                </div>

                <div className="info-tem mb-0">
                    <h6>Work Hours:</h6>
                    <p>Mon - Sat: 8.00 - 17.00, Sunday closed</p>
                </div>
            </div>
        </div>
    );
};

export default ContactAddress;
