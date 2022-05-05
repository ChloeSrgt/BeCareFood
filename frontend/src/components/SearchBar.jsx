/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import axios from "axios";
import "./SearchBar.css";
// import { getProduct } from "@components/AppelAPI";
import { useContext } from "react";
import ProductContext from "../contexts/ProductContext";

function SearchBar() {
  const { setProducts, searchValue, setSearchValue, setFilteredProducts } =
    useContext(ProductContext);

  const getProduct = () => {
    axios
      .get(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchValue}+bio&json=true&page=1`
      )
      .then((response) => response.data)
      .then((data) => {
        setProducts(data.products);
        setFilteredProducts(data.products);
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
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              getProduct();
            }
          }}
        />
        <img src="src/assets/search.png" alt="loupe" onClick={getProduct} />
      </form>
      <button type="button" onClick={getProduct}>
        Get a product
      </button>
    </div>
  );
}

export default SearchBar;
