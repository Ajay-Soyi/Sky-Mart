import React from "react";
import { SlidersHorizontal, LayoutGrid, List, Search } from "lucide-react";
import TrendingCard from "../components/TrendingCard";

const ProductsPage = ({ products = [], category = "All Products" }) => {
  return (
    <div className="min-h-screen bg-slate-50/60">
      <div className="mx-auto max-w-360 px-5 py-8 sm:px-8 lg:px-12">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-400">
          <span>Home</span>
          <span>/</span>
          <span className="font-medium capitalize text-slate-700">
            {category}
          </span>
        </div>

        {/* Page Heading */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Find your favourites
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {category}
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            Explore our collection of products picked for your everyday needs.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 sm:w-72">
            <Search className="h-4 w-4 shrink-0 text-slate-400" />
            <span className="text-sm text-slate-400">Search products...</span>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </div>

            <div className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-600">
              Sort by: Recommended
            </div>

            <div className="hidden h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:flex">
              <LayoutGrid className="h-4 w-4" />
            </div>

            <div className="hidden h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-400 sm:flex">
              <List className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-900">
              {products.length}
            </span>{" "}
            products
          </p>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-2 items-stretch gap-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <TrendingCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-75 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <Search className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-lg font-semibold text-slate-800">
              No products to show
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
              There are no products in this collection right now. Check back
              soon for new arrivals.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
