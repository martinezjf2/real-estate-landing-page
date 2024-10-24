import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ComingSoon from "@/components/ComingSoon";

const inter = Inter({ subsets: ["latin"] });

export default function Services() {
  return (
    <div>
      <Navbar />
      <ComingSoon />
      <Footer />
    </div>
  );
}
