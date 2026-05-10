// src/app/products/[id]/page.jsx
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Star,
  ShoppingCart,
  BadgePercent,
  CheckCircle,
} from "lucide-react";
import products from "@/data/toys.json";

// Dynamic metadata
export async function generateMetadata({ params }) {
  const { id } = await params;
  const productId = Number(id);
  const product = products[productId];

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product does not exist.",
    };
  }

  return {
    title: product.title,
    description: product.description?.slice(0, 160),
  };
}

export default async function ProductDetailsPage({ params }) {
  // Await params as it's a Promise in Next.js 13+
  const { id } = await params;
  const productId = Number(id);

  // Find product by index
  const product = products[productId];

  // Show 404 page if product not found
  if (!product) {
    notFound();
  }

  const {
    title = "Product Title",
    bangla = "পণ্যের নাম",
    image = "/placeholder.png",
    description = "",
    price = 0,
    ratings = 0,
    reviews = 0,
    sold = 0,
    info = [],
    qna = [],
  } = product;

  // Support both discount and percentage fields
  const discount = product.discount ?? product.percentage ?? 0;

  // Final price after discount
  const finalPrice = Math.round(price - (price * discount) / 100);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 lg:sticky lg:top-24">
          <div className="relative h-[500px] w-full bg-gray-50 rounded-2xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              priority
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Product Information */}
        <div>
          {/* Discount Badge */}
          {discount > 0 && (
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <BadgePercent size={16} />
              {discount}% OFF
            </div>
          )}

          {/* Titles */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {title}
          </h1>
          <p className="text-lg text-gray-500 mt-2">{bangla}</p>

          {/* Rating */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star size={18} fill="currentColor" />
              <span className="font-semibold text-gray-800">{ratings}</span>
            </div>
            <span className="text-gray-500">{reviews} reviews</span>
            <span className="text-gray-500">{sold} sold</span>
          </div>

          {/* Price */}
          <div className="mt-6 flex items-center gap-4">
            <span className="text-4xl font-bold text-primary">
              ৳{finalPrice}
            </span>

            {discount > 0 && (
              <span className="text-xl text-gray-400 line-through">
                ৳{price}
              </span>
            )}
          </div>

          {/* Key Features */}
          {info.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {info.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <CheckCircle
                      size={18}
                      className="text-green-500 mt-0.5 shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Add to Cart Button */}
          <button className="mt-8 w-full md:w-auto bg-primary text-white px-8 py-4 rounded-2xl font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2">
            <ShoppingCart size={20} />
            Add to Cart
          </button>

          {/* Description */}
          {description && (
            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-4">Description</h2>
              <div className="prose prose-gray max-w-none whitespace-pre-line">
                {description}
              </div>
            </div>
          )}

          {/* Q&A */}
          {qna.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-4">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {qna.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 border border-gray-100 rounded-2xl p-5"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {item.question}
                    </h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}