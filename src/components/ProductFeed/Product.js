import React from "react";

export default function Product({ product }) {
  return <div className="bg-red-100 p-6">{product.title}</div>;
}
