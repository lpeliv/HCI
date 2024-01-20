"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface DropdownProps {
  menuOpen: boolean;
  onClose: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ menuOpen, onClose }) => {
  const [visible, setVisible] = useState(false);

  const handleLinkClick = () => {
    onClose();
  };

  const isActive = (href: string) => {

    if (typeof window !== 'undefined') {
      return window.location.pathname === href;
    }
  
    return false;
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
      
        <div
          className={`lg:hidden absolute top-24 right-1 p-1 space-y-2 font-roboto-condensed 
          text-brand-blue-900 rounded-md text-xl overflow-hidden transition-transform duration-500 
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <ul className="list-none p-0 m-0 font-bold uppercase">
            <li className="mb-1 text-center">
              <Link href="/" onClick={handleLinkClick}>
                <span
                  className={`rounded-sm block uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 mx-auto w-32 ${isActive('/') ? 'bg-brand-blue-900 text-blue-50' : 'bg-brand-blue-50'
                    } hover:bg-brand-blue-200 text-2xl transition-all duration-300 ease-in-out`}
                >
                  Home
                </span>
              </Link>
            </li>
            <li className="mb-1 text-center">
              <Link href="/blog" onClick={handleLinkClick}>
                <span
                  className={`rounded-sm block uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 mx-auto w-32 ${isActive('/blog') ? 'bg-brand-blue-900 text-blue-50' : 'bg-brand-blue-50'
                    } hover:bg-brand-blue-200 text-2xl transition-all duration-300 ease-in-out`}
                >
                  Blog
                </span>
              </Link>
            </li>
            <li className="mb-1 text-center">
              <Link href="/about" onClick={handleLinkClick}>
                <span
                  className={`rounded-sm block uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 mx-auto w-32 ${isActive('/about') ? 'bg-brand-blue-900 text-blue-50' : 'bg-brand-blue-50'
                    } hover:bg-brand-blue-200 text-2xl transition-all duration-300 ease-in-out`}
                >
                  About
                </span>
              </Link>
            </li>
            <li className="mb-1 text-center">
              <Link href="/contact" onClick={handleLinkClick}>
                <span
                  className={`rounded-sm block uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 mx-auto w-32 ${isActive('/contact') ? 'bg-brand-blue-900 text-blue-50' : 'bg-brand-blue-50'
                    } hover:bg-brand-blue-200 text-2xl transition-all duration-300 ease-in-out`}
                >
                  Contact us
                </span>
              </Link>
            </li>
            <li className="mb-1 text-center">
              <Link href="/games" onClick={handleLinkClick}>
                <span
                  className={`rounded-sm block uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 mx-auto w-32 ${isActive('/games') ? 'bg-brand-blue-900 text-blue-50' : 'bg-brand-blue-50'
                    } hover:bg-brand-blue-200 text-2xl transition-all duration-300 ease-in-out`}
                >
                  Games
                </span>
              </Link>
            </li>
            <li className="mb-1 text-center">
              <Link href="/showcase" onClick={handleLinkClick}>
                <span
                  className={`rounded-sm block uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 mx-auto w-32 ${isActive('/store') ? 'bg-brand-blue-900 text-blue-50' : 'bg-brand-blue-50'
                    } hover:bg-brand-blue-200 text-2xl transition-all duration-300 ease-in-out`}
                >
                  Showcase
                </span>
              </Link>
            </li>
          </ul >
        </div >
    
    </>
  );
};

export default Dropdown;
