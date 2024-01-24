"use client"

import React, { useState } from 'react';
import Logo from "@/components/Logo";
import MainNav from "@/components/MainNav";
import Hamburger from "./Hamburger";
import Dropdown from './Dropdown';

export type Page = {
    href: string;
    title: string;
};

const pages: Page[] = [
    { href: "/", title: "Home" },
    { href: "/blog", title: "Blog" },
    { href: "/games", title: "Games" },
    { href: "/showcase", title: "Showcase" },
    { href: "/about", title: "About Us" },
    { href: "/contact", title: "Contact Us" },
];

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleCloseDropdown = () => {
        setMenuOpen(false);
      };

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-blue-50 p-4">
            <div className="flex items-center justify-center lg:w-full">
                <Logo />
                <Dropdown menuOpen={menuOpen} onClose={handleCloseDropdown}/>
                <div className="hidden lg:flex">
                    <MainNav pages={pages} />
                </div>
                <div className="lg:hidden absolute right-4 flex items-center">
                    <Hamburger toggleMenu={toggleMenu} />
                </div>
            </div>
        </div>


    );
};

export default Navbar;