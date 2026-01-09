import { useState } from "react";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal";
import logo from "../assets/GEO.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-20 bg-transparent">
        <div className="flex items-center justify-between px-4 sm:px-10 py-4">
          
          {/* Logo (always visible) */}
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <img
              src={logo}
              alt="GEO Logo"
              className="w-28 sm:w-52 object-contain"
            />
          </Link>

          {/* Desktop Button */}
          <button
            onClick={() => setContactOpen(true)}
            className="hidden sm:block border px-4 py-2 rounded-full text-white hover:bg-white hover:text-black transition"
          >
            Contact Us
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-white text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="sm:hidden bg-black/95 backdrop-blur-lg px-6 py-6 space-y-6">

            <button
              onClick={() => {
                setContactOpen(true);
                setMenuOpen(false);
              }}
              className="w-full border px-4 py-3 rounded-full text-white hover:bg-white hover:text-black transition"
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}
