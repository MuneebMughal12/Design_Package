import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ThankYou from "./components/ThankYou";
import WhatsappButton from "./components/WhatsappButton";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white relative">
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>

        <WhatsappButton />
      </div>
    </BrowserRouter>
  );
}
