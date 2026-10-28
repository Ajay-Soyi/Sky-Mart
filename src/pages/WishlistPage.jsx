import React from "react";
import {
  Heart,
  ShoppingBag,
  Trash2,
  ArrowRight,
  Star,
  ShoppingCart,
} from "lucide-react";
import Navbar from "../components/Navbar";

const WishlistPage = () => {
  const wishlist = [
    {
      id: 1,
      title: "Fjallraven Backpack",
      category: "Men's Clothing",
      price: 109.95,
      rating: 3.9,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      category: "Men's Clothing",
      price: 22.3,
      rating: 4.1,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
      id: 3,
      title: "Solid Gold Petite Micropavé",
      category: "Jewelry",
      price: 168,
      rating: 4.8,
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    },
    {
      id: 4,
      title: "WD 2TB Elements Portable External Hard Drive",
      category: "Electronics",
      price: 64.99,
      rating: 4.5,
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-slate-50/70 px-4 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-360">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-400">
            <span>Home</span>
            <span>/</span>
            <span className="font-medium text-slate-700">Wishlist</span>
          </div>

          {/* Heading */}
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-500">
                <Heart className="h-5 w-5" />
              </div>

              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                My Wishlist
              </h1>

              <p className="mt-2 text-sm text-slate-500 sm:text-base">
                Keep the things you love in one place.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Heart className="h-4 w-4 text-rose-500" />
              <span>
                <span className="font-semibold text-slate-900">
                  {wishlist.length}
                </span>{" "}
                saved items
              </span>
            </div>
          </div>

          {/* Wishlist Content */}
          {wishlist.length > 0 ? (
            <>
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-slate-900">
                  Saved for later
                </h2>

                <button className="text-sm font-medium text-slate-500 transition hover:text-rose-500">
                  Clear all
                </button>
              </div>

              <div className="grid grid-cols-2 items-stretch gap-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
                {wishlist.map((product) => (
                  <article
                    key={product.id}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60"
                  >
                    {/* Product Image */}
                    <div className="relative flex h-44 items-center justify-center bg-white p-5 sm:h-60 sm:p-7">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                      />

                      <button
                        aria-label="Remove from wishlist"
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 bg-white text-rose-500 shadow-sm transition hover:bg-rose-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-1 flex-col border-t border-slate-100 p-4 sm:p-5">
                      <p className="mb-2 truncate text-xs font-medium uppercase tracking-wide text-slate-400">
                        {product.category}
                      </p>

                      <h3 className="line-clamp-2 h-10 text-sm font-semibold leading-5 text-slate-800 sm:text-base">
                        {product.title}
                      </h3>

                      <div className="mt-3 flex items-center gap-1.5">
                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-medium text-slate-600">
                          {product.rating}
                        </span>
                        <span className="text-xs text-slate-400">
                          Customer rating
                        </span>
                      </div>

                      <div className="mt-auto flex items-center justify-between gap-2 pt-5">
                        <p className="text-lg font-bold text-slate-900">
                          ${product.price.toFixed(2)}
                        </p>

                        <span className="text-xs font-medium text-emerald-600">
                          In stock
                        </span>
                      </div>

                      <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-3 py-3 text-sm font-semibold text-white transition hover:bg-blue-600">
                        <ShoppingCart className="h-4 w-4" />
                        Add to Cart
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              {/* Continue Shopping */}
              <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <ShoppingBag className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Still exploring?
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Discover more products you'll love.
                    </p>
                  </div>
                </div>

                <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700">
                  Continue Shopping
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </>
          ) : (
            /* Empty Wishlist */
            <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-50 text-rose-500">
                <Heart className="h-7 w-7" />
              </div>

              <h2 className="mt-5 text-xl font-semibold text-slate-900">
                Your wishlist is empty
              </h2>

              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                Save your favourite products here and come back whenever you're
                ready to shop.
              </p>

              <button className="mt-6 flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
