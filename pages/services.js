import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ComingSoon from "@/components/ComingSoon";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Services() {
  const servicesData = [
    {
      id: 1,
      title: "Property Listings",
      description:
        "Browse a curated selection of properties for sale or rent, tailored to fit various needs and budgets.",
      image: "/images/property-listings.jpg",
    },
    {
      id: 2,
      title: "Consultations",
      description:
        "Book a one-on-one consultation with our real estate experts to help you make informed decisions.",
      image: "/images/consultations.jpg",
    },
    {
      id: 3,
      title: "Market Analysis",
      description:
        "Receive comprehensive market analysis reports to understand property value trends in different neighborhoods.",
      image: "/images/market-analysis.jpg",
    },
    {
      id: 4,
      title: "Virtual Tours",
      description:
        "Explore properties remotely with our high-quality, interactive virtual tours.",
      image: "/images/virtual-tours.jpg",
    },
    {
      id: 5,
      title: "Legal Assistance",
      description:
        "Our legal team assists with contracts, negotiations, and paperwork to ensure smooth transactions.",
      image: "/images/legal-assistance.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>Portos | Real Estate Landing Page</title>
      </Head>
      <div>
        <Navbar />
        <div className="px-8 py-16 space-y-24 bg-gray-50">
          {/* Overview Section */}
          <section className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-800">
              Our Real Estate Services
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a range of real estate services designed to simplify your
              buying, selling, or renting experience.
            </p>
          </section>

          {/* Service Cards Section */}
          <section className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="relative bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="rounded-t-lg"
                  objectFit="cover"
                />
                <div className="p-6 space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {service.title}
                  </h2>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Testimonials Section */}
          <section className="bg-white p-12 rounded-lg shadow-md space-y-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our clients love working with us. Here&rsquo;s what they have to
              say about our services.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <blockquote className="p-6 bg-gray-100 rounded-lg shadow">
                <p className="text-gray-600">
                  &ldquo;The team helped me find my dream home quickly and made
                  the process stress-free.&ldquo;
                </p>
                <cite className="mt-4 text-sm font-semibold text-gray-700">
                  - Sarah W.
                </cite>
              </blockquote>
              <blockquote className="p-6 bg-gray-100 rounded-lg shadow">
                <p className="text-gray-600">
                  &ldquo;Excellent virtual tours that made me feel confident
                  even before visiting in person.&ldquo;
                </p>
                <cite className="mt-4 text-sm font-semibold text-gray-700">
                  - James P.
                </cite>
              </blockquote>
              <blockquote className="p-6 bg-gray-100 rounded-lg shadow">
                <p className="text-gray-600">
                  &ldquo;The market analysis was spot-on, and I sold my property
                  above asking price!&ldquo;
                </p>
                <cite className="mt-4 text-sm font-semibold text-gray-700">
                  - Maria R.
                </cite>
              </blockquote>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="text-center space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg text-gray-800">
                  How can I book a consultation?
                </h3>
                <p className="text-gray-600">
                  You can book a consultation through our website or by calling
                  our office directly.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg text-gray-800">
                  What are virtual tours?
                </h3>
                <p className="text-gray-600">
                  Virtual tours are immersive online experiences that let you
                  explore properties from your computer or mobile device.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-lg text-gray-800">
                  Is market analysis included in your services?
                </h3>
                <p className="text-gray-600">
                  Yes, we provide in-depth market analysis for our clients to
                  help them make informed decisions.
                </p>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}
