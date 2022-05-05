/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import axios from "axios";
import "./SearchBar.css";
// import { getProduct } from "@components/AppelAPI";
import { useContext, useState } from "react";
import ProductContext from "../contexts/ProductContext";
import Loading from "./Loading";
import NotFound from "./NotFound";

function SearchBar() {
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const { setProducts, searchValue, setSearchValue } =
    useContext(ProductContext);

  const getProduct = () => {
    setIsLoading(true);
    setProducts([]);
    setIsNotFound(false);

    axios
      .get(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchValue}+bio&json=true&page=1`
      )
      .then((response) => response.data)
      .then((data) => {
        setIsLoading(false);
        if (data.products.length === 0) {
          setIsNotFound(true);
        }
        setProducts(data.products);
      });
  };

  return (
    <div className="App">
      <form className="search">
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <img src="src/assets/search.png" alt="loupe" onClick={getProduct} />
      </form>

      <button type="button" onClick={getProduct}>
        Get a product
      </button>
      {isNotFound && <NotFound />}
      {isLoading && <Loading />}

    </div>
  );
}

export default SearchBar;
