import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ThankYou from "./components/ThankYou";


export default function App() {
const [submitted, setSubmitted] = useState(false);


return submitted ? (
<ThankYou />
) : (
<div className="min-h-screen bg-black text-white">
<Navbar />
<Hero onSubmitSuccess={() => setSubmitted(true)} />
</div>
);
}