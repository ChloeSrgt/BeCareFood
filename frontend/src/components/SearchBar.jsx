import "./SearchBar.css";
import axios from "axios";
import React, { useState } from "react";
import DisplayProduct from "@components/DisplayProduct";

function SearchBar() {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);

  const getProduct = () => {
    axios
      .get(
        `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchValue}+bio&json=true&page=1`
      )
      .then((response) => response.data)
      .then((data) => {
        setProducts(data.products);
      });
  };

  const getPage = () => {
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
      <button type="button" onClick={getPage}>
        Voir + de produits
      </button>
    </div>
  );
}

export default SearchBar;
