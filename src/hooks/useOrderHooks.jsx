import { useContext } from "react";
import { MyStore } from "../context/MyContext";

export const useOrder = () => {
  const { orderData } = useContext(MyStore);

  const totalSpent = orderData.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalItems = orderData.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return {
    orderData,
    totalSpent,
    totalItems,
  };
};
