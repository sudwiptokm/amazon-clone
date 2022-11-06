import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Currency from "react-currency-formatter";

export default function CheckoutProduct({ product }) {
  const [hasPrime, setHasPrime] = useState(false);

  useEffect(() => {
    if (Math.random() > 0.5) {
      setHasPrime(true);
    }
  }, []);

  return (
    <div className="grid grid-cols-5 gap-5">
      <Image src={product.image} height={200} width={200} objectFit="contain" />

      <div className="col-span-3">
        <p>{product.title}</p>

        <div className="flex gap-1">
          {[...Array(Math.ceil(product.rating.rate))].map((x) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{product.description}</p>

        <div>
          <Currency quantity={product.price} currency="GBP" />
        </div>

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <Image
              src="https://links.papareact.com/fdw"
              width={48}
              height={48}
              objectFit="contain"
            />
            <p className="text-xs text-gray-500">FREE Next-day delivery</p>
          </div>
        )}
      </div>
    </div>
  );
}
