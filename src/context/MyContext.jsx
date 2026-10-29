import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";
import { useParams } from "react-router";

export const MyStore = createContext();

export const MyContextProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [cartData, setCartData] = useState([]);
  const [wishlistData, setWishlistData] = useState([]);
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || null,
  );
  const { category } = useParams();

  const getProductsData = async () => {
    try {
      const response = await axiosInstance.get("/products");
      setProductsData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const tempFilteredData = productsData.filter(
      (elem) => elem.category === category,
    );
    setFilteredData(tempFilteredData);
  }, [category, productsData]);

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <MyStore.Provider
      value={{
        productsData,
        filteredData,
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
