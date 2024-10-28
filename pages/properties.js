import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Properties() {
  const propertiesData = [
    {
      id: 1,
      image: "/houses/apartments.jpg",
      title: "Luxury Villa",
      location: "Malibu",
      price: "$3,000,000",
    },
    {
      id: 2,
      image: "/houses/apartments.jpg",
      title: "Modern Apartment",
      location: "New York",
      price: "$1,200,000",
    },
    // Add more properties as needed
  ];

  const servicesData = [
    "Property Management",
    "Real Estate Consulting",
    "Home Staging",
    "Market Analysis",
    "Investment Strategies",
  ];

  return (
    <div>
      <Navbar />
      <div className="px-8 py-16 text-center">
        <h1 className="text-3xl font-semibold mb-12">Available Properties</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {propertiesData.map((property) => (
            <div
              key={property.id}
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <Image
                src={property.image}
                alt={property.title}
                width={500}
                height={300}
                className="rounded-lg"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                <h2 className="text-lg font-semibold">{property.title}</h2>
                <p className="text-sm">{property.location}</p>
                <p className="text-sm font-semibold">{property.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About Our Properties Section */}
      <div className="px-8 py-16 bg-gray-100 text-center">
        <h2 className="text-2xl font-semibold mb-6">About Our Properties</h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-4">
          At Portos, we pride ourselves on offering a curated selection of
          luxury properties that cater to diverse lifestyles and tastes. Our
          portfolio includes everything from stunning beachfront villas to
          modern urban apartments, all equipped with top-of-the-line amenities
          and situated in prime locations. Whether you&lsquo;re looking for a
          new home or an investment opportunity, we ensure a seamless and
          rewarding experience for our clients.
        </p>
        <p className="max-w-3xl mx-auto text-gray-700">
          Explore our listings to find your perfect property today!
        </p>
      </div>

      {/* Services Section */}
      <div className="px-8 py-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
        <ul className="max-w-2xl mx-auto space-y-3 text-gray-700">
          {servicesData.map((service, index) => (
            <li key={index} className="text-lg">
              • {service}
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  );
}
