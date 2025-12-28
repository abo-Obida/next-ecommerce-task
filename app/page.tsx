"use client";

import { useEffect, useState } from "react";
import { Product } from "./src/types/product";
import products from "./src/data/products.json";
import ProductGrid from "./src/components/ProductGrid";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";

export default function Home() {
  return (

    <main className="bg-gray-50 min-h-screen">
      <Header
      />
      <ProductGrid products={products as Product[]} />
      <Footer />
    </main>
  );
}