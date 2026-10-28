import React, { useContext } from "react";
import { SlidersHorizontal, LayoutGrid, List, Search } from "lucide-react";
import TrendingCard from "../components/TrendingCard";
import { useParams } from "react-router";
import { MyStore } from "../context/MyContext";
import NavbarLinks from "../components/NavbarLinks";
import Navbar from "../components/Navbar";

const ProductsPage = () => {
  const { category } = useParams();
  const { filteredData } = useContext(MyStore);

  return (
    <div>
      <Navbar />

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
          {/* Results Count */}
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-900">
                {filteredData.length}
              </span>{" "}
              products
            </p>
          </div>
          {/* Products Grid */}
          {filteredData.length > 0 ? (
            <div className="grid grid-cols-2 items-stretch gap-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
              {filteredData.map((product) => (
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
    </div>
  );
};

export default ProductsPage;
