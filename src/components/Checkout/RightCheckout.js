import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";

export default function RightCheckout() {
  const items = useSelector(selectItems);
  return (
    <div>
      {items.length > 0 && (
        <>
          <h2>Subtotal ({items.length} items):
          <span className="font-bold">
            
          </span>
          </h2>
        </>
      )}
    </div>
  );
}
