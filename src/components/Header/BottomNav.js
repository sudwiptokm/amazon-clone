import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function BottomNav() {
  return (
    <div className="flex text-white bg-amazon_blue-light items-center space-x-3 p-2 px-6">
      <p className="link flex items-center">
        <Bars3Icon className="mr-1 h-6" />
        All
      </p>
      <p className="link">Prime Video</p>
      <p className="link">Amazon Business</p>
      <p className="link">Today's Deal</p>
      <p className="link hidden lg:inline-flex">Electronics</p>
      <p className="link hidden lg:inline-flex">Food & Grocery</p>
      <p className="link hidden lg:inline-flex">Prime</p>
      <p className="link hidden lg:inline-flex">Buy Again</p>
      <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
      <p className="link hidden lg:inline-flex">Health & Personal Care</p>
    </div>
  );
}
