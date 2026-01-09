import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    size: "",
    startTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const cleaned = value.replace(/^0+/, "");
      setForm({ ...form, phone: "+92" + cleaned });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Google Sheet (no-cors is correct)
      fetch(
        "https://script.google.com/macros/s/AKfycbxBJohR7uNTgJTzh3WAlczhlNQHCEBkSkUo05MXv4fAJ-p1iiiWBCTV2eDj463ZwT6RSw/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(form),
        }
      );

      // EmailJS
      await emailjs.send(
        "service_y8dc6ha",
        "template_p1eud7m",
        form,
        "rp6sPpZH8RQs4kO4i"
      );

      // ✅ React Router navigation (NO reload)
      navigate("/thank-you");
    } catch (err) {
      console.error(err);
      alert("Submission failed");
    }
  };

  return (
    <div className="bg-white/10  backdrop-blur-xl p-8 rounded-2xl shadow-xl w-full max-w-lg">
      <h3 className="text-2xl font-bold mb-4">Fill out the form</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          required
          placeholder="Name"
          onChange={handleChange}
          className="w-full p-3 rounded bg-white/20"
        />

        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300">
            +92
          </span>
          <input
            name="phone"
            required
            placeholder="Mobile / WhatsApp"
            value={form.phone.startsWith("+92") ? form.phone.slice(3) : form.phone}
            onChange={handleChange}
            className="w-full pl-14 p-3 rounded bg-white/20"
          />
        </div>

        <input
          name="location"
          placeholder="Plot Location"
          onChange={handleChange}
          className="w-full p-3 rounded bg-white/20"
        />

        <input
          name="size"
          placeholder="Plot Size"
          onChange={handleChange}
          className="w-full p-3 rounded bg-white/20"
        />

        <select
          name="startTime"
          onChange={handleChange}
          className="w-full p-3 rounded bg-white/20 text-black"
        >
          <option value="">When do you plan to start?</option>
          <option>1–3 months</option>
          <option>3–6 months</option>
          <option>6+ months</option>
        </select>

        <button className="w-full bg-green-600 py-3 rounded font-semibold active:scale-95 transition">

          Submit
        </button>
      </form>

      
      {/* TRUST */}
      <div className="mt-6  text-sm text-gray-200 space-y-1">
        <p>✔ Extensive experience working in Islamabad</p>
        <p>✔ Full focus on quality and approval requirements</p>
        <p>✔ Client satisfaction is our top priority</p>
        <p>✔ Professional team with a transparent process</p>
      </div>
    </div>
  );
}
