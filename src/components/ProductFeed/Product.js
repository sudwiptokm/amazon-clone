import React, { useEffect, useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../slices/basketSlice";

export default function Product({ product }) {
  const [rating, setRating] = useState(2);
  const [hasPrime, setHasPrime] = useState(false);

  useEffect(() => {
    setRating(Math.ceil(Math.random() * 5));
    if (Math.random() > 0.5) {
      setHasPrime(true);
    }
  }, []);

  const dispatch = useDispatch();


  const addItemToBasket = () => {
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {product.category}
      </p>

      <Image src={product.image} height={200} width={200} objectFit="contain" />

      <h4 className="my-3">{product.title}</h4>

      <div className="flex gap-1">
        {[...Array(rating)].map((x) => (
          <StarIcon className="h-5 text-yellow-400" />
        ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{product.description}</p>

      <div className="mb-5">
        <Currency quantity={product.price} currency="GBP" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <Image
            src="https://links.papareact.com/fdw"
            width={48}
            height={48}
            objectFit="contain"
          />
          <p className="text-xs text-gray-500">FREE Next-day delivery</p>
        </div>
      )}

      <button className="mt-auto button" onClick={addItemToBasket}>
        Add to Basket
      </button>
    </div>
  );
}
