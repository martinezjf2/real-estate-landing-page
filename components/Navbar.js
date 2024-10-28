import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="navbar" className="relative bg-white py-5 shadow-md">
      <div className="flex justify-between items-center px-6 md:px-9">
        {/* Logo */}
        <div className="flex justify-start items-center space-x-2">
          <div>
            <Image src="/houses/logo.png" alt="logo" width={30} height={30} />
          </div>
          <div className="font-semibold text-lg">Portos</div>
        </div>

        {/* Menu Toggle Button for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:space-x-6">
          <Link href="/" className="px-5 py-2 text-gray-700">
            Home
          </Link>
          <Link href="/about" className="px-5 py-2 text-gray-700">
            About Us
          </Link>
          <Link href="/properties" className="px-5 py-2 text-gray-700">
            Properties
          </Link>
          <Link href="/services" className="px-5 py-2 text-gray-700">
            Services
          </Link>
          <Link
            href="#"
            className="bg-[#9c6700] px-5 py-2 text-white rounded-full"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link
              href="/"
              className="px-5 py-2 text-gray-700 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-5 py-2 text-gray-700 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/properties"
              className="px-5 py-2 text-gray-700 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Properties
            </Link>
            <Link
              href="/services"
              className="px-5 py-2 text-gray-700 w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#"
              className="bg-[#9c6700] px-5 py-2 text-white rounded-full w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
