import React from "react";
import {
  Sparkles,
  Mail,
  LockKeyhole,
  ArrowRight,
  ArrowLeft,
  Eye,
} from "lucide-react";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setError,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const [forgotPassUser, setForgotPassUser] = useState(null);
  const { registeredUsers, setRegisteredUsers } = useContext(MyStore);

  const forgetPasswordFormSubmit = (data) => {
    // write logic from here...

  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-5 py-10">
      {/* Logo */}
      <a
        href="/"
        className="absolute left-5 top-5 flex items-center gap-2 sm:left-8 sm:top-6"
      >
        <Sparkles className="h-8 w-8 text-blue-600" strokeWidth={2.8} />
        <span className="text-2xl font-black tracking-tight text-[#102e59]">
          SKY MART
        </span>
      </a>

      {/* Reset Password Card */}
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:p-8">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <LockKeyhole size={23} />
        </div>

        <p className="text-xs font-bold tracking-widest text-blue-600">
          ACCOUNT RECOVERY
        </p>

        <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
          Reset your password
        </h1>

        <p className="mt-3 text-sm leading-6 text-slate-500">
          Enter your registered email address and choose a new password for your
          SkyMart account.
        </p>

        <form
          onSubmit={handleSubmit(forgetPasswordFormSubmit)}
          className="mt-7 space-y-5"
        >
          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Registered email
            </label>

            <div className="flex h-11 items-center gap-3 rounded-lg border border-slate-300 px-3.5">
              <Mail size={17} className="shrink-0 text-slate-400" />
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                type="email"
                placeholder="you@example.com"
                className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
            {errors.email && (
              <small className="text-red-500">{errors.email.message}</small>
            )}
          </div>

          {/* New Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              New password
            </label>

            <div className="flex h-11 items-center gap-3 rounded-lg border border-slate-300 px-3.5">
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
                type="password"
                placeholder="Enter new password"
                className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
              <Eye size={17} className="shrink-0 text-slate-400" />
            </div>
            {errors.password && (
              <small className="text-red-500">{errors.password.message}</small>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Confirm new password
            </label>

            <div className="flex h-11 items-center gap-3 rounded-lg border border-slate-300 px-3.5">
              <LockKeyhole size={17} className="shrink-0 text-slate-400" />
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
                type="password"
                placeholder="Re-enter new password"
                className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
              <Eye size={17} className="shrink-0 text-slate-400" />
            </div>
            {errors.confirmPassword && (
              <small className="text-red-500">
                {errors.confirmPassword.message}
              </small>
            )}
          </div>

          <button
            type="submit"
            className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-[0.99]"
          >
            Update password <ArrowRight size={16} />
          </button>
        </form>

        <div className="mt-6 border-t border-slate-100 pt-5">
          <a
            href="/login"
            className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-600"
          >
            <ArrowLeft size={16} />
            Back to sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
