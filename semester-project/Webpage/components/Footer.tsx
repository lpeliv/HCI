import React from 'react';
import Link from 'next/link';
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-blue-50 py-10">
      <div className="mx-auto flex flex-col lg:flex-row lg:justify-center items-center">
        <div className="mb-4 lg:mr-8">
          <a href="/" className="font-roboto-condensed text-8xl font-bold hover:text-blue-400 mb-2 text-blue-100">
            GD
          </a>
        </div>
        <div className="font-roboto-condensed text-blue-100 text-xl font-bold uppercase grid grid-cols-2 lg:grid-cols-3 gap-4 text-center">
          <Link href="/blog" passHref>
            <div className="hover:text-blue-400">Blog</div>
          </Link>
          <Link href="/about" passHref>
            <div className="hover:text-blue-400">About Us</div>
          </Link>
          <Link href="/store" passHref>
            <div className="hover:text-blue-400">Store</div>
          </Link>
          <Link href="/games" passHref>
            <div className="hover:text-blue-400">Games</div>
          </Link>
          <Link href="/contact" passHref className="col-span-2">
            <div className="hover:text-blue-400">Contact Us</div>
          </Link>
        </div>

      </div>
      <div className="text-center text-blue-50 text-sm mt-4">
        © 2023 GameDev Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
