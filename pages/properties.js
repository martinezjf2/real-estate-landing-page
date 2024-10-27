import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ComingSoon from "@/components/ComingSoon";

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

      <Footer />
    </div>
  );
}

// Replicate this page: https://www.onekeymls.com/
