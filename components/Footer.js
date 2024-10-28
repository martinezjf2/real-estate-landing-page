import React from "react";

export default function Footer() {
  return (
    <section id="footer" className="bg-[#010101]">
      <div className="text-[#686868] py-9 px-6 md:px-18 flex flex-col md:flex-row justify-evenly">
        {/* Quick Links */}
        <div className="mb-6 md:mb-0">
          <h3 className="pb-4 font-medium text-[#f0f0f0]">Quick Links</h3>
          <a className="block pb-3" href="#">
            Home
          </a>
          <a className="block pb-3" href="#">
            About Us
          </a>
          <a className="block pb-3" href="#">
            Properties
          </a>
          <a className="block" href="#">
            Services
          </a>
        </div>

        {/* Find Us */}
        <div className="mb-6 md:mb-0">
          <h3 className="pb-4 font-medium text-[#f0f0f0]">Find Us</h3>
          <a className="block pb-3" href="#">
            Facebook
          </a>
          <a className="block pb-3" href="#">
            Instagram
          </a>
          <a className="block pb-3" href="#">
            Twitter
          </a>
          <a className="block" href="#">
            LinkedIn
          </a>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-6 md:mb-0 w-full md:w-3/12">
          <h3 className="pb-4 font-medium text-[#f0f0f0]">Newsletter Signup</h3>
          <p className="pb-3 text-[14px]">
            Stay updated with the listings from Portos. Sign up for our
            newsletter.
          </p>
          <form className="relative">
            <input
              type="email"
              className="bg-[#1a1a1a] border-none rounded-full pl-5 py-3 w-full text-[12px] pr-20"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#9c6700] text-white px-4 py-2 rounded-full text-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
