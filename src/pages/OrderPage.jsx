import React, { useContext } from "react";
import {
  Package,
  ShoppingBag,
  ArrowRight,
  ShoppingCart,
  CalendarDays,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { MyStore } from "../context/MyContext";
import { useNavigate } from "react-router";

const OrdersPage = () => {
  const { orderData } = useContext(MyStore);

  const totalSpent = orderData.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalItems = orderData.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  let navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-2 text-sm text-slate-400">
            <span>Home</span>
            <span>/</span>
            <span className="font-medium text-blue-600">My Orders</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            My Orders
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Keep track of the products you've purchased.
          </p>
        </div>

        {/* Summary */}
        <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Package size={21} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Products Ordered</p>
                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  {totalItems}
                </h2>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <ShoppingBag size={21} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Total Spent</p>
                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  ${totalSpent.toFixed(2)}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5 sm:px-6">
            <div>
              <h2 className="font-semibold text-slate-900">
                Purchased Products
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                {orderData.length} different products
              </p>
            </div>
            <Package className="text-blue-600" size={22} />
          </div>

          {orderData.length > 0 ? (
            <div className="divide-y divide-slate-100">
              {orderData.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:px-6"
                >
                  {/* Product Image */}
                  <div className="flex h-28 w-full shrink-0 items-center justify-center rounded-xl bg-slate-50 p-4 sm:h-28 sm:w-28">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="min-w-0 flex-1">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
                      {item.category}
                    </p>

                    <h3 className="line-clamp-2 font-semibold leading-6 text-slate-800">
                      {item.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                      <span>Quantity: {item.quantity}</span>
                      <span>Price: ${item.price.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                    <p className="text-xs text-slate-400">Item Total</p>
                    <p className="text-lg font-bold text-slate-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center px-5 py-16 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <ShoppingCart size={28} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                No order yet
              </h3>

              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                You haven't purchased anything yet. Explore our store and find
                something you'll love.
              </p>
            </div>
          )}
        </section>

        {/* Bottom Note */}
        {orderData.length > 0 && (
          <div className="mt-6 flex flex-col justify-between gap-3 rounded-xl border border-blue-100 bg-blue-50/60 p-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <CalendarDays className="text-blue-600" size={20} />
              <p className="text-sm text-slate-600">
                Thanks for shopping with SkyMart!
              </p>
            </div>
            <button
              onClick={() => {
                navigate("/main");
              }}
              className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
            >
              Explore Products <ArrowRight size={16} />
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default OrdersPage;
