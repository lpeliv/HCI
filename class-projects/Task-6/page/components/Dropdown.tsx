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
    if (href === '/') {
      onClose();
    } else  if (href === '/blog') {
      onClose();
    } else  if (href === '/about') {
      onClose();
    }else  if (href === '/store') {
      onClose();
    }else  if (href === '/games') {
      onClose();
    } else  if (href === '/contact') {
      onClose();
    }
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
      {visible && (
        <div
          className={`lg:hidden absolute top-24 right-2 p-1 space-y-2 font-roboto text-blue-100 rounded-md text-xl overflow-hidden transition-transform duration-1000 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <ul className="list-none p-0 m-0 ">
            <li className="mb-1 bg-blue-100 rounded-md p-2 text-center text-blue-800">
              <Link href="/" onClick={() => handleLinkClick('/')}>
                Home
              </Link>
            </li>
            <li className="mb-1 bg-blue-100 rounded-md p-1 text-center text-blue-800">
              <Link href="/blog" onClick={() => handleLinkClick('/blog')}>
                Blog
              </Link>
            </li>
            <li className="mb-1 bg-blue-100 rounded-md p-1 text-center text-blue-800">
              <Link href="/about" onClick={() => handleLinkClick('/about')}>
                About Us
              </Link>
            </li>
            <li className="mb-1 bg-blue-100 rounded-md p-1 text-center text-blue-800">
              <Link href="/store" onClick={() => handleLinkClick('/store')}>
                Store
              </Link>
            </li>
            <li className="mb-1 bg-blue-100 rounded-md p-1 text-center text-blue-800">
              <Link href="/games" onClick={() => handleLinkClick('/games')}>
                Games
              </Link>
            </li>
            <li className="mb-1 bg-blue-100 rounded-md p-1 text-center text-blue-800">
              <Link href="/contact" onClick={() => handleLinkClick('/contact')}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Dropdown;
