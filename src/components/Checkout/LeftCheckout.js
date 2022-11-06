import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";

export default function LeftCheckout() {
  const items = useSelector(selectItems);

  return (
    <div className="w-full flex-grow m-5 shadow-sm">
      <div className="flex justify-center">
        <Image
          src="https://links.papareact.com/ikj"
          width={1020}
          height={250}
          objectFit="contain"
        />
      </div>

      <div className="flex flex-col p-5 space-y-10 bg-white">
        <h1 className="text-3xl border-b pb-4">
          {items.length === 0
            ? "Your Amazon Basket is Empty"
            : "Shopping Basket"}
        </h1>
      </div>
    </div>
  );
}
