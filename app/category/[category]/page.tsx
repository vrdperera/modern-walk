"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import ProductCard from "@/app/components/ProductCard";
import { SkeletonLoader } from "@/app/components/SkeletonLoader";
import { Product } from "@/types/types";
import { fetchCategoryProducts } from "@/utils/fetchCategoryProducts";

export default function CategoryPage() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const pathname = usePathname();
  const category = pathname.split("/").pop(); // Get category from URL

  // Optimized API Call with useCallback
  const fetchProducts = useCallback(async () => {
    if (!category) return;
    setError(null); // Reset error state
    setProducts(null); // Reset to loading state

    const data = await fetchCategoryProducts(category);
    if (data) {
      setProducts(data);
    } else {
      setError(`Failed to load products for ${category.replace("-", " ")}`);
    }
  }, [category]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">
        {category === "mens-clothing" ? "Men's Clothing" : "Women's Clothing"}
      </h1>

      {/* Display Error Message */}
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : products === null ? (
        <SkeletonLoader />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
