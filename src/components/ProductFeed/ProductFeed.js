import React from "react";
import Product from "./Product";

export default function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt- mx-auto">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}
