import {
  ShoppingCart,
  Heart,
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  ChevronRight,
  Minus,
  Plus,
  Check,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { MyStore } from "../context/MyContext";
import { useProduct } from "../hooks/useProductHooks";

const ProductsDetail = () => {
  const { productsDetail, productsData } = useProduct();

  if (!productsData?.length) {
    return (
      <div>
        <Navbar />
        <p className="p-10 text-center text-gray-500">Loading products...</p>
      </div>
    );
  }

  if (!productsDetail) {
    return (
      <div>
        <Navbar />
        <p className="p-10 text-center text-gray-500">Product not found.</p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-white px-4 py-8 sm:px-8 lg:px-16">
        {/* Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <span className="cursor-pointer hover:text-indigo-600">Home</span>
          <ChevronRight size={15} />
          <span className="cursor-pointer hover:text-indigo-600">Products</span>
          <ChevronRight size={15} />
          <span className="text-gray-800">{productsDetail.category}</span>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Product Image */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="order-2 flex gap-3 sm:order-1 sm:flex-col">
              {[1, 2, 3].map((item) => (
                <button
                  key={item}
                  className={`flex h-20 w-20 items-center justify-center rounded-xl border bg-white p-3 transition ${
                    item === 1
                      ? "border-indigo-600 ring-2 ring-indigo-100"
                      : "border-gray-200 hover:border-indigo-300"
                  }`}
                >
                  <img
                    src={productsDetail.image}
                    alt={productsDetail.title}
                    className="h-full w-full object-contain"
                  />
                </button>
              ))}
            </div>

            <div className="order-1 flex min-h-87.5 flex-1 items-center justify-center rounded-2xl bg-gray-50 p-8 sm:order-2 sm:min-h-120">
              <img
                src={productsDetail.image}
                alt={productsDetail.title}
                className="max-h-105 w-full object-contain mix-blend-multiply"
              />
            </div>
          </div>

          {/* Product Information */}
          <div className="flex flex-col">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-indigo-600">
              {productsDetail.category}
            </p>

            <h1 className="text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
              {productsDetail.title}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star
                    key={item}
                    size={17}
                    fill={
                      item <= Math.round(productsDetail.rating?.rate ?? 0)
                        ? "currentColor"
                        : "none"
                    }
                  />
                ))}
              </div>

              <span className="text-sm font-medium text-gray-700">
                {productsDetail.rating?.rate ?? "N/A"}
              </span>

              <span className="text-sm text-gray-400">
                ({productsDetail.rating?.count ?? 0} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-center gap-3">
              <span className="text-3xl font-bold text-gray-900">
                ${Number(productsDetail.price).toFixed(2)}
              </span>

              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Best Value
              </span>
            </div>

            <p className="mt-5 text-sm leading-7 text-gray-600">
              {productsDetail.description}
            </p>

            {/* Product Highlights */}
            <div className="mt-6 space-y-3">
              {[
                "Quality materials and durable construction",
                "Designed for everyday use",
                "Convenient and practical design",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm text-gray-700"
                >
                  <Check size={17} className="text-emerald-600" />
                  {feature}
                </div>
              ))}
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold text-gray-800">
                Quantity
              </p>

              <div className="flex h-11 w-fit items-center rounded-xl border border-gray-200">
                <button className="px-3 text-gray-500 hover:text-indigo-600">
                  <Minus size={16} />
                </button>

                <span className="min-w-10 text-center text-sm font-medium">
                  1
                </span>

                <button className="px-3 text-gray-500 hover:text-indigo-600">
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 font-semibold text-white shadow-lg shadow-indigo-100 transition hover:bg-indigo-700">
                <ShoppingCart size={19} />
                Add to Cart
              </button>

              <button className="flex h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 font-semibold text-gray-700 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600">
                <Heart size={19} />
                Wishlist
              </button>
            </div>

            {/* Delivery Benefits */}
            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-gray-100 pt-6 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <Truck size={22} className="shrink-0 text-indigo-600" />
                <div>
                  <p className="text-xs font-semibold text-gray-800">
                    Free Shipping
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    On eligible orders
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <RotateCcw size={22} className="shrink-0 text-indigo-600" />
                <div>
                  <p className="text-xs font-semibold text-gray-800">
                    Easy Returns
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Hassle-free returns
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck size={22} className="shrink-0 text-indigo-600" />
                <div>
                  <p className="text-xs font-semibold text-gray-800">
                    Secure Payment
                  </p>
                  <p className="mt-1 text-xs text-gray-500">Safe checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <section className="mt-16 border-t border-gray-100 pt-10">
          <h2 className="text-xl font-bold text-gray-900">
            Product Description
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600">
            {productsDetail.description}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-xs font-medium text-gray-500">Category</p>
              <p className="mt-2 font-semibold capitalize text-gray-800">
                {productsDetail.category}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-xs font-medium text-gray-500">
                Customer Rating
              </p>
              <p className="mt-2 font-semibold text-gray-800">
                {productsDetail.rating?.rate ?? "N/A"} / 5
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5">
              <p className="text-xs font-medium text-gray-500">Reviews</p>
              <p className="mt-2 font-semibold text-gray-800">
                {productsDetail.rating?.count ?? 0} customer reviews
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductsDetail;
