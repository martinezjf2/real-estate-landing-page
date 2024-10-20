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
            <h1 className="text-[44px] text-[#020202]">
              Find Your Perfect Match
            </h1>
          </div>
          <div>
            <p className="w-4/6 mx-auto pt-7 text-[#67686a]">
              Whether you're buying, selling, or nothing, our experienced team
              is here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      <section className="filtering bg-white py-8 relative rounded-t-3xl -top-10 z-20">
        <div className="relative" id="search-filtering-section">
          <div className="flex justify-center items-center">
            <div className="px-1">
              <p className="text-[#ccaf7a] pb-3 text-left">Building Type</p>
              <select
                className="border border-gray-200 rounded-full bg-[#f2f2f2] text-[14px] w-[12.5rem] focus:outline-none focus:ring-2 focus:ring-[#ccaf7a] focus:border-[#ccaf7a] text-gray-700"
                name="cars"
                id="cars"
              >
                <option value="apartment">Apartment</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="px-1">
              <p className="text-[#ccaf7a] pb-3 text-left">Category</p>
              <select
                className="border border-gray-200 rounded-full bg-[#f2f2f2] text-[14px] w-[12.5rem] focus:outline-none focus:ring-2 focus:ring-[#ccaf7a] focus:border-[#ccaf7a] text-gray-700"
                name="cars"
                id="cars"
              >
                <option value="buy">Buy</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="px-1">
              <p className="text-[#ccaf7a] pb-3 text-left">Location</p>
              <select
                className="border border-gray-200 rounded-full bg-[#f2f2f2] text-[14px] w-[12.5rem] focus:outline-none focus:ring-2 focus:ring-[#ccaf7a] focus:border-[#ccaf7a] text-gray-700"
                name="cars"
                id="cars"
              >
                <option value="sunset-road">Sunset Road</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="px-1">
              <p className="text-[#ccaf7a] pb-3 text-left">Style</p>
              <select
                className="border border-gray-200 rounded-full bg-[#f2f2f2] text-[14px] w-[12.5rem] focus:outline-none focus:ring-2 focus:ring-[#ccaf7a] focus:border-[#ccaf7a] text-gray-700"
                name="cars"
                id="cars"
              >
                <option value="minimalist">Modern Minimalist</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="px-1 mt-7">
              <a
                className="bg-[#9c6700] px-5 py-3 text-white rounded-full"
                href="#"
              >
                Search
              </a>
            </div>
          </div>
        </div>

        <div className="py-16  w-11/12 mx-auto" id="handpicked-properties">
          <div className="flex justify-center">
            <div className="text-left">
              <h1 className="text-[2rem] leading-tight pr-9">
                Handpicked <br></br>Properties
              </h1>
            </div>
            <div className="w-4/6 py-1 pl-14">
              <p className="font-bold">LOCK ICON</p>
              <p className="">
                Browse our exclusive selection of top-rated properties. From
                modern apartments in the city to spacious homes in the suburbs,
                we have something to suit every lifestyle and budget.
              </p>
            </div>
          </div>
        </div>

        <div id="three-house-photos" className="px-36">
          <div className="flex justify-between space-x-4">
            <div
              style={{
                backgroundImage: "url('/houses/minimalist.jpg')",
                backgroundSize: "cover", // Ensures the image covers the entire div
                backgroundPosition: "center", // Centers the image within the div
                backgroundRepeat: "no-repeat",
              }}
              className="h-[260px] w-1/3 rounded-2xl relative group overflow-hidden"
            >
              {/* Overlay for house information */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold">Heaven House</h3>
                <p className="text-sm">3 bed, 2 bath · 2,000 sqft</p>
              </div>
            </div>
            <div
              style={{
                backgroundImage: "url('/houses/grasshouse.jpeg')",
                backgroundSize: "cover", // Ensures the image covers the entire div
                backgroundPosition: "center", // Centers the image within the div
                backgroundRepeat: "no-repeat",
              }}
              className="h-[260px] w-1/3 rounded-2xl relative group overflow-hidden"
            >
              {/* Overlay for house information */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold">Heaven House</h3>
                <p className="text-sm">3 bed, 2 bath · 2,000 sqft</p>
              </div>
            </div>
            <div
              style={{
                backgroundImage: "url('/houses/heavenHouse.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="h-[260px] w-1/3 rounded-2xl relative group overflow-hidden"
            >
              {/* Overlay for house information */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold">Heaven House</h3>
                <p className="text-sm">3 bed, 2 bath · 2,000 sqft</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
