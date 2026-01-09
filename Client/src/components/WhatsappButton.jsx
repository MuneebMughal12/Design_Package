import React from "react";

export default function WhatsappButton() {
  const phoneNumber = "923088528128"; // Your WhatsApp number without + (React handles +92 if needed)
  const message = encodeURIComponent("Hello! I want to inquire about your services.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.373 0 0 5.373 0 12c0 2.103.547 4.07 1.507 5.77L0 24l6.366-1.566A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12 0-3.195-1.245-6.195-3.48-8.52zm-8.52 18c-1.929 0-3.768-.533-5.337-1.452l-.383-.228-3.775.93.998-3.68-.257-.398A9.959 9.959 0 012 12c0-5.523 4.477-10 10-10 2.663 0 5.146 1.04 7.002 2.91a9.97 9.97 0 012.91 7.09c0 5.523-4.477 10-10 10zm5.338-7.384l-1.283-.574c-.168-.075-.365-.037-.497.093l-.828.802c-.132.13-.33.17-.496.095-.607-.238-1.146-.606-1.616-1.096-.236-.235-.496-.526-.615-.787-.13-.296-.022-.534.025-.599l.555-.838c.065-.097.041-.227-.056-.304l-1.06-.787c-.122-.091-.305-.109-.452-.041l-1.48.59c-.222.09-.385.324-.385.573 0 1.352.88 2.645 2.236 3.582 1.346.925 2.757 1.202 3.952 1.19.225 0 .422-.158.487-.375l.465-1.89c.066-.269-.08-.545-.34-.668z"/>
      </svg>
    </a>
  );
}
