import React from "react";
import {
  Package,
  Truck,
  CheckCircle2,
  Clock3,
  XCircle,
  ArrowRight,
  ShoppingBag,
  MapPin,
} from "lucide-react";
import Navbar from "../components/Navbar";

const orders = [
  {
    id: "SKY-2026-001",
    date: "November 01, 2026",
    status: "Delivered",
    total: 1299,
    items: [
      {
        name: "Wireless Bluetooth Headphones",
        category: "Electronics",
        price: 1299,
        quantity: 1,
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      },
    ],
  },
  {
    id: "SKY-2026-002",
    date: "October 28, 2026",
    status: "Shipped",
    total: 2499,
    items: [
      {
        name: "Mens Casual Premium Slim Fit T-Shirts",
        category: "Men's Clothing",
        price: 2499,
        quantity: 1,
        image:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      },
    ],
  },
  {
    id: "SKY-2026-003",
    date: "October 24, 2026",
    status: "Processing",
    total: 599,
    items: [
      {
        name: "Gold Plated Bracelet",
        category: "Jewelery",
        price: 599,
        quantity: 1,
        image:
          "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      },
    ],
  },
];

const statusStyles = {
  Delivered: {
    icon: CheckCircle2,
    color: "text-emerald-600",
    background: "bg-emerald-50",
  },
  Shipped: {
    icon: Truck,
    color: "text-blue-600",
    background: "bg-blue-50",
  },
  Processing: {
    icon: Clock3,
    color: "text-amber-600",
    background: "bg-amber-50",
  },
  Cancelled: {
    icon: XCircle,
    color: "text-red-600",
    background: "bg-red-50",
  },
};

const OrdersPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-8">
            <div className="mb-2 flex items-center gap-2 text-sm text-slate-500">
              <ShoppingBag size={16} />
              <span>Home</span>
              <span>/</span>
              <span className="font-medium text-blue-600">My Orders</span>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              My Orders
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Track, manage and view your recent purchases.
            </p>
          </div>

          {/* Order Summary */}
          <div className="mb-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-medium text-slate-500">Total Orders</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">03</p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-medium text-slate-500">Delivered</p>
              <p className="mt-2 text-2xl font-bold text-emerald-600">01</p>
            </div>

            <div className="col-span-2 rounded-xl border border-slate-200 bg-white p-4 sm:col-span-1">
              <p className="text-xs font-medium text-slate-500">In Progress</p>
              <p className="mt-2 text-2xl font-bold text-blue-600">02</p>
            </div>
          </div>

          {/* Orders */}
          <div className="space-y-5">
            {orders.map((order) => {
              const StatusIcon = statusStyles[order.status].icon;

              return (
                <div
                  key={order.id}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                >
                  {/* Order Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 bg-slate-50/70 px-5 py-4">
                    <div className="flex flex-wrap gap-x-8 gap-y-3">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          Order ID
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-800">
                          {order.id}
                        </p>
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          Order Date
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-700">
                          {order.date}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${statusStyles[order.status].background} ${statusStyles[order.status].color}`}
                    >
                      <StatusIcon size={14} />
                      {order.status}
                    </div>
                  </div>

                  {/* Products */}
                  <div className="divide-y divide-slate-100 px-5">
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-wrap items-center gap-4 py-5"
                      >
                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-slate-50 p-2">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-contain"
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-slate-800">
                            {item.name}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {item.category}
                          </p>
                          <p className="mt-2 text-xs text-slate-500">
                            Quantity: {item.quantity}
                          </p>
                        </div>

                        <p className="text-sm font-bold text-slate-900">
                          ₹{item.price.toLocaleString("en-IN")}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Order Footer */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 px-5 py-4">
                    <div>
                      <p className="text-xs text-slate-500">Total Amount</p>
                      <p className="mt-1 text-lg font-bold text-slate-900">
                        ₹{order.total.toLocaleString("en-IN")}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <button className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50">
                        View Details
                      </button>
                      {order.status === "Delivered" && (
                        <button className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700">
                          Buy Again <ArrowRight size={14} />
                        </button>
                      )}
                      {order.status === "Shipped" && (
                        <button className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-700">
                          <MapPin size={14} /> Track Order
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Continue Shopping */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-blue-100 bg-blue-50/60 p-5 sm:flex-row">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Looking for something else?
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Explore more products from SkyMart.
              </p>
            </div>

            <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
              Continue Shopping <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;
