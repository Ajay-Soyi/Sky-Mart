import { useCallback, useContext } from "react";
import { MyStore } from "../context/MyContext";

export const useCart = () => {
  const { cartData, setCartData, orderData } = useContext(MyStore);

  const subtotal = useCallback(() => {
    return cartData.reduce((total, elem) => {
      return total + elem.price * elem.quantity;
    }, 0);
  }, [cartData]);

  const incrementCartItems = (id) => {
    const tempCartData = cartData.map((elem) => {
      if (elem.id === id) {
        return { ...elem, quantity: elem.quantity + 1 };
      }
      return elem;
    });
    setCartData(tempCartData);
    localStorage.setItem("cartData", JSON.stringify(tempCartData));
  };

  const decrementCartItems = (id) => {
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

  const removeCartItem = (id) => {
    const tempCartArr = cartData.filter((elem) => elem.id !== id);
    setCartData(tempCartArr);
    localStorage.setItem("cartData", JSON.stringify(tempCartArr));
  };

  const addOrderData = () => {
    const tempCartData = [...orderData, ...cartData];
    setCartData([]);
    localStorage.setItem("orderData", JSON.stringify(tempCartData));
    localStorage.setItem("cartData", JSON.stringify([]));
    toast.success("Order placed successfully!");
    navigate("/main/orders");
  };

  return {
    subtotal,
    incrementCartItems,
    decrementCartItems,
    removeCartItem,
    addOrderData,
  };
};
