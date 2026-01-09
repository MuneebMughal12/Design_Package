import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm({ onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    phone: "", // will store full number with +92
    location: "",
    size: "",
    startTime: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Remove leading 0 if user types it
      let cleanedValue = value.replace(/^0+/, "");
      setForm({ ...form, phone: "+92" + cleanedValue });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send to Google Sheet
      await fetch("https://script.google.com/macros/s/AKfycbxBJohR7uNTgJTzh3WAlczhlNQHCEBkSkUo05MXv4fAJ-p1iiiWBCTV2eDj463ZwT6RSw/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(form),
        // headers: { "Content-Type": "application/json" },
      });

      // Send email via EmailJS
      await emailjs.send(
        "service_y8dc6ha",
        "template_p1eud7m",
        form,
        "rp6sPpZH8RQs4kO4i"
      );

      // Redirect to Thank You page
      window.location.href = "/thank-you"; // <-- replace with your page URL
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };


  return (
    <div
      id="contact"
      className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-xl text-white"
    >
      <h3 className="text-2xl font-bold mb-2">
        Fill out the form .
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

        <div className="relative">
          {/* Show +92 as prefix */}
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 font-semibold">
            +92
          </span>
          <input
            name="phone"
            placeholder="Mobile / WhatsApp Number"
            required
            value={form.phone.startsWith("+92") ? form.phone.slice(3) : form.phone} // show only number after +92
            onChange={handleChange}
            className="w-full pl-14 p-3 rounded bg-white/20 outline-none"
          />
        </div>

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
          <option value="">When do you plan to start Design?</option>
          <option>1–3 months</option>
          <option>3–6 months</option>
          <option>6+ months</option>
        </select>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 py-3 rounded font-semibold text-lg"
        >
          Submit
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
