import React from "react";
import {
  Sparkles,
  Search,
  UserRound,
  Heart,
  ShoppingCart,
  Menu,
} from "lucide-react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-360 items-center justify-between gap-5 px-5 py-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <div className="flex shrink-0 items-center gap-2">
          <Sparkles className="h-8 w-8 text-blue-600" strokeWidth={2.8} />
          <span className="text-2xl font-black tracking-tight text-[#102e59]">
            SKY MART
          </span>
        </div>

        {/* Search */}
        <div className="hidden max-w-xl flex-1 items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-3 transition md:flex">
          <Search className="h-5 w-5 text-slate-500" />
          <span className="text-sm text-slate-400">Search for anything...</span>
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden cursor-pointer items-center gap-2 text-sm font-medium hover:text-blue-600 sm:flex">
            <UserRound className="h-5 w-5" />
            <span>Account</span>
          </div>

          <div className="hidden cursor-pointer items-center gap-2 text-sm font-medium hover:text-blue-600 md:flex">
            <Heart className="h-5 w-5" />
            <span>Wishlist</span>
          </div>

          <div className="relative flex cursor-pointer items-center gap-2 hover:text-blue-600">
            <ShoppingCart className="h-6 w-6" />
            <span className="hidden text-sm font-medium sm:inline">Cart</span>
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
              0
            </span>
          </div>

          <Menu className="h-6 w-6 text-slate-800 sm:hidden" />
        </div>
      </div>

      {/* Mobile Search */}
      <div className="px-5 pb-4 md:hidden">
        <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3">
          <Search className="h-5 w-5 text-slate-500" />
          <span className="text-sm text-slate-400">Search for anything...</span>
        </div>
      </div>

      {/* Category Navigation */}
      <nav className="hidden border-t border-slate-100 md:block">
        <div className="mx-auto flex max-w-360 items-center gap-10 overflow-x-auto px-8 py-4 text-sm font-medium text-slate-600 lg:px-12">
          <span className="whitespace-nowrap hover:text-blue- cursor-pointer">
            Electronics
          </span>
          <span className="whitespace-nowrap hover:text-blue- cursor-pointer">
            Fashion
          </span>
          <span className="whitespace-nowrap hover:text-blue- cursor-pointer">
            Home & Living
          </span>
          <span className="whitespace-nowrap hover:text-blue- cursor-pointer">
            Beauty
          </span>
          <span className="whitespace-nowrap hover:text-blue- cursor-pointer">
            Sports
          </span>
          <span className="whitespace-nowrap hover:text-blue- cursor-pointer">
            Deals
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
