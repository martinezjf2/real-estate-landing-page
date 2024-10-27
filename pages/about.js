import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ComingSoon from "@/components/ComingSoon";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div>
      <Navbar />
      <section id="about">
        <div className="text-center p-10 shadow-md">
          <div>
            <h1 className="text-[30px] pb-5 tracking-wide">About Portos®</h1>
          </div>
          <div>
            <p className="tracking-wide font-light">
              OneKey® MLS has the most accurate listings in metropolitan New
              York, straight from the largest-REALTOR®-run multiple listing
              service in the Empire State. With more than 45,000 REALTORS®
              across Long Island, Hudson Valley, Manhattan, and parts of
              Connecticut and New Jersey, we can help you find a home
              you&rsquo;ll love.
            </p>
          </div>
        </div>
        <div className="p-10">
          <div>
            <h1 className="tracking-wide font-bold pb-2 text-[18px]">
              The best listing data lives here.
            </h1>
          </div>
          <div>
            <p className="tracking-wide font-light text-[16px]">
              Every buyer, seller, and REALTOR® deserve real-time access to
              accurate, up-to-the-minute real estate listing data. Because our
              data comes straight out of the MLS and is constantly maintained by
              the REALTORS® who represent our listings, you can count on the
              accuracy and timeliness of our listings for sale and rent.
            </p>
          </div>
          <div className="pt-4">
            <a
              href="#"
              className="text-[13px] border px-3 py-[6px] rounded-md font-medium"
            >
              Find a Home
            </a>
          </div>
        </div>

        <div className="border-t-2 py-2 w-11/12 mx-auto"></div>

        <div className="p-10">
          <div>
            <h1 className="tracking-wide font-bold pb-2 text-[18px]">
              Accurate listings from REALTORS® who care.
            </h1>
          </div>
          <div>
            <p className="tracking-wide font-light text-[16px]">
              REALTORS® aren&rsquo;t just real estate salespeople. They&rsquo;re
              real estate professionals who have pledged to uphold the ethical
              standards and practices of the National Association of REALTORS®.
              That means that they&rsquo;re obligated to represent every
              listing, buyer, and seller fairly and honestly so that you can
              rely on the pictures and property descriptions you find on our
              site.
            </p>
          </div>
          <div className="pt-4">
            <a
              href="#"
              className="text-[13px] border px-3 py-[6px] rounded-md font-medium"
            >
              Find a REALTOR®
            </a>
          </div>
        </div>

        <div className="border-t-2 py-2 w-11/12 mx-auto"></div>

        <div className="p-10">
          <div>
            <h1 className="tracking-wide font-bold pb-2 text-[18px]">
              Who is OneKey® MLS?
            </h1>
          </div>
          <div>
            <p className="tracking-wide font-light text-[16px]">
              OneKey® MLS is owned and operated by the Long Island Board of
              REALTORS® and the Hudson Gateway Association of REALTORS®. We are
              the ninth-largest multiple listing service in the United States,
              with more than 300,000 active, pending, and sold listings on this
              site that originate from our more than 45,000 REALTOR® members.
              OneKey® MLS is committed to technological excellence and service
              to our community, which is why our listings are the freshest in
              the New York Metropolitan Area.
            </p>
          </div>
          <div className="pt-4">
            <a
              href="#"
              className="text-[13px] border px-3 py-[6px] rounded-md font-medium"
            >
              Find Out More about OneKey® MLS
            </a>
          </div>
        </div>

        {/* <div className="border-t-2 py-2 w-11/12 mx-auto"></div> */}

        <div className="p-10">
          <div>
            <h1 className="tracking-wide font-bold pb-2 text-[18px]">
              Our Leadership
            </h1>
          </div>
          <div>
            <p className="tracking-wide font-light text-[16px]">
              Many people may not realize that working REALTORS® own and operate
              OneKey® MLS, which is why our listings are different than those
              found on other third-party property portals. On our site,
              you&rsquo;ll find that only the listing broker(s) is featured on
              every property so that you know exactly who to call. Our
              leadership enforces business rules designed to protect consumers
              and make the real estate market fair and competitive. Our first
              priority is always to connect you to the right REALTOR® for you so
              that you can find the home you want and get the responsible
              counsel and expertise you need, every step of the way.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

// Used this template for this page: https://www.onekeymls.com/about-us
