import React, { useContext } from "react";
import { Plus, Minus } from "lucide-react";
import { MyStore } from "../context/MyContext";

const QuantityBar = ({ id, quantity }) => {
  if (quantity <= 0) return null;

  const { cartData, setCartData } = useContext(MyStore);

  const incrementCartItems = () => {
    const tempCartData = cartData.map((elem) => {
      if (elem.id === id) {
        return { ...elem, quantity: elem.quantity + 1 };
      }
      return elem;
    });
    setCartData(tempCartData);
    localStorage.setItem("cartData", JSON.stringify(tempCartData));
  };

  const decrementCartItems = () => {
    let tempCartData = cartData.map((elem) => {
      if (elem.id === id) {
        return { ...elem, quantity: elem.quantity - 1 };
      }
      return elem;
    });
    tempCartData = tempCartData.filter((elem) => elem.quantity != 0);
    setCartData(tempCartData);
    localStorage.setItem("cartData", JSON.stringify(tempCartData));
  };

  return (
    <div className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-100/70 p-1">
      <button
        onClick={() => {
          decrementCartItems();
        }}
        aria-label="Decrease quantity"
        className="flex h-9 w-10 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm transition hover:bg-rose-50 hover:text-rose-600 active:scale-95"
      >
        <Minus className="h-4 w-4" />
      </button>

      <span className="min-w-10 text-center text-sm font-bold text-slate-800">
        {quantity}
      </span>

      <button
        onClick={() => {
          incrementCartItems();
        }}
        aria-label="Increase quantity"
        className="flex h-9 w-10 items-center justify-center rounded-lg bg-white text-slate-600 shadow-sm transition hover:bg-blue-50 hover:text-blue-600 active:scale-95"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
};

export default QuantityBar;
