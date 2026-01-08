import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm({ onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    size: "",
    startTime: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    await emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form,
      "YOUR_PUBLIC_KEY"
    );

    onSuccess();
  };

  return (
    <div
      id="contact"
      className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl text-white"
    >
      <h3 className="text-2xl font-bold mb-2">
        Fill out the form to receive a free consultation.
      </h3>
      <p className="text-sm text-gray-300 mb-6">
        Share your plot details and our team will contact you via WhatsApp or phone call.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          required
          onChange={handleChange}
          className="w-full p-3 rounded bg-white/20 outline-none"
        />

        <input
          name="phone"
          placeholder="Mobile / WhatsApp Number"
          required
          onChange={handleChange}
          className="w-full p-3 rounded bg-white/20 outline-none"
        />

        <input
          name="location"
          placeholder="Plot Location (Sector / Area)"
          onChange={handleChange}
          className="w-full p-3 rounded bg-white/20 outline-none"
        />

        <input
          name="size"
          placeholder="Plot Size (Example: 5 Marla)"
          onChange={handleChange}
          className="w-full p-3 rounded bg-white/20 outline-none"
        />

        <select
          name="startTime"
          onChange={handleChange}
          className="w-full p-3 rounded bg-white/20 outline-none text-black"
        >
          <option value="">When do you plan to start construction?</option>
          <option>1–3 months</option>
          <option>3–6 months</option>
          <option>6+ months</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 py-3 rounded font-semibold text-lg"
        >
          👉 Free Consultation Hasil Karein
        </button>
      </form>

      {/* TRUST */}
      <div className="mt-6 text-sm text-gray-200 space-y-1">
        <p>✔ Extensive experience working in Islamabad</p>
        <p>✔ Full focus on quality and approval requirements</p>
        <p>✔ Client satisfaction is our top priority</p>
        <p>✔ Professional team with a transparent process</p>
      </div>
    </div>
  );
}
