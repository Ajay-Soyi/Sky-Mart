import React from "react";
import { Plus, Minus } from "lucide-react";

const QuantityBar = ({ quantity }) => {
  if (quantity <= 0) return null;

  return (
    <div className="flex w-full items-center justify-between overflow-hidden rounded-xl border border-slate-200 bg-white">
      <button
        onClick={onDecrease}
        aria-label="Decrease quantity"
        className="flex h-10 w-10 items-center justify-center text-slate-600 transition hover:bg-rose-50 hover:text-rose-600"
      >
        <Minus className="h-4 w-4" />
      </button>

      <span className="text-sm font-semibold text-slate-900">{quantity}</span>

      <button
        onClick={onIncrease}
        aria-label="Increase quantity"
        className="flex h-10 w-10 items-center justify-center text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
};

export default QuantityBar;
