import React from "react";
import { Sparkles } from "lucide-react";

const TrendingSkeleton = () => {
  return (
    <div className="flex min-h-70 flex-col items-center justify-center rounded-2xl border border-slate-100 bg-slate-50/70 px-6 py-12 text-center">
      <div className="relative flex h-14 w-14 items-center justify-center">
        <div className="absolute inset-0 animate-spin rounded-full border-2 border-slate-200 border-t-blue-600" />

        <Sparkles className="h-6 w-6 text-blue-600" />
      </div>

      <h3 className="mt-5 text-base font-semibold text-slate-800">
        Finding something good...
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Loading the latest picks for you.
      </p>
    </div>
  );
};

export default TrendingSkeleton;
