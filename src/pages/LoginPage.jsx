import React from "react";
import {
  Sparkles,
  ShoppingBag,
  ArrowRight,
  Mail,
  LockKeyhole,
  Eye,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { useLogin } from "../hooks/useLoginHooks";

const Login = () => {
  const {
    loginFormSubmit,
    register,
    handleSubmit,
    reset,
    setError,
    errors,
    navigate,
  } = useLogin();

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-800">
      {/* Main */}
      <main className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-5 py-8 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-6">
        <a
          href="/"
          className="absolute left-5 top-5 z-10 flex items-center gap-2 sm:left-8 sm:top-6"
        >
          <Sparkles className="h-8 w-8 text-blue-600" strokeWidth={2.8} />
          <span className="text-2xl font-black tracking-tight text-[#102e59]">
            SKY MART
          </span>
        </a>
        {/* Store introduction */}
        <section className="mx-auto w-full max-w-lg lg:mx-0">
          <div className="mb-5 inline-flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold tracking-wide text-blue-700">
            <ShoppingBag size={15} />
            YOUR EVERYDAY STORE
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Good products.
            <br />
            <span className="text-blue-600">Fair prices.</span>
          </h1>

          <p className="mt-4 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
            Discover everyday essentials, explore new finds, and shop for the
            things that make life a little easier.
          </p>

          {/* Category links */}
          <div className="mt-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Explore the store
            </p>

            <div className="flex flex-wrap gap-2">
              {["Electronics", "Clothing", "Accessories"].map((category) => (
                <a
                  key={category}
                  href="/products"
                  className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>

          {/* Trust details */}
          <div className="mt-8 grid grid-cols-2 gap-5 border-t border-slate-200 pt-6 sm:grid-cols-3">
            <div className="flex items-start gap-2.5">
              <Truck size={19} className="mt-0.5 shrink-0 text-blue-600" />
              <div>
                <p className="text-xs font-semibold text-slate-800">
                  Easy delivery
                </p>
                <p className="mt-1 text-xs text-slate-500">To your doorstep</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <ShieldCheck
                size={19}
                className="mt-0.5 shrink-0 text-blue-600"
              />
              <div>
                <p className="text-xs font-semibold text-slate-800">
                  Secure shopping
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Shop with confidence
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Login form */}
        <section className="mx-auto w-full max-w-md lg:ml-auto">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:p-8">
            <div className="mb-7">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <ShoppingBag size={21} />
              </div>

              <p className="text-xs font-bold tracking-widest text-blue-600">
                WELCOME BACK
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Sign in to your account
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Enter your details to continue shopping.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(loginFormSubmit)}
              className="space-y-5"
            >
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Email address
                </label>

                <div className="flex h-11 items-center gap-3 rounded-lg border border-slate-300 px-3.5 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                  <Mail size={17} className="shrink-0 text-slate-400" />
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />
                </div>
                {errors.email && (
                  <small className="text-red-500">{errors.email.message}</small>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-slate-700"
                  >
                    Password
                  </label>

                  <p
                    onClick={() => {
                      navigate("/forgot-password");
                    }}
                    className="text-xs font-medium text-blue-600 hover:text-blue-700 cursor-pointer"
                  >
                    Forgot password?
                  </p>
                </div>

                <div className="flex h-11 items-center gap-3 rounded-lg border border-slate-300 px-3.5 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                  <LockKeyhole size={17} className="shrink-0 text-slate-400" />
                  <input
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message:
                          "Use 8+ characters, including uppercase and lowercase letters, a number, and a special character.",
                      },
                    })}
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />
                  <button
                    type="button"
                    aria-label="Show password"
                    className="shrink-0 text-slate-400 transition hover:text-slate-700"
                  >
                    <Eye size={17} />
                  </button>
                </div>
                {errors.password && (
                  <small className="text-red-500">
                    {errors.password.message}
                  </small>
                )}
                {errors.root && (
                  <small className="text-red-500">{errors.root.message}</small>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-[0.99]"
              >
                Sign in <ArrowRight size={16} />
              </button>
            </form>

            <div className="mt-6 border-t border-slate-100 pt-5 text-center">
              <p className="text-sm text-slate-500">
                New to SkyMart?{" "}
                <a
                  href="/signup"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Create an account
                </a>
              </p>
            </div>
          </div>

          <p className="mt-4 text-center text-xs leading-5 text-slate-400">
            By signing in, you agree to our{" "}
            <a href="/terms" className="underline underline-offset-2">
              Terms
            </a>{" "}
            and{" "}
            <a href="/privacy" className="underline underline-offset-2">
              Privacy Policy
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
};

export default Login;
