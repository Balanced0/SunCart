import React from 'react';
import Image from 'next/image'
import logo from "@/assets/logo.png"
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="flex justify-center items-center">
                <Image src={logo} alt="Site Logo" width={80} height={80}></Image>
                <h3 className="text-orange-500 font-extrabold text-2xl">SunCart</h3>
            </div>
            <div>
                <ul>
                    <li><NavLink href="/">Home</NavLink></li>
                    <li><NavLink href="/products">Products</NavLink></li>
                    <li><NavLink href="/profile">My Profiles</NavLink></li>
                </ul>
            </div>
            <div></div>
        </div>
    );
};

export default Navbar;