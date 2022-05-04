import axios from "axios";
import { useState, useContext } from "react";
import ProductContext from "../contexts/ProductContext";

export const getPage = () => {
  const { setProducts, searchValue } = useContext(ProductContext);
  const [page, setPage] = useState(1);
  const newPage = page + 1;
  setPage(page + 1);
  axios
    .get(
      `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchValue}+bio&json=true&page=${newPage}`
    )
    .then((response) => response.data)
    .then((data) => {
      setProducts((prod) => [...prod, ...data.products]);
    });
};

export const getProduct = () => {
  const { setProducts, searchValue } = useContext(ProductContext);
  axios
    .get(
      `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchValue}+bio&json=true&page=1`
    )
    .then((response) => response.data)
    .then((data) => {
      setProducts(data.products);
    });
};
