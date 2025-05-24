import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed w-full bg-white/90 backdrop-blur-sm z-50 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="#" className="font-poppins font-bold text-2xl text-gradient">Musilina</a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="font-medium text-dark hover:text-primary transition-colors duration-200 nav-link-hover">Features</a>
            <a href="#how-it-works" className="font-medium text-dark hover:text-primary transition-colors duration-200 nav-link-hover">How It Works</a>
            <a href="#testimonials" className="font-medium text-dark hover:text-primary transition-colors duration-200 nav-link-hover">Testimonials</a>
            <a href="#pricing" className="font-medium text-dark hover:text-primary transition-colors duration-200 nav-link-hover">Pricing</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#contact" className="px-6 py-2 rounded-full bg-gradient-primary text-white font-medium hover:shadow-lg transition-shadow duration-300">Get Started</a>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-dark focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} py-4 border-t border-gray-100`}>
          <div className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="font-medium text-dark hover:text-primary px-4 py-2 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="font-medium text-dark hover:text-primary px-4 py-2 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="font-medium text-dark hover:text-primary px-4 py-2 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="font-medium text-dark hover:text-primary px-4 py-2 transition-colors duration-200"
              onClick={closeMobileMenu}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="px-6 py-2 mx-4 text-center rounded-full bg-gradient-primary text-white font-medium hover:shadow-lg transition-shadow duration-300"
              onClick={closeMobileMenu}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
