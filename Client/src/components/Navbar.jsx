import { useState } from "react";
import ContactModal from "./ContactModal";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-10 py-6 z-20">
        <h1 className="text-2xl font-bold text-white">MAGEN BAY</h1>

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
