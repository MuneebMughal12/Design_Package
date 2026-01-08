import ContactForm from "./ContactForm";

export default function Hero({ onSubmitSuccess }) {
    return (
        <section
            className="relative min-h-screen bg-cover bg-center flex items-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="text-white space-y-6">
                        <span className="inline-block bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                            Islamabad Only – CDA Approved Design Support
                        </span>

                        <h1 className="text-4xl lg:text-2xl font-bold leading-tight">
                            Design your 5 Marla home<br />
                            with professional architects <br />
                        </h1>


                        <p className="text-lg text-gray-200">
                            CDA-approved luxury house design package for Islamabad <br />
                            Ground + First Floor + Mumty — everything in one place
                        </p>

                        {/* VALUE POINTS */}
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <p>✔ Experience</p>
                            <p>✔ Approval Support</p>
                            <p>✔ Complete Drawings</p>
                            <p>✔ No Hidden Charges</p>
                        </div>

                        {/* SERVICES */}
                        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mt-6">
                            <h3 className="text-xl font-semibold mb-3">
                                What Do We Offer?
                            </h3>
                            <ul className="space-y-2 text-sm text-gray-200">
                                <li>✔ Architectural & Structural Submission Drawings</li>
                                <li>✔ Complete Working Drawings (Construction ke liye)</li>
                                <li>✔ Electrical & Plumbing Drawings</li>
                                <li>✔ 3D Front Elevation (Luxury Look)</li>
                                <li>✔ Soil Test (2 Bore)</li>
                                <li>✔ CDA & RDA Approval Support</li>
                                <li>✔ Expert Guidance from Start to Finish</li>
                            </ul>

                            <p className="mt-4 font-semibold text-green-400">
                                This is a complete 5 Marla design package — no separate or hidden charges.
                                Everything is included.
                            </p>
                        </div>

                        {/* PRICE */}
                        <div className="mt-6">
                            <p className="text-lg">Total Design Charges</p>
                            <p className="text-3xl font-bold text-green-400">
                                135,000 PKR
                            </p>
                            <p className="text-sm text-gray-300">
                                No hidden costs — everything is clear and upfront.
                            </p>
                        </div>

                        {/* FINAL CTA */}
                        <p className="mt-6 font-semibold text-lg text-yellow-400">
                            Avoid mistakes in your home construction — always get your design done by professionals.
                        </p>
                    </div>

                    {/* RIGHT FORM */}
                    <ContactForm onSuccess={onSubmitSuccess} />
                </div>
            </div>
        </section>
    );
}
