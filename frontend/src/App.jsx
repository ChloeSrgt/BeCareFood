/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-unresolved */
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "@pages/Home";
import Contact from "@pages/Contact";
import Header from "@components/Header";
import Footer from "@components/Footer";
import "./App.css";
import ProductDetail from "@components/ProductDetail";
import ProductContext from "./contexts/ProductContext";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [oneProduct, setOneProduct] = useState();
  const [userFilter, setUserFilter] = useState([]);

  return (
    <>
      <Header />
      <ProductContext.Provider
        value={{
          products,
          setProducts,
          searchValue,
          setSearchValue,
          oneProduct,
          setOneProduct,
          userFilter,
          setUserFilter,
          filteredProducts,
          setFilteredProducts,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search/:idProduct" element={<ProductDetail />} />
        </Routes>
      </ProductContext.Provider>
      <Footer />
    </>
  );
}

export default App;
