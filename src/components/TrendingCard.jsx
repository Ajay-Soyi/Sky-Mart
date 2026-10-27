import React from "react";
import { Heart, Star, ShoppingCart } from "lucide-react";

const TrendingCard = ({ product }) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60">
      {/* Product Image */}
      <div className="relative flex h-44 shrink-0 items-center justify-center bg-slate-50 p-5 sm:h-60 sm:p-7">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />

        <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 shadow-sm transition hover:text-rose-500">
          <Heart className="h-4 w-4" />
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-3 sm:p-4">
        {/* Category */}
        <p className="truncate text-[10px] font-medium uppercase tracking-wider text-slate-400 sm:text-xs">
          {product.category}
        </p>

        {/* Fixed-height Title */}
        <h3
          title={product.title}
          className="mt-2 h-10 overflow-hidden text-sm font-semibold leading-5 text-slate-900 line-clamp-2 sm:text-base"
        >
          {product.title}
        </h3>

        {/* Fixed-height Description */}
        <p className="mt-2 h-8 overflow-hidden text-xs leading-4 text-slate-500 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mt-3 flex shrink-0 items-center gap-1.5 text-xs">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />

          <span className="font-semibold text-slate-800">
            {product.rating.rate}
          </span>

          <span className="truncate text-slate-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 shrink-0">
          <span className="text-lg font-bold text-slate-900">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Button - Always pushed to the bottom */}
        <div className="mt-auto pt-4">
          <div className="flex min-h-10 items-center justify-center gap-2 rounded-xl bg-slate-900 px-3 py-2.5 text-xs font-semibold text-white transition group-hover:bg-blue-600 sm:text-sm">
            <ShoppingCart className="h-4 w-4 shrink-0" />
            Add to cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
