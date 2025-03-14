import Image from "next/image";
import { Product } from "@/types/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Set background color dynamically
  const bgColor =
    product.category === "men's clothing" ? "bg-[#2AD4A8]" : "bg-[#FF5C8A]";

  return (
    <div className="bg-white shadow-lg rounded-xl border border-gray-200 flex flex-col h-full">
      {/* Product Title */}
      <h3 className="text-xl font-bold text-center text-black p-4">
        {product.title}
      </h3>

      {/* Product Image */}
      <div className="flex justify-center p-4 h-[260px]">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="object-contain w-full max-w-[200px] h-full"
        />
      </div>

      {/* Spacer to Keep Layout Balanced */}
      <div className="flex-grow"></div>

      {/* Price & Description Box */}
      <div className={`${bgColor} text-white rounded-b-xl p-4 text-center`}>
        {/* Price */}
        <p className="text-lg font-bold text-blue-700">Rs {product.price}</p>

        {/* Description */}
        <p className="text-sm font-medium mt-2">
          {product.description.length > 100
            ? product.description.slice(0, 50) + "..."
            : product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
