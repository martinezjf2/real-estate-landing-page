import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />

      <section
        id="hero"
        className="h-[500px] bg-cover bg-center relative md:h-[600px] lg:h-[700px]"
        style={{ backgroundImage: "url('/houses/modern-house-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent"></div>
        <div className="w-11/12 md:w-3/4 lg:w-2/3 mx-auto text-center relative z-10">
          <div className="pt-9">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#020202]">
              Find Your Perfect Match
            </h1>
          </div>
          <div>
            <p className="w-full md:w-4/6 mx-auto pt-7 text-[#67686a]">
              Whether you’re buying, selling, or nothing, our experienced team
              is here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      <section
        className="filtering bg-white py-8 relative rounded-t-3xl -top-10 z-20"
        id="Filtering-and-displaying-images"
      >
        <div className="relative" id="search-filtering-section">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="px-1">
              <p className="text-[#ccaf7a] pb-3 text-left">Building Type</p>
              <select className="border border-gray-200 rounded-full bg-[#f2f2f2] text-[14px] w-[500px] md:w-[12.5rem] focus:outline-none focus:ring-2 focus:ring-[#ccaf7a] focus:border-[#ccaf7a] text-gray-700">
                <option value="apartment">Apartment</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="px-1">
              <p className="text-[#ccaf7a] pb-3 text-left">Category</p>
              <select className="border border-gray-200 rounded-full bg-[#f2f2f2] text-[14px] w-[500px] md:w-[12.5rem] focus:outline-none focus:ring-2 focus:ring-[#ccaf7a] focus:border-[#ccaf7a] text-gray-700">
                <option value="buy">Buy</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="px-1">
              <p className="text-[#ccaf7a] pb-3 text-left">Location</p>
              <select className="border border-gray-200 rounded-full bg-[#f2f2f2] text-[14px] w-[500px] md:w-[12.5rem] focus:outline-none focus:ring-2 focus:ring-[#ccaf7a] focus:border-[#ccaf7a] text-gray-700">
                <option value="sunset-road">Sunset Road</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="px-1">
              <p className="text-[#ccaf7a] pb-3 text-left">Style</p>
              <select className="border border-gray-200 rounded-full bg-[#f2f2f2] text-[14px] w-[500px] md:w-[12.5rem] focus:outline-none focus:ring-2 focus:ring-[#ccaf7a] focus:border-[#ccaf7a] text-gray-700">
                <option value="minimalist">Modern Minimalist</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="px-1 pt-4 md:pt-9">
              <a
                className="bg-[#9c6700] px-5 py-3 text-white rounded-full"
                href="#"
              >
                Search
              </a>
            </div>
          </div>
        </div>

        <div className="py-16 w-11/12 mx-auto" id="handpicked-properties">
          <div className="flex flex-col md:flex-row justify-center">
            <div className="pl-0 md:pl-16 w-full md:w-1/2">
              <h1 className="text-[30px] py-3 leading-10">
                Handpicked <br /> Properties
              </h1>
            </div>

            <div className="w-full md:w-4/6 py-1 pl-0 md:pl-14">
              <p className="font-bold md:px-0">LOCK ICON</p>
              <p className="md:px-0">
                Browse our exclusive selection of top-rated properties. From
                modern apartments in the city to spacious homes in the suburbs,
                we have something to suit every lifestyle and budget.
              </p>
            </div>
          </div>
        </div>

        <div id="three-house-photos" className="px-4 md:px-28">
          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4">
            {/* House Photo 1 */}
            <div
              style={{
                backgroundImage: "url('/houses/minimalist.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="h-[260px] w-full md:w-1/3 rounded-2xl relative group overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold">Heaven House</h3>
                <p className="text-sm">3 bed, 2 bath · 2,000 sqft</p>
              </div>
            </div>
            {/* House Photo 2 */}
            <div
              style={{
                backgroundImage: "url('/houses/grasshouse.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="h-[260px] w-full md:w-1/3 rounded-2xl relative group overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold">Heaven House</h3>
                <p className="text-sm">3 bed, 2 bath · 2,000 sqft</p>
              </div>
            </div>
            {/* House Photo 3 */}
            <div
              style={{
                backgroundImage: "url('/houses/heavenHouse.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="h-[260px] w-full md:w-1/3 rounded-2xl relative group overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold">Heaven House</h3>
                <p className="text-sm">3 bed, 2 bath · 2,000 sqft</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="comprehensive-real-estate-solutions">
        <section className="pb-8">
          <div className="flex flex-col md:flex-row justify-center">
            <div className="pl-0 md:pl-28 w-full md:w-1/2">
              <h1 className="text-[30px] py-3 px-5 md:px-0 leading-10">
                Comprehensive Real <br /> Estate Solutions
              </h1>
            </div>

            <div className="w-full md:w-1/2 px-0 md:px-10">
              <div className="py-5 hidden md:flex flex-col space-y-5">
                {/* Property Rentals */}
                <div className="flex justify-start items-center pb-5">
                  <div className="pr-2">ICON</div>
                  <div className="text-xl font-medium">Property Rentals</div>
                </div>
                <div className="pr-9 text-[#ababab]">
                  We offer an extensive selection of rental properties,
                  including furnished and unfurnished options across prime
                  locations.
                </div>

                {/* Buying Guide */}
                <div className="flex justify-start items-center pb-5">
                  <div className="pr-2">ICON</div>
                  <div className="text-xl font-medium">Buying Guide</div>
                </div>
                <div className="pr-9 text-[#ababab]">
                  Our comprehensive buying guide is designed to help you
                  navigate the property market with confidence and make informed
                  decisions.
                </div>

                {/* Property Management */}
                <div className="flex justify-start items-center pb-5">
                  <div className="pr-2">ICON</div>
                  <div className="text-xl font-medium">Property Management</div>
                </div>
                <div className="pr-9 text-[#ababab]">
                  We provide full property management services to ensure your
                  investment is well-maintained and profitable.
                </div>
              </div>

              {/* Responsive Layout for Smaller Screens */}
              <div className="md:hidden w-11/12 mx-auto pb-5">
                {/* Property Rentals */}
                <div className="flex justify-start items-center pb-3">
                  <p className="font-bold md:px-0">ICON</p>
                  <h1 className="pl-2 text-xl font-medium">Property Rentals</h1>
                </div>
                <p className="md:px-0 text-[#ababab]">
                  We offer an extensive selection of rental properties,
                  including furnished and unfurnished options across prime
                  locations.
                </p>
              </div>

              <div className="md:hidden w-11/12 mx-auto pb-5">
                {/* Buying Guide */}
                <div className="flex justify-start items-center pb-3">
                  <p className="font-bold md:px-0">ICON</p>
                  <h1 className="pl-2 text-xl font-medium">Buying Guide</h1>
                </div>
                <p className="md:px-0 text-[#ababab]">
                  Our comprehensive buying guide is designed to help you
                  navigate the property market with confidence and make informed
                  decisions.
                </p>
              </div>

              <div className="md:hidden w-11/12 mx-auto pb-5">
                {/* Property Management */}
                <div className="flex justify-start items-center pb-3">
                  <p className="font-bold md:px-0">ICON</p>
                  <h1 className="pl-2 text-xl font-medium">
                    Property Management
                  </h1>
                </div>
                <p className="md:px-0 text-[#ababab]">
                  We provide full property management services to ensure your
                  investment is well-maintained and profitable.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
}
