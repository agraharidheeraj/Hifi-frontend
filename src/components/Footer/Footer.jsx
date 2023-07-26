import "./Footer.scss";
import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return <footer className="footer">
        <div className="content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">
                    Headsets have become an indispensable accessory in our modern world,
                    catering to the ever-increasing demand for seamless audio experiences.
                    Whether for work, entertainment, or communication, headsets have transformed
                    the way we listen, communicate, and immerse ourselves in audio content.
                </div>
            </div>
            <div className="col">
                <div className="title">Contact</div>
                <div className="c-item">
                    <FaLocationArrow />
                    <div className="text">
                        Cozy Apartments, Bhutani Colony, Lovely Professional University,
                        Punjab, 1401111 
                    </div>
                </div>
                <div className="c-item">
                    <FaMobileAlt />
                    <div className="text">Phone: 7007263566</div>
                </div>
                <div className="c-item">
                    <FaEnvelope />
                    <div className="text">Email: store@Hi-Fi-Headset.com</div>
                </div>
            </div>

            <div className="col">
                <div className="title">Categories</div>
                <span className="text">Headphones</span>
                <span className="text">Smart Watches</span>
                <span className="text">Bluetooth Speakers</span>
                <span className="text">Wireless Earbuds</span>
                <span className="text">Home Theatre</span>
                <span className="text">Projectors</span>
            </div>
            <div className="col">
                <div className="title">Pages</div>
                <span className="text">Home</span>
                <span className="text">About</span>
                <span className="text">Privacy Policy</span>
                <span className="text">Returns</span>
                <span className="text">Terms & Conditions</span>
                <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        Hifi-HeadSet 2023 CREATED BY Dheeraj. PREMIUM E-COMMERCE
                        SOLUTIONS.
                    </span>
                    <img src={Payment} />
                </div>
            </div>
    </footer>
};

export default Footer;
