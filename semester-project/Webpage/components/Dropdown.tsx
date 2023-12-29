"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface DropdownProps {
  menuOpen: boolean;
  onClose: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ menuOpen, onClose }) => {
  const [visible, setVisible] = useState(false);

  const handleLinkClick = (href: string) => {
    onClose();
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (menuOpen) {
      timeout = setTimeout(() => {
        setVisible(true);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setVisible(false);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [menuOpen]);

  return (
    <>
      { (
        <div
          className={`lg:hidden absolute top-24 right-1 p-1 space-y-2 font-roboto-condensed 
          text-brand-blue-900 rounded-md text-xl overflow-hidden transition-transform duration-500 
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <ul className="list-none p-0 m-0 font-bold uppercase">
            <li className="mb-1 text-center">
              <Link href="/" onClick={() => handleLinkClick('/')}>
                <span className="rounded-sm block uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 mx-auto w-32 bg-brand-blue-50 hover:bg-brand-blue-200 text-2xl transition-all duration-300 ease-in-out">
                  Home
                </span>
              </Link>
            </li>
            <li className="mb-1 text-center">
              <Link href="/blog" onClick={() => handleLinkClick('/blog')}>
                <span className="rounded-sm block uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 mx-auto w-32 bg-brand-blue-50 hover:bg-brand-blue-200 text-2xl transition-all duration-300 ease-in-out">
                  Blog
                </span>
              </Link>
            </li>

            <li className="mb-1 text-center">
              <Link href="/about" onClick={() => handleLinkClick('/about')}>
                <span className="rounded-sm block uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 mx-auto w-32 bg-brand-blue-50 hover:bg-brand-blue-200 text-2xl transition-all duration-300 ease-in-out">
                  About Us
                </span>
              </Link>
            </li>
            <li className="mb-1 text-center">
              <Link href="/store" onClick={() => handleLinkClick('/store')}>
                <span className="rounded-sm block uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 mx-auto w-32 bg-brand-blue-50 hover:bg-brand-blue-200 text-2xl transition-all duration-300 ease-in-out">
                  Store
                </span>
              </Link>
            </li>
            <li className="mb-1 text-center">
              <Link href="/games" onClick={() => handleLinkClick('/games')}>
                <span className="rounded-sm block uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 mx-auto w-32 bg-brand-blue-50 hover:bg-brand-blue-200 text-2xl transition-all duration-300 ease-in-out">
                  Games
                </span>
              </Link>
            </li>
            <li className="mb-1 text-center">
              <Link href="/contact" onClick={() => handleLinkClick('/contact')}>
                <span className="rounded-sm block uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 mx-auto w-32 bg-brand-blue-50 hover:bg-brand-blue-200 text-2xl transition-all duration-300 ease-in-out">
                  Contact Us
                </span>
              </Link>
            </li>
          </ul >
        </div >
      )}
    </>
  );
};

export default Dropdown;
