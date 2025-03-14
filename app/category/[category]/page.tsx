"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ProductCard from "@/app/components/ProductCard";
import { Product } from "@/types/types";

export default function CategoryPage() {
  const [products, setProducts] = useState<Product[]>([]);

  const pathname = usePathname();
  const category = pathname.split("/").pop(); // Get category from URL

  const formattedCategory =
    category === "mens-clothing" ? "men's clothing" : "women's clothing";

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${formattedCategory}`
        );
        const data: Product[] = await response.json();
        const sortedProducts = data.sort((a, b) => b.id - a.id);

        setProducts(sortedProducts);
      } catch (error) {
        console.error(`Error fetching ${formattedCategory}:`, error);
      }
    };

    fetchCategoryProducts();
  }, [formattedCategory]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        {category === "mens-clothing" ? "Men's Clothing" : "Women's Clothing"}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
