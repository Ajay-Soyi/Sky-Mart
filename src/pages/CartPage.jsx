import React, { useCallback, useContext } from "react";
import {
  ShoppingCart,
  ArrowLeft,
  Plus,
  Minus,
  Trash2,
  Tag,
  ShieldCheck,
  Truck,
  LockKeyhole,
} from "lucide-react";
import Navbar from "../components/Navbar";
import { MyStore } from "../context/MyContext";

const CartPage = () => {
  const { cartData } = useContext(MyStore);

  const subtotal = useCallback(() => {
    return cartData.reduce((total, elem) => {
      return (total += elem.price);
    }, 0);
  }, [cartData]);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-slate-50/70 px-4 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-400">
            <span>Home</span>
            <span>/</span>
            <span className="font-medium text-slate-700">Shopping Cart</span>
          </div>

          {/* Heading */}
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
                Your shopping bag
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Shopping Cart
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Review your items before checking out.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <ShoppingCart className="h-4 w-4 text-blue-600" />
              {cartData.length} items in your cart
            </div>
          </div>

          {cartData.length > 0 ? (
            <div className="grid items-start gap-6 lg:grid-cols-[1fr_360px]">
              {/* Cart Items */}
              <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 sm:px-6">
                  <h2 className="font-semibold text-slate-900">Cart Items</h2>
                  <span className="text-sm text-slate-400">
                    {cartData.length} products
                  </span>
                </div>

                <div className="divide-y divide-slate-100">
                  {cartData.map((item) => (
                    <article
                      key={item.id}
                      className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:p-6"
                    >
                      {/* Image */}
                      <div className="flex h-28 w-full shrink-0 items-center justify-center rounded-xl bg-slate-50 p-4 sm:h-28 sm:w-28">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-contain"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex min-w-0 flex-1 flex-col justify-center">
                        <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-400">
                          {item.category}
                        </p>

                        <h3 className="line-clamp-2 font-semibold leading-6 text-slate-800">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm font-medium text-slate-900">
                          ${item.price.toFixed(2)}
                        </p>

                        <button className="mt-3 flex w-fit items-center gap-1.5 text-xs font-medium text-slate-400 transition hover:text-red-500">
                          <Trash2 className="h-3.5 w-3.5" />
                          Remove
                        </button>
                      </div>

                      {/* Quantity and Total */}
                      <div className="flex items-center justify-between gap-5 sm:flex-col sm:items-end sm:gap-4">
                        <div className="flex items-center rounded-xl border border-slate-200">
                          <button
                            aria-label="Decrease quantity"
                            className="flex h-9 w-9 items-center justify-center text-slate-500 transition hover:bg-slate-50"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>

                          <span className="min-w-8 text-center text-sm font-semibold text-slate-800">
                            {item.quantity}
                          </span>

                          <button
                            aria-label="Increase quantity"
                            className="flex h-9 w-9 items-center justify-center text-slate-500 transition hover:bg-slate-50"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <p className="text-base font-bold text-slate-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Continue Shopping */}
                <div className="border-t border-slate-100 px-5 py-4 sm:px-6">
                  <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700">
                    <ArrowLeft className="h-4 w-4" />
                    Continue Shopping
                  </button>
                </div>
              </section>

              {/* Order Summary */}
              <aside className="space-y-5">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                  <h2 className="text-lg font-semibold text-slate-900">
                    Order Summary
                  </h2>

                  <div className="mt-6 space-y-4 text-sm">
                    <div className="flex justify-between gap-4 text-slate-500">
                      <span>Subtotal</span>
                      <span className="font-medium text-slate-800">
                        ${subtotal().toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between gap-4 text-slate-500">
                      <span>Shipping</span>
                      <span className="font-medium text-emerald-600">Free</span>
                    </div>

                    <div className="flex justify-between gap-4 text-slate-500">
                      <span>Discount</span>
                      <span className="font-medium text-slate-800">$0.00</span>
                    </div>

                    <div className="border-t border-slate-100 pt-4">
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-semibold text-slate-900">
                          Total
                        </span>
                        <span className="text-2xl font-bold tracking-tight text-slate-900">
                          ${subtotal().toFixed(2)}
                        </span>
                      </div>
                      <p className="mt-1 text-right text-xs text-slate-400">
                        Inclusive of applicable taxes
                      </p>
                    </div>
                  </div>

                  {/* Promo Code */}
                  <div className="mt-6">
                    <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                      <Tag className="h-4 w-4 text-slate-400" />
                      Promo code
                    </label>

                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter code"
                        className="min-w-0 flex-1 rounded-xl border border-slate-200 px-3 py-3 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                      />
                      <button className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
                        Apply
                      </button>
                    </div>
                  </div>

                  {/* Checkout */}
                  <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm shadow-blue-200 transition hover:bg-blue-700">
                    Proceed to Checkout
                    <LockKeyhole className="h-4 w-4" />
                  </button>

                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                    Secure checkout
                  </div>
                </div>

                {/* Delivery Note */}
                <div className="flex gap-3 rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                  <Truck className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                  <div>
                    <h3 className="text-sm font-semibold text-slate-800">
                      Free standard shipping
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Your order will be carefully packed and delivered to your
                      doorstep.
                    </p>
                  </div>
                </div>
              </aside>
            </div>
          ) : (
            /* Empty Cart */
            <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <ShoppingCart className="h-7 w-7" />
              </div>

              <h2 className="mt-5 text-xl font-semibold text-slate-900">
                Your cart is empty
              </h2>

              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                Looks like you haven't added anything to your cart yet. Discover
                something you'll love.
              </p>

              <button className="mt-6 flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                Explore Products
                <ArrowLeft className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
