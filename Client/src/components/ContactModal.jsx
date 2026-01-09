export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      />

      {/* Modal Box */}
      <div className="relative bg-black rounded-2xl shadow-xl w-[90%] max-w-md p-8 text-center text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

        <p className="mb-6">
          Feel free to contact us anytime
        </p>

        <div className="space-y-4 text-lg">
          {/* Phone */}
          <p>
            📞{" "}
            <a
              href="tel:+923088528128"
              className="font-semibold hover:text-green-400"
            >
              +92 308 8528128
            </a>
          </p>

          {/* Email */}
          <p>
            ✉️{" "}
            <a
              href="mailto:geoconenterprises@outlook.com"
              className="font-semibold hover:text-blue-400"
            >
              geoconenterprises@outlook.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
