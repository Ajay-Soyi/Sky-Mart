import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import {
  Sparkles,
  UserRound,
  Mail,
  LockKeyhole,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { MyStore } from "../context/MyContext";

const Signup = () => {
  let {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const { setRegisteredUsers, registeredUsers } = useContext(MyStore);

  const formSubmit = (data) => {
    const { confirmPassword, ...formData } = data;
    // make a use state , then store form data there , then store it in local storage.
    const tempRegisteredUsers = [
      ...registeredUsers,
      { ...formData, id: nanoid() },
    ];
    console.log(tempRegisteredUsers);
    setRegisteredUsers(tempRegisteredUsers);
    localStorage.setItem(
      "registeredUsers",
      JSON.stringify(tempRegisteredUsers),
    );
    reset();
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-slate-50 text-slate-800">
      {/* Top-left Logo */}
      <a
        href="/"
        className="absolute left-5 top-5 z-10 flex items-center gap-2 sm:left-8 sm:top-6"
      >
        <Sparkles className="h-8 w-8 text-blue-600" strokeWidth={2.8} />
        <span className="text-2xl font-black tracking-tight text-[#102e59]">
          SKY MART
        </span>
      </a>

      <main className="mx-auto flex w-full max-w-6xl flex-1 items-center justify-center px-5 py-20 sm:px-8 sm:py-24">
        <div className="w-full max-w-2xl">
          {/* Heading */}
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Create your account
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              A few details, and you’re ready to start shopping.
            </p>
          </div>

          {/* Signup Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="h-1.5 bg-blue-600" />

            <div className="p-5 sm:p-8">
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-slate-900">
                  Your details
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Enter your information below.
                </p>
              </div>

              <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      First name
                    </label>

                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-3.5 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                      <UserRound
                        size={17}
                        className="shrink-0 text-slate-400"
                      />
                      <input
                        {...register("firstName", {
                          required: "First name is required",
                          pattern: {
                            value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                            message: "Name can contain only letters and spaces",
                          },
                        })}
                        id="firstName"
                        type="text"
                        placeholder="First name"
                        className="w-full min-w-0 bg-transparent py-3 text-sm outline-none placeholder:text-slate-400"
                      />
                    </div>
                    {errors.firstName && (
                      <small className="text-red-500">
                        {errors.firstName.message}
                      </small>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Last name
                    </label>

                    <input
                      {...register("lastName", {
                        required: "Last name is required",
                        pattern: {
                          value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                          message: "Name can contain only letters and spaces",
                        },
                      })}
                      id="lastName"
                      type="text"
                      placeholder="Last name"
                      className="w-full rounded-lg border border-slate-200 px-3.5 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                  {errors.lastName && (
                    <small className="text-red-500">
                      {errors.lastName.message}
                    </small>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email address
                  </label>

                  <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-3.5 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
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
                      placeholder="you@example.com"
                      className="w-full min-w-0 bg-transparent py-3 text-sm outline-none placeholder:text-slate-400"
                    />
                  </div>
                  {errors.email && (
                    <small className="text-red-500">
                      {errors.email.message}
                    </small>
                  )}
                </div>

                {/* Password Fields */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Password
                    </label>

                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-3.5 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                      <LockKeyhole
                        size={17}
                        className="shrink-0 text-slate-400"
                      />
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
                        placeholder="Create password"
                        className="w-full min-w-0 bg-transparent py-3 text-sm outline-none placeholder:text-slate-400"
                      />
                    </div>
                    {errors.password && (
                      <small className="text-red-500">
                        {errors.password.message}
                      </small>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="confirmPassword"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Confirm password
                    </label>

                    <div className="flex items-center gap-3 rounded-lg border border-slate-200 px-3.5 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                      <LockKeyhole
                        size={17}
                        className="shrink-0 text-slate-400"
                      />
                      <input
                        {...register("confirmPassword", {
                          required: "Please confirm your password",
                          validate: (value) => {
                            return (
                              value === getValues("password") ||
                              "Passwords do not match"
                            );
                          },
                        })}
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm password"
                        className="w-full min-w-0 bg-transparent py-3 text-sm outline-none placeholder:text-slate-400"
                      />
                    </div>
                    {errors.confirmPassword && (
                      <small className="text-red-500">
                        {errors.confirmPassword.message}
                      </small>
                    )}
                  </div>
                </div>

                <p className="text-xs leading-5 text-slate-500">
                  Use 8+ characters, including uppercase and lowercase letters,
                  a number, and a special character.
                </p>

                {/* Terms */}
                <label className="flex items-start gap-2.5 text-sm leading-5 text-slate-600">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 shrink-0 accent-blue-600"
                  />
                  <span>
                    I agree to the{" "}
                    <a href="#" className="font-medium text-blue-600">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="font-medium text-blue-600">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Create account
                  <ArrowRight size={17} />
                </button>
              </form>

              {/* Login Link */}
              <p className="mt-5 text-center text-sm text-slate-500">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-semibold text-blue-600 hover:text-blue-700"
                >
                  Sign in
                </a>
              </p>

              {/* Benefits */}
              <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 border-t border-slate-100 pt-4">
                <span className="flex items-center gap-1.5 text-xs text-slate-500">
                  <CheckCircle2 size={14} className="text-blue-600" />
                  Easy shopping
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-500">
                  <CheckCircle2 size={14} className="text-blue-600" />
                  Everything in one place
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Signup;
