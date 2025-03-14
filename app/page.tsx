"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/types";
import { fetchClothingProducts } from "@/utils/fetchProducts";
import { FlashSale } from "./components/rootPageComponents/FlashSale ";
import { Categories } from "./components/rootPageComponents/Categories";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await fetchClothingProducts();
        setProducts(products);
      } catch (error) {
        console.error("Error fetching clothing products:", error);
        setProducts([]);
      }
    };

    getProducts();
  }, []);

  return (
    <main className="container mx-auto px-4 lg:px-12 pb-8">
      {/* Flash Sale Section */}
      <FlashSale products={products} />

      {/* Categories Section */}
      <Categories />
    </main>
  );
}
