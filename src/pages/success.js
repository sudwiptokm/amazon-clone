import { CheckCircleIcon } from "@heroicons/react/24/solid";
import router from "next/router";
import React from "react";
import Header from "../components/Header/Header";

export default function Success() {
  return (
    <div className="bg-gray-100 h-screen">
      <Header />

      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-600 h-10" />
            <h1 className="text-3xl">Your Order has been Confirmed!</h1>
          </div>
          <p>
            Thank you for purchasing from us. We'll send a confirmation of the
            items that has shipped and if you want to check the status of the
            order, click on the link below.
          </p>
          <button
            className="button mt-8"
            onClick={() => router.push("/orders")}
          >
            Go to my Orders
          </button>
        </div>
      </main>
    </div>
  );
}
