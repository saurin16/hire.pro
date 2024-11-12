import Image from "next/image";
import Link from "next/link";
import Navbar from '@/components/Navbar';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import img from '../images/main.png';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Navbar />
      <section id="hero" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Revolutionize Hiring
              </h1>
              <p className="text-xl mb-8">
                Hire the best talent, faster than ever
              </p>
              <Link 
                href="#get-started"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Get Started
              </Link>
            </div>
            <div className="relative h-[500px] w-full">
              <Image
                src={img}
                alt="Hiring Process Illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Add IDs to each section */}
      <section id="how-it-works" className="py-20">
        <HowItWorks />
      </section>
      <section id="features" className="py-20">
        <Features />
      </section>
      <section id="pricing" className="py-20">
        <Pricing />
      </section>

      <Footer />
    </main>
  );
}
