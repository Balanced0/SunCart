"use client"
import React from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

const NavLink = ({href, children}) => {
    const path = usePathname();
    const isActive = href === path;
    return (
        <div>
            <Link href={href} className={isActive? "text-orange-400 font-bold":"text-gray-500 font-bold"}>{children}</Link>
        </div>
    );
};

export default NavLink;