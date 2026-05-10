// src/app/products/[id]/loading.jsx
// Premium loading skeleton for Product Details page
import React from 'react';

export default function Loading() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 animate-pulse">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left Side - Image Skeleton */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
          <div className="h-[500px] w-full rounded-2xl bg-gray-100 flex items-center justify-center">
            <div className="w-32 h-32 rounded-3xl bg-gray-200"></div>
          </div>
        </div>

        {/* Right Side - Content Skeleton */}
        <div>
          {/* Discount Badge */}
          <div className="h-8 w-28 rounded-full bg-gray-200 mb-4"></div>

          {/* Title */}
          <div className="space-y-3">
            <div className="h-10 w-5/6 rounded bg-gray-200"></div>
            <div className="h-6 w-2/3 rounded bg-gray-100"></div>
          </div>

          {/* Rating */}
          <div className="flex gap-4 mt-5">
            <div className="h-5 w-16 rounded bg-gray-200"></div>
            <div className="h-5 w-24 rounded bg-gray-100"></div>
            <div className="h-5 w-20 rounded bg-gray-100"></div>
          </div>

          {/* Price */}
          <div className="flex gap-4 mt-6">
            <div className="h-12 w-36 rounded bg-gray-200"></div>
            <div className="h-8 w-24 rounded bg-gray-100"></div>
          </div>

          {/* Key Features */}
          <div className="mt-8 space-y-4">
            <div className="h-7 w-40 rounded bg-gray-200"></div>

            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex gap-3 items-center">
                <div className="w-5 h-5 rounded-full bg-gray-200"></div>
                <div className="h-4 w-full rounded bg-gray-100"></div>
              </div>
            ))}
          </div>

          {/* Add to Cart Button */}
          <div className="mt-8 h-14 w-56 rounded-2xl bg-gray-200"></div>

          {/* Description */}
          <div className="mt-10 space-y-4">
            <div className="h-8 w-40 rounded bg-gray-200"></div>

            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className={`h-4 rounded bg-gray-100 ${
                  index === 5 ? "w-3/4" : "w-full"
                }`}
              ></div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-10 space-y-4">
            <div className="h-8 w-64 rounded bg-gray-200"></div>

            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl border border-gray-100 bg-gray-50"
              >
                <div className="h-5 w-4/5 rounded bg-gray-200 mb-3"></div>
                <div className="h-4 w-3/4 rounded bg-gray-100"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}