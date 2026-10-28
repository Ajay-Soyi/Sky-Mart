import React from "react";
import {
  UserRound,
  Package,
  MapPin,
  Heart,
  Settings,
  ChevronRight,
  Camera,
  Mail,
  Phone,
  ShieldCheck,
  LogOut,
} from "lucide-react";
import Navbar from "../components/Navbar";

const AccountPage = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          {/* Page Heading */}
          <div className="mb-8">
            <p className="text-sm font-medium text-blue-600">
              SKY MART / MY ACCOUNT
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              My Account
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Manage your profile, orders, and account preferences.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            {/* Sidebar */}
            <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <UserRound className="h-7 w-7" />
                </div>
                <div className="min-w-0">
                  <h2 className="truncate font-semibold text-slate-900">
                    Alex Morgan
                  </h2>
                  <p className="truncate text-sm text-slate-500">
                    alex@example.com
                  </p>
                </div>
              </div>

              <nav className="mt-5 space-y-1">
                {[
                  {
                    label: "Personal Information",
                    icon: UserRound,
                    active: true,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                      item.active
                        ? "bg-blue-600 text-white"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                    <ChevronRight className="ml-auto h-4 w-4" />
                  </div>
                ))}
              </nav>

              <button className="mt-5 flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50">
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            </aside>

            {/* Main Content */}
            <main className="space-y-6">
              {/* Profile Card */}
              <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                      Personal Information
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">
                      Update your personal details and profile.
                    </p>
                  </div>
                  <button className="w-fit rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50">
                    Edit Profile
                  </button>
                </div>

                <div className="mt-7 flex flex-col items-start gap-5 border-b border-slate-100 pb-7 sm:flex-row sm:items-center">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                    <UserRound className="h-9 w-9" />
                    <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-white">
                      <Camera className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      Alex Morgan
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Member since October 2026
                    </p>
                    <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Account verified
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="grid gap-6 pt-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Full Name
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-800">
                      Alex Morgan
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Email Address
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-800">
                      <Mail className="h-4 w-4 text-slate-400" />
                      alex@example.com
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Phone Number
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-800">
                      <Phone className="h-4 w-4 text-slate-400" />
                      +91 98765 43210
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      Default Address
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-sm font-medium text-slate-800">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      New Delhi, India
                    </div>
                  </div>
                </div>
              </section>

              {/* Quick Links */}
              <section>
                <h2 className="mb-4 text-lg font-semibold text-slate-900">
                  Your Activity
                </h2>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Package className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800">
                        My Orders
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        Track and manage purchases
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                      <Heart className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800">Wishlist</h3>
                      <p className="mt-1 text-sm text-slate-500">
                        Products saved for later
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
