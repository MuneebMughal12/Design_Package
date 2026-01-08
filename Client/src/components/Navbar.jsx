import { useState } from "react";
import ContactModal from "./ContactModal";
import logo from "../assets/GEO.png";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-10 py-6 z-20">
                <Link to="/" className="mr-6 block leading-none">
                    <img
                        src={logo}
                        alt="Magen Bay Logo"
                        className="w-15 h-10 object-contain"
                    />
                </Link>
                <button
                    onClick={() => setOpen(true)}
                    className="border px-4 py-2 rounded-full text-white hover:bg-white hover:text-black transition"
                >
                    Contact Us
                </button>
            </nav>

            {/* Modal */}
            <ContactModal isOpen={open} onClose={() => setOpen(false)} />
        </>
    );
}
