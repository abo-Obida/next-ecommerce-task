import React from "react";
import ProductCard from "../components/ProductCard";
import { Product } from "../types/product";

type Props = {
  products: Product[];
};

const ProductsPage: React.FC<Props> = ({ products }) => {
  return (
    <div className="bg-gray-50 min-h-screen p-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Products</h1>
        <p className="text-gray-600">Discover our exclusive collection</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
