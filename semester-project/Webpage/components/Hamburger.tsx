"use client"
import React, { MouseEvent } from 'react';

interface HamburgerProps {
    toggleMenu: () => void;
}

const Hamburger: React.FC<HamburgerProps> = ({ toggleMenu }) => {
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      toggleMenu();
    };

    return (
        <button
          className="text-blue-900 focus:outline-none lg:hidden"
          onClick={handleClick} 
        >
          <svg
            className="h-10 w-10" 
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      );
};

export default Hamburger;

