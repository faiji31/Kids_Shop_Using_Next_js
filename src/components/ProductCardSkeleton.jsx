// src/components/ProductCardSkeleton.jsx
// Premium skeleton loader matching your ProductCard design

const ProductCardSkeleton = () => {
  return (
    <div className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
      {/* Image Section */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-4">
        {/* Discount Badge Skeleton */}
        <div className="absolute top-4 left-4 z-10 h-7 w-16 rounded-full bg-gray-200 animate-pulse"></div>

        {/* Hover Action Buttons Skeleton */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
        </div>

        {/* Product Image Skeleton */}
        <div className="relative h-64 w-full rounded-2xl overflow-hidden bg-gray-100">
          {/* Main image shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-[pulse_1.5s_ease-in-out_infinite]"></div>

          {/* Center placeholder shape */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-28 h-28 rounded-2xl bg-gray-200 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Title */}
        <div className="space-y-2">
          <div className="h-5 w-4/5 rounded bg-gray-200 animate-pulse"></div>
          <div className="h-4 w-3/5 rounded bg-gray-100 animate-pulse"></div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <div className="h-4 w-12 rounded bg-gray-200 animate-pulse"></div>
          <div className="h-4 w-20 rounded bg-gray-100 animate-pulse"></div>
          <div className="h-4 w-14 rounded bg-gray-100 animate-pulse"></div>
        </div>

        {/* Price */}
        <div className="flex items-end gap-3 mt-4">
          <div className="h-8 w-24 rounded bg-gray-200 animate-pulse"></div>
          <div className="h-5 w-16 rounded bg-gray-100 animate-pulse"></div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-5">
          <div className="h-12 rounded-xl bg-gray-100 border border-gray-200 animate-pulse"></div>
          <div className="h-12 rounded-xl bg-gray-200 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;