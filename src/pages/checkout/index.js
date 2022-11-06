import React from "react";
import LeftCheckout from "../../components/Checkout/LeftCheckout";
import RightCheckout from "../../components/Checkout/RightCheckout";
import Header from "../../components/Header/Header";

export default function Checkout() {
  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left Side */}
        <LeftCheckout />

        {/* Right Side */}
        <RightCheckout />
      </main>
    </div>
  );
}
