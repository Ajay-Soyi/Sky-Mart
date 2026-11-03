import React, { useContext } from "react";
import {
  Heart,
  ShoppingCart,
  ArrowRight,
  Star,
  Sparkles,
  Truck,
  ShieldCheck,
  Headphones,
} from "lucide-react";

import AnnouncementBar from "../components/AnnouncementBar";
import CategoryCard from "../components/CategoryCard";
import TrendingCard from "../components/TrendingCard";
import { MyStore } from "../context/MyContext";
import TrendingSkeleton from "../components/TrendingSkeleton";
import NavbarLinks from "../components/NavbarLinks";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";
const categories = [
  {
    id: 1,
    name: "Tech & Gadgets",
    image:
      "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=700&auto=format&fit=crop&q=80",
    color: "bg-sky-50",
  },
  {
    id: 2,
    name: "Style Edit",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&auto=format&fit=crop&q=80",
    color: "bg-orange-50",
  },
  {
    id: 3,
    name: "Home Essentials",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&auto=format&fit=crop&q=80",
    color: "bg-emerald-50",
  },
  {
    id: 4,
    name: "Self Care",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=700&auto=format&fit=crop&q=80",
    color: "bg-pink-50",
  },
];

const benefits = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over ₹999",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: "Shop with confidence",
  },
  {
    icon: Headphones,
    title: "Here to Help",
    description: "We're always happy to help",
  },
];

function Home() {
  const { productsData } = useContext(MyStore);

  const trendingProducts = productsData.filter(
    (elem) => elem.trending === true,
  );
  let navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <NavbarLinks />
      <AnnouncementBar />

      <main className="mx-auto max-w-360 px-5 py-6 sm:px-8 lg:px-12">
        {/* Hero Section */}
        <section className="relative isolate min-h-100 overflow-hidden rounded-3xl bg-linear-to-br from-[#e8f4ff] via-[#d9ebff] to-[#b9d9ff] sm:min-h-112.5 lg:min-h-122.5">
          {/* Decorative Shapes */}
          <div className="absolute -right-20 -top-24 h-96 w-96 rounded-full bg-white/30 blur-3xl" />
          <div className="absolute bottom-0 right-[15%] h-48 w-48 rounded-full bg-blue-300/30 blur-3xl" />

          <div className="relative z-10 flex min-h-100 items-center sm:min-h-112.5 lg:min-h-122.5">
            <div className="max-w-2xl px-7 py-12 sm:px-10 lg:px-14 lg:py-16">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-blue-600 sm:text-sm">
                The everyday upgrade
              </p>

              <h1 className="max-w-xl text-4xl font-black leading-[1.08] tracking-tight text-[#10264b] sm:text-5xl lg:text-7xl">
                Find your next favourite thing.
              </h1>

              <p className="mt-6 max-w-md text-base leading-7 text-slate-600 sm:text-lg">
                Thoughtful picks for every part of your life. Discover products
                you'll love, at prices you'll appreciate.
              </p>

              <div
                onClick={() => {
                  navigate("/main/products/jewelery");
                }}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 cursor-pointer"
              >
                Explore collection
                <ArrowRight className="h-4 w-4" />
              </div>

              <div className="mt-8 flex items-center gap-3 text-sm text-slate-600">
                <div className="flex -space-x-2">
                  <div className="h-7 w-7 rounded-full border-2 border-white bg-orange-200" />
                  <div className="h-7 w-7 rounded-full border-2 border-white bg-blue-200" />
                  <div className="h-7 w-7 rounded-full border-2 border-white bg-emerald-200" />
                </div>
                <span>
                  <strong className="text-slate-900">Loved by shoppers</strong>{" "}
                  everywhere
                </span>
              </div>
            </div>

            {/* Hero Product Collage */}
            <div className="absolute inset-y-0 right-0 hidden w-[52%] items-center justify-center lg:flex">
              <div className="absolute right-[15%] top-[15%] h-72 w-64 rotate-6 rounded-[40px] bg-blue-500/15" />
              <div className="relative grid w-full max-w-lg grid-cols-2 items-center gap-5 p-8">
                <div className="translate-y-7 overflow-hidden rounded-3xl bg-white/80 p-3 shadow-xl shadow-blue-900/5 backdrop-blur-sm">
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80"
                    alt="Wireless headphones"
                    className="h-44 w-full rounded-2xl object-cover mix-blend-multiply"
                  />
                </div>
                <div className="-translate-y-6 overflow-hidden rounded-3xl bg-white/80 p-3 shadow-xl shadow-blue-900/5 backdrop-blur-sm">
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80"
                    alt="Red sneaker"
                    className="h-44 w-full rounded-2xl object-cover mix-blend-multiply"
                  />
                </div>
                <div className="col-span-2 mx-auto -mt-1 w-3/4 overflow-hidden rounded-3xl bg-white/80 p-3 shadow-xl shadow-blue-900/5 backdrop-blur-sm">
                  <img
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80"
                    alt="Minimal wristwatch"
                    className="h-32 w-full rounded-2xl object-cover mix-blend-multiply"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mt-12 sm:mt-16">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Browse your world
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Shop by category
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* Trending Products */}
        <section className="mt-14 sm:mt-20">
          <div className="mb-7 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                The good stuff
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                Trending right now
              </h2>

              <p className="mt-2 text-sm text-slate-500 sm:text-base">
                Handpicked products you'll want to keep.
              </p>
            </div>

            <div className="hidden items-center gap-2 pb-1 text-sm font-semibold text-blue-600 sm:flex">
              View all
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {trendingProducts.length == 0 ? (
              <TrendingSkeleton />
            ) : (
              trendingProducts.map((product) => (
                <TrendingCard key={product.id} product={product} />
              ))
            )}
          </div>
        </section>

        {/* Lifestyle Banner */}
        <section className="relative mt-14 overflow-hidden rounded-3xl bg-[#e8f2ff] sm:mt-20">
          <div className="absolute -right-12 -top-20 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />

          <div className="relative grid items-center md:grid-cols-2">
            <div className="px-7 py-10 sm:px-10 sm:py-14 lg:px-14">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Make room for better
              </p>

              <h2 className="mt-4 max-w-lg text-3xl font-black leading-tight tracking-tight text-[#10264b] sm:text-4xl lg:text-5xl">
                Little things.
                <br />
                Better living.
              </h2>

              <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600 sm:text-base">
                Everyday essentials, thoughtful upgrades, and little discoveries
                that make your day better.
              </p>

              <div className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#102e59] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                Discover more
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            <div className="relative h-64 overflow-hidden md:h-full md:min-h-87.5">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1000&auto=format&fit=crop&q=80"
                alt="Beautiful modern home interior"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Shopping Benefits */}
        <section className="my-14 grid grid-cols-1 gap-6 border-y border-slate-100 py-8 sm:grid-cols-3 sm:gap-4 sm:py-10">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="flex items-center justify-center gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-sm font-bold">{benefit.title}</h3>
                  <p className="mt-1 text-xs text-slate-500">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <footer className="bg-[#10213d] text-white">
        <div className="mx-auto max-w-360 px-5 py-12 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-7 w-7 text-blue-400" />
                <span className="text-xl font-black tracking-tight">
                  SKY MART
                </span>
              </div>

              <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
                Good finds, great prices, and everyday products worth
                discovering.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold">Explore</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <p>Electronics</p>
                <p>Fashion</p>
                <p>Home & Living</p>
                <p>Beauty & Care</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold">Customer Care</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <p>Contact Us</p>
                <p>Shipping Information</p>
                <p>Returns & Refunds</p>
                <p>Frequently Asked Questions</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold">Your Sky Mart</h3>
              <div className="mt-4 space-y-3 text-sm text-slate-400">
                <p>My Account</p>
                <p>My Orders</p>
                <p>My Wishlist</p>
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500 sm:flex sm:items-center sm:justify-between sm:text-left">
            <p>© 2026 Sky Mart. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">Made for better everyday shopping.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
