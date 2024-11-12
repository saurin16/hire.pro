'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle link click and close menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="#hero" className="font-bold text-xl text-blue-600" onClick={handleLinkClick}>
            HirePro
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600" onClick={handleLinkClick}>
              How It Works
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-blue-600" onClick={handleLinkClick}>
              Features
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-blue-600" onClick={handleLinkClick}>
              Pricing
            </Link>
            <Link 
              href="#get-started" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              onClick={handleLinkClick}
            >
              Get Started
            </Link>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu - controlled by `isOpen` */}
        <div className={`md:hidden py-4 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col space-y-4">
            <Link href="#how-it-works" className="text-gray-700 hover:text-blue-600" onClick={handleLinkClick}>
              How It Works
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-blue-600" onClick={handleLinkClick}>
              Features
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-blue-600" onClick={handleLinkClick}>
              Pricing
            </Link>
            <Link 
              href="#get-started" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-center"
              onClick={handleLinkClick}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
