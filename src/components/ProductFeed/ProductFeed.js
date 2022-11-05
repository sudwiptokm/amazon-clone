import React from "react";
import Product from "./Product";

export default function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-48 mx-auto items-stretch">
      {products.slice(0, 4).map((product) => (
        <Product product={product} key={product.id} />
      ))}

      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />

      {products.slice(4, 5).map((product) => (
        <div className="md:col-span-2">
          <Product product={product} key={product.id} />
        </div>
      ))}

      {products.slice(5).map((product) => (
        <div>
          <Product product={product} key={product.id} />
        </div>
      ))}
    </div>
  );
}
