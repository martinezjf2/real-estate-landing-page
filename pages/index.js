import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <section id="navbar" className="relative bg-white py-7">
        <div className="flex justify-between px-9 ">
          <div className="flex">
            <div>Logo Image</div>
            <div>Portos</div>
          </div>
          <div>
            <div>
              <a className="px-7" href="#">
                Home
              </a>
              <a className="px-7" href="#">
                About Us
              </a>
              <a className="px-7" href="#">
                Properties
              </a>
              <a className="px-7" href="#">
                Services
              </a>
            </div>
          </div>
          <div>
            <div className="">
              <a
                className="bg-[#9c6700] px-5 py-3 text-white rounded-full"
                href="#"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="hero"
        className="h-[500px] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/houses/modern-house-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
        <div className="w-3/4 mx-auto text-center relative z-10">
          <div className="pt-9">
            <h1 className="text-[44px]">Find Your Perfect Match</h1>
          </div>
          <div>
            <p className="w-4/6 mx-auto pt-7 text-[#a3a5a6]">
              Whether you're buying, selling, or nothing, our experienced team
              is here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
