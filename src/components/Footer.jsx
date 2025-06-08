import React from 'react';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#0d3b66] to-[#144b5b] text-white font-sans pt-12 pb-6">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Clinic Info */}
        <div>
          <h4 className="text-xl font-bold mb-4">Mehreen Dental Clinic</h4>
          <p className="text-sm mb-2 flex items-center gap-2">
            <FaMapMarkerAlt className="text-teal-300" />
            Chaudhry Bostan Khan Rd, above Allied Bank, Gulrez Housing Scheme,
            Rawalpindi, Punjab 46000
          </p>
          <p className="text-sm mb-2 flex items-center gap-2">
            <FaPhone className="text-teal-300" />
            <a href="tel:+923331936193" className="hover:underline">
              +92 333 1936193
            </a>
          </p>
          <p className="text-sm flex items-center gap-2">
            <FaEnvelope className="text-teal-300" />
            <a
              href="mailto:info@mehreendental.com"
              className="hover:underline"
            >
              info@mehreendental.com
            </a>
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Quick Links">
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Dental Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:underline">
                Blog
              </a>
            </li>
          </ul>
        </nav>

        {/* Services */}
        <nav aria-label="Top Services">
          <h4 className="text-xl font-bold mb-4">Top Services</h4>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="/dental-implants-rawalpindi"
                className="hover:underline"
              >
                Dental Implants Rawalpindi
              </a>
            </li>
            <li>
              <a
                href="/braces-aligners-rawalpindi"
                className="hover:underline"
              >
                Braces & Aligners
              </a>
            </li>
            <li>
              <a
                href="/root-canal-rawalpindi"
                className="hover:underline"
              >
                Root Canal Treatment
              </a>
            </li>
            <li>
              <a
                href="/teeth-whitening-rawalpindi"
                className="hover:underline"
              >
                Teeth Whitening
              </a>
            </li>
          </ul>
        </nav>

        {/* Social & SEO */}
        <div>
          <h4 className="text-xl font-bold mb-4">Connect With Us</h4>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.facebook.com/mehreendentalclinic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-lg hover:text-blue-300 transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/mehreendentalclinic"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-lg hover:text-pink-300 transition-colors" />
            </a>
            <a
              href="https://wa.me/923331936193"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-lg hover:text-green-300 transition-colors" />
            </a>
          </div>
          <p className="text-sm">
            Looking for a{' '}
            <strong>
              dentist in Rawalpindi or Gulrez Housing Scheme, Rawalpindi
            </strong>
            ? Visit Mehreen Dental Clinic for state-of-the-art, pain-free
            dental care.
          </p>
        </div>
      </div>

      <div className="text-center mt-10 text-xs text-gray-300 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Mehreen Dental Clinic, Rawalpindi. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
