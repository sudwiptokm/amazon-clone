import React from "react";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../../slices/basketSlice";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = loadStripe(process.env.stripe_public_key);

export default function RightCheckout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios
      .post("/api/create-checkout-session", {
        items,
        email: session.user.email,
      })
      .catch((err) => {
        console.log(err);
      });

    // Redirect the user to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

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
            role="link"
            onClick={createCheckoutSession}
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
