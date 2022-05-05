import axios from "axios";
import { useState, useContext } from "react";
import ProductContext from "../contexts/ProductContext";
import "./MoreProductsButton.css";

function MoreProductsButton() {
  const { setProducts, searchValue } = useContext(ProductContext);
  const [page, setPage] = useState(1);

  const getPage = () => {
    const newPage = page + 1;

    axios
      .get(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchValue}+bio&json=true&page=${newPage}`
      )
      .then((response) => response.data)
      .then((data) => {
        setProducts((prod) => [...prod, ...data.products]);
      });
    setPage(page + 1);
  };

  return (
    <div>
      <button className="morebutton" type="button" onClick={getPage}>
        Voir + de produits
      </button>
    </div>
  );
}

export default MoreProductsButton;
