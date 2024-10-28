import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

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
          <button
            onClick={togglePopup}
            className="bg-[#9c6700] px-5 py-2 text-white rounded-full"
          >
            Contact Us
          </button>
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
            <button
              onClick={() => {
                togglePopup();
                setIsOpen(false);
              }}
              className="bg-[#9c6700] px-5 py-2 text-white rounded-full w-full text-center"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
            <button
              onClick={togglePopup}
              className="absolute top-2 right-4 text-gray-600 text-lg"
            >
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 block w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 p-2 block w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  className="mt-1 p-2 block w-full border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#9c6700] text-white py-2 rounded-md font-medium hover:bg-[#805300] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
