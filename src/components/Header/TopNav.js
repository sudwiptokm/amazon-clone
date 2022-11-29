import Image from "next/image";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";

export default function TopNav() {
  const { data: session } = useSession();
  if (session) {
    // console.log(session.user.name);
  }

  const router = useRouter();

  const items = useSelector(selectItems);

  return (
    <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
      {/* Logo */}
      <div
        className="mt-2 flex items-center flex-grow sm:flex-grow-0"
        onClick={() => router.push("/")}
      >
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
        <div className="link" onClick={!session ? signIn : signOut}>
          {session ? <p>Hello {session.user.name}</p> : <p>Sign In</p>}
          <p className="font-bold md:text-sm">Account and Lists</p>
        </div>
        <div className="link" onClick={() => router.push("/orders")}>
          <p>Returns</p>
          <p className="font-bold md:text-sm">& Orders</p>
        </div>
        <div
          className="link flex items-center"
          onClick={() => router.push("/checkout")}
        >
          <div className="relative">
            <ShoppingCartIcon className="h-10 font-bold" />
            <span className="rounded-full h-4 w-4 text-center text-xs text-black font-bold bg-yellow-400 absolute top-0 right-0">
              {items.length}
            </span>
          </div>
          <p className="font-bold md:text-sm hidden md:inline mt-2">Basket</p>
        </div>
      </div>
    </div>
  );
}
