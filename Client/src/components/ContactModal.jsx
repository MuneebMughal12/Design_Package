export default function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      ></div>

      {/* Modal Box */}
      <div className="relative bg-black rounded-2xl shadow-xl w-[90%] max-w-md p-8 text-center">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

        <p className="text-white mb-6">
          Feel free to contact us anytime
        </p>

        <div className="space-y-4 text-lg">
          <p>
            📞 <span className="font-semibold">+92 308 8528128</span>
          </p>
          <p>
            ✉️ <span className="font-semibold">info@magenbay.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
