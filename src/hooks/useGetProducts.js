import { useState, useEffect } from "react";
import products from "../data/products.json";

export function useGetProductsByCategory(categoryId) {
  const [productsFilteredByCategory, setProductsFilteredByCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductsByCategory = () => {
      const filtered = products.filter(
        (product) => product.categoryId === Number(categoryId)
      );
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(filtered);
        }, 2000);
      });
    };

    setLoading(true);
    getProductsByCategory()
      .then((response) => setProductsFilteredByCategory(response))
      .catch(() => console.log("Error al obtener los productos"))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return { productsFilteredByCategory, loading };
}
