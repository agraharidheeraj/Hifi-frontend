import "./Newsletter.scss";
import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const Newsletter = () => {
    return <div className="newsletter"> 
    <div className="content">
    <div className="small-text">NewsLetter</div>
    <span className="big-text">Sign up for latest update and offer</span>
    <div className="form">
        <input type="text" placeholder="Email Address"></input>
        <button>Subscribe !</button>
    </div>
    <div className="text">Will be used in accordance with our privacy policy</div>
    <div className="social-icon">
        <div className="icon">
            <FaFacebookF size={14}  />
        </div>
        <div className="icon">
            <FaTwitter size={14}  />
        </div>
        <div className="icon">
            <FaInstagram size={14}  />
        </div>
        <div className="icon">
            <FaLinkedinIn size={14}  />
        </div>
    </div>
    </div>
    </div>;
};

export default Newsletter;
