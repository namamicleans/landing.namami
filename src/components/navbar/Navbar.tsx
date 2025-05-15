import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Shield, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Be Captain", path: "/hiring/captain" },
    { name: "Hiring", path: "/hiring" },
    { name: "Blog", path: "/blog" },
  ];

  // Check if we're on the home page
  const isHomePage = location.pathname === "/";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="z-10">
          <img src="/namami_logo.png" alt="Logo" className="h-8" />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors duration-300 ${scrolled
                ? location.pathname === link.path
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary"
                : isHomePage
                  ? "text-white hover:text-gray-200"
                  : "text-primary hover:text-primary-600"
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link to="https://app.namamicleans.com" target="_blank">
            <Button>
              Login
              <ShieldCheck />
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden focus:outline-none z-10"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu
              size={24}
              className={
                scrolled
                  ? "text-gray-800"
                  : isHomePage
                    ? "text-white"
                    : "text-primary"
              }
            />
          )}
        </button>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 bg-gradient-to-tl from-primary-500 to-primary-800 transition-all duration-300 ${isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
            }`}
        >
          <div className="container mx-auto h-full flex flex-col justify-center items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-white text-2xl my-4 hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="https://app.namamicleans.com"
              target="_blank"
              onClick={() => setIsOpen(false)}
            >
              <Button className="mt-6 bg-secondary text-primary-800 hover:bg-secondary-600">
                Login
                <ShieldCheck />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
