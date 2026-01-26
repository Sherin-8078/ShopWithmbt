import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const linkClass =
    "text-gray-600 hover:text-black transition-colors inline-block";

  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-black mb-4">
              Shop with mbt
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Quality products with exceptional service. Your trusted local business.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-black mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/product" className={linkClass}>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={linkClass}>
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={linkClass}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-black mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600">
                <Phone size={20} className="flex-shrink-0 mt-0.5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <Mail size={20} className="flex-shrink-0 mt-0.5" />
                <span>hello@yourbrand.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <MapPin size={20} className="flex-shrink-0 mt-0.5" />
                <span>Near Akshaya, Pannivizha, Adoor</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Shop with mbt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
