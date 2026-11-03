import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";
import { useParams } from "react-router";

export const MyStore = createContext();

export const MyContextProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cartData")) || [],
  );
  const [wishlistData, setWishlistData] = useState(
    JSON.parse(localStorage.getItem("wishlistData")) || [],
  );
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || null,
  );

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
    <MyStore.Provider
      value={{
        productsData,
        filteredData,
        setFilteredData,
        setSearchData,
        searchData,
        cartData,
        setCartData,
        wishlistData,
        setWishlistData,
        registeredUsers,
        setRegisteredUsers,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
