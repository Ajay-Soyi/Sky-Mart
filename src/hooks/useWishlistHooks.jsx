import { useContext } from "react";
import { MyStore } from "../context/MyContext";
import { useNavigate } from "react-router";

export const useWishlist = () => {
  const { wishlistData, setWishlistData, setCartData, productsData, cartData } =
    useContext(MyStore);

  const removeProductWishlist = (id) => {
    const tempWishlistData = wishlistData.filter((elem) => elem.id !== id);
    setWishlistData(tempWishlistData);
    localStorage.setItem("wishlistData", JSON.stringify(tempWishlistData));
  };

  const clearAllWishlist = () => {
    setWishlistData([]);
    localStorage.setItem("wishlistData", JSON.stringify([]));
  };

  const addToCart = (id) => {
    const tempCartData = productsData.find((elem) => {
      return elem.id === id;
    });
    if (tempCartData["quantity"]) {
      tempCartData["quantity"] = tempCartData["quantity"] + 1;
    } else {
      tempCartData["quantity"] = 1;
    }

    setCartData((prev) => [...prev, tempCartData]);
    removeProductWishlist(id);
    toast.success("Item added to cart!");
  };

  let navigate = useNavigate();

  return {
    wishlistData,
    setWishlistData,
    setCartData,
    productsData,
    cartData,
    removeProductWishlist,
    clearAllWishlist,
    addToCart,
    navigate,
  };
};
