/* eslint-disable import/no-extraneous-dependencies */
import "./SearchBar.css";
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import DisplayProduct from "./DisplayProduct";

function SearchBar() {
  const [products, setProducts] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  const getProduct = () => {
    axios
      .get(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchValue}+bio&json=true&page=4`
      )
      .then((response) => response.data)
      .then((data) => {
        setProducts(data.products);
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
      <DisplayProduct products={products} />
    </div>
  );
}

export default SearchBar;
