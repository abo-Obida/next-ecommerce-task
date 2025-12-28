import React from "react";
import { Product } from "../types/product";
import Link from "next/link";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 duration-300 overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <h2 className="text-gray-900 font-bold text-xl mb-2">
          {product.title}
        </h2>

        <p className="text-[#009688] font-extrabold text-lg mb-4">
          ${product.price}
        </p>

        <Link
          href={`/products/${product.id}`}
          className="
            inline-block
            px-4 py-2
            rounded-md
            text-[#009688]
            font-medium
            transition-all
            duration-300
            hover:bg-[#FFC107]
            hover:text-[#263238]
          "
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
