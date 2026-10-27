import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";

export const MyStore = createContext();

export const MyContextProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);

  const getProductsData = async () => {
    try {
      const response = await axiosInstance.get("/products");
      setProductsData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <MyStore.Provider value={{ productsData }}>{children}</MyStore.Provider>
  );
};
