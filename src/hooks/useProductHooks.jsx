import { useContext, useEffect, useState } from "react";
import { MyStore } from "../context/MyContext";
import { useParams } from "react-router";

export const useProduct = () => {
  const { productsData, setFilteredData, filteredData } = useContext(MyStore);
  const [productsDetail, setProductsDetail] = useState(null);
  const { id } = useParams();
  const { category } = useParams();

  useEffect(() => {
    const tempProductDetail = productsData.find(
      (elem) => elem.id === Number(id),
    );

    setProductsDetail(tempProductDetail ?? null);
  }, [id, productsData]);

  useEffect(() => {
    const tempFilteredData = productsData.filter(
      (elem) => elem.category === category,
    );

    setFilteredData(tempFilteredData);
  }, [category, productsData]);

  return {
    productsData,
    productsDetail,
    setProductsDetail,
    category,
    setFilteredData,
    filteredData,
  };
};
