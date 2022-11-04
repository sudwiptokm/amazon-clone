import React from "react";
import Product from "./Product";

export default function ProductFeed({ products }) {
  return (
    <div>
      <div>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
