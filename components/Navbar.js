import React from "react";
import Link from "next/link"; // Import Link from Next.js

export default function Navbar() {
  return (
    <section id="navbar" className="relative bg-white py-7">
      <div className="flex justify-between px-9 ">
        <div className="flex">
          <div>Logo Image</div>
          <div>Portos</div>
        </div>
        <div>
          <div>
            <Link href="/" className="px-7">
              Home
            </Link>
            <Link href="/about" className="px-7">
              About Us
            </Link>
            <Link href="/properties" className="px-7">
              Properties
            </Link>
            <Link href="/services" className="px-7">
              Services
            </Link>
          </div>
        </div>
        <div>
          <div className="">
            <Link
              href="#"
              className="bg-[#9c6700] px-5 py-3 text-white rounded-full"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
