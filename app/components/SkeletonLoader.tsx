import Skeleton from "./Skeleton";

export const SkeletonLoader = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {[...Array(4)].map((_, index) => (
      <div
        key={index}
        className="flex flex-col gap-3 p-4 bg-white rounded-lg border border-[#f8f9fa] shadow-md"
      >
        <Skeleton className="h-6 w-3/4 mx-auto" /> {/* Title */}
        <Skeleton className="h-[200px] w-full rounded-lg" /> {/* Image */}
        <Skeleton className="h-6 w-1/2 mx-auto mt-2" /> {/* Price */}
        <Skeleton className="h-12 w-full rounded-lg mt-2" /> {/* Description */}
      </div>
    ))}
  </div>
);
