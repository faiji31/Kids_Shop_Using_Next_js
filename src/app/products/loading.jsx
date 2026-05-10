// src/app/products/loading.jsx
// Automatic route loading UI for Next.js App Router

import ProductCardSkeleton from "@/components/ProductCardSkeleton";

export default function Loading() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Header Skeleton */}
      <div className="text-center mb-10">
        <div className="h-10 w-72 mx-auto rounded-xl bg-gray-200 animate-pulse"></div>
        <div className="h-4 w-48 mx-auto mt-3 rounded bg-gray-100 animate-pulse"></div>
      </div>

      {/* Filter Bar Skeleton */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <div className="h-12 w-72 rounded-2xl bg-gray-100 animate-pulse"></div>
        <div className="h-12 w-40 rounded-2xl bg-gray-100 animate-pulse"></div>
      </div>

      {/* Products Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}