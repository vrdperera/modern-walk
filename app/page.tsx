"use client";

import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import CategoryTile from "./components/CategoryTile";
import { Product } from "@/types/types";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchClothingProducts = async () => {
      try {
        const mensResponse = await fetch(
          "https://fakestoreapi.com/products/category/men's clothing"
        );
        const womensResponse = await fetch(
          "https://fakestoreapi.com/products/category/women's clothing"
        );

        const mensProducts: Product[] = await mensResponse.json();
        const womensProducts: Product[] = await womensResponse.json();

        // Sort each category individually (latest first)
        const sortedMens = mensProducts.sort((a, b) => b.id - a.id);
        const sortedWomens = womensProducts.sort((a, b) => b.id - a.id);
        console.log(sortedMens, sortedWomens);

        // Interleave Men's & Women's products (alternating pattern)
        const mixedProducts: Product[] = [];
        const maxLength = Math.max(sortedMens.length, sortedWomens.length);

        for (let i = 0; i < maxLength; i++) {
          if (i < sortedMens.length) mixedProducts.push(sortedMens[i]);
          if (i < sortedWomens.length) mixedProducts.push(sortedWomens[i]);
        }

        setProducts(mixedProducts);
      } catch (error) {
        console.error("Error fetching clothing products:", error);
      }
    };

    fetchClothingProducts();
  }, []);

  return (
    <main className="container mx-auto px-4 lg:px-12 pb-8">
      {/* Flash Sale Section */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Flash Sale</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="mt-12 w-full">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <CategoryTile
            title="Men's Clothing"
            link="/category/mens-clothing"
            color="green"
          />
          <CategoryTile
            title="Women's Clothing"
            link="/category/womens-clothing"
            color="pink"
          />
        </div>
      </section>
    </main>
  );
}
