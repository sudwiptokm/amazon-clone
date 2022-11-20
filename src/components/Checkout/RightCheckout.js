import React from "react";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../../slices/basketSlice";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";

export default function RightCheckout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();

  return (
    <div className="flex flex-col bg-white p-10 shadow-md">
      {items.length > 0 && (
        <div className="flex-1">
          <h2 className="whitespace-nowrap">
            Subtotal ({items.length} items):{" "}
            <span className="font-bold">
              <Currency quantity={total} currency="GBP" />
            </span>
          </h2>

          <button
            disabled={!session}
            className={`button mt-2 ${
              !session
                ? "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                : "bg-red-400"
            }`}
          >
            {!session ? "Sign in to checkout" : "Proceed to checkout"}
          </button>
        </div>
      )}
    </div>
  );
}
