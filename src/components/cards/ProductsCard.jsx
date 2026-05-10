// src/components/ProductCard.jsx
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Eye } from "lucide-react";

const ProductCard = ({ product, index }) => {
  const {
    title,
    bangla,
    image,
    price,
    discount = 0,
    ratings,
    reviews,
    sold,
  } = product;

  const discountedPrice = Math.round(price - (price * discount) / 100);

  return (
    <div className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      {/* Image Section */}
      <div className="relative bg-gray-50 p-4">
        {/* Discount Badge */}
        {discount > 0 && (
          <span className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            -{discount}%
          </span>
        )}

        {/* Product Image */}
        <Link href={`/products/${index}`}>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
              
            />
          </div>
        </Link>

        {/* Hover Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
          <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-primary hover:text-white transition">
            <Eye size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-primary hover:text-white transition">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <Link href={`/products/${index}`}>
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1 group-hover:text-primary transition">
            {title}
          </h3>
        </Link>

        {/* Bangla Title */}
        <p className="text-sm text-gray-500 mt-1 line-clamp-1">{bangla}</p>

        {/* Ratings */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="ml-1 text-sm font-medium text-gray-700">
              {ratings}
            </span>
          </div>
          <span className="text-xs text-gray-400">
            ({reviews} reviews)
          </span>
          <span className="text-xs text-gray-400">• {sold} sold</span>
        </div>

        {/* Price */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-2xl font-bold text-primary">
            ৳{discountedPrice}
          </span>

          {discount > 0 && (
            <span className="text-sm text-gray-400 line-through">
              ৳{price}
            </span>
          )}
        </div>

        {/* Button */}
        <button className="mt-5 w-full bg-primary text-white py-3 rounded-xl font-medium hover:bg-primary/90 transition flex items-center justify-center gap-2">
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;