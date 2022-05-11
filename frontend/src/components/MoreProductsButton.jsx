import axios from "axios";
import { useState, useContext } from "react";
import ProductContext from "../contexts/ProductContext";
import Loading from "./Loading";
import "./MoreProductsButton.css";

function MoreProductsButton() {
  const { searchValue, setProducts } = useContext(ProductContext);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const getPage = () => {
    setIsLoading(true);
    const newPage = page + 1;
    setPage(page + 1);
    axios
      .get(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchValue}+bio&json=true&page=${newPage}`
      )
      .then((response) => response.data)
      .then((data) => {
        setIsLoading(false);
        setProducts((prod) => [...prod, ...data.products]);
      });
    setPage(page + 1);
  };

  return (
    <div>
      <button className="morebutton" type="button" onClick={getPage}>
        Voir + de produits
      </button>
      {isLoading && <Loading />}
    </div>
  );
}

export default MoreProductsButton;
