import { Product } from "@/types/types";
import ProductCard from "../ProductCard";
import { Suspense } from "react";
import { SkeletonLoader } from "../SkeletonLoader";

interface FlashSaleProps {
  products: Product[];
}

export const FlashSale: React.FC<FlashSaleProps> = ({ products }) => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Flash Sale</h2>

      <Suspense fallback={<SkeletonLoader />}>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <SkeletonLoader />
        )}
      </Suspense>
    </section>
  );
};
