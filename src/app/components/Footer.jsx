import React from 'react';
import { FaRegEnvelope } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="pt-8 pb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div>
                        <h3 className="text-yellow-500 font-extrabold text-2xl mb-2">SunCart</h3>
                        <p className="text-gray-300 text-sm">Your one-stop shop for summer essentials. From beach accessories to skincare - we've got your sunny days covered.</p>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-2">Contact Us</h3>
                        <p className="text-gray-300 flex items-center gap-2 text-sm"><FaRegEnvelope /> support@suncart.com</p>
                        <p className="text-gray-300 flex items-center gap-2 text-sm"><IoMdCall /> +1 (555) 123-4567</p>
                        <p className="text-gray-300 flex items-center gap-2 text-sm"><IoLocationOutline /> Miami Beach, FL</p>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-2">Follow Us</h3>
                        <div className="text-white flex gap-2">
                            <FaFacebook size={20}/>
                            <FaInstagram size={20}/>
                            <FaTwitter size={20}/>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-300 pb-6"></div>
                <p className="text-center text-gray-300 pb-10">© 2026 SunCart. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;