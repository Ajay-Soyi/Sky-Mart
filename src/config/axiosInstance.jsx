import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

axiosInstance.interceptors.response.use((response) => {
  const productsData = response.data.map((elem) => {
    let trending = false;
    if (elem.rating.rate >= 4.5) {
      trending = true;
    }
    return {
      ...elem,
      trending,
    };
  });
  return productsData;
});
