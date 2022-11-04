import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        {/* Logo */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Custom Search Bar */}
        <div className="items-center hidden sm:flex flex-grow">
          <input
            type="text"
            className="h-12 rounded-l-md p-4 flex-grow outline-none"
          />
          <MagnifyingGlassIcon className="h-12 p-4 text-gray-800 bg-yellow-400 rounded-r-md hover:bg-yellow-500 cursor-pointer" />
        </div>

        {/* Right Tabs */}
        <div className="text-white flex gap-6 px-4 whitespace-nowrap items-center text-xs">
          <div className="link">
            <p>Hello Sudwipto</p>
            <p className="font-bold md:text-sm">Account and Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center">
            <ShoppingCartIcon className="h-10 font-bold" />
            <p className="font-bold md:text-sm hidden md:inline mt-2">Basket</p>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div></div>
    </header>
  );
}
