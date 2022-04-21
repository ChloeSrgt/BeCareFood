import "./SearchBar.css";
import axios from "axios";
import React, { useState } from "react";
import DisplayProduct from "./DisplayProduct";

function SearchBar() {
  const [product, setProduct] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const getProduct = () => {
    axios
      .get(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchValue}+bio&json=true`
      )
      .then((response) => response.data)
      .then((data) => {
        setProduct(data.products);
      });
  };

  return (
    <div className="App">
      <h1>Produits</h1>
      <form className="search">
        <input
          type="text"
          placeholder="Rechercher..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <img src="src/assets/search.png" alt="loupe" />
      </form>
      <button type="button" onClick={getProduct}>
        Get a product
      </button>
      <DisplayProduct product={product} />
    </div>
  );
}

export default SearchBar;
