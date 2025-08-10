import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-500 to-primary-900 text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="mb-8 lg:col-span-2">
            <Logo />
            <p className="mt-4 mb-6 text-gray-300">
              Professional cleaning services at your doorstep. We provide
              top-quality services tailored to your needs.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61567913092300"
                className="text-gray-300 hover:text-secondary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/namamicleans/"
                className="text-gray-300 hover:text-secondary transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-secondary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/namami-cleans"
                className="text-gray-300 hover:text-secondary transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/hiring"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/hiring/captain"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Become a Captain
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services#home-cleaning"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Home Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services#office-cleaning"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Office Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services#deep-cleaning"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services#post-construction"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Post Construction Cleaning
                </Link>
              </li>
              <li>
                <Link
                  to="/services#carpet-cleaning"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Carpet Cleaning
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-cancellation-policy"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Refund & Cancellation Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-secondary" />
                <span>Civil Lines, SATI College, Vidisha, Madhya Pradesh</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-secondary" />
                <span>+91-8770490169</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-secondary" />
                <span>support@namamicleans.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Namami Cleans. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
