/* eslint-disable import/no-unresolved */
import { Route, Routes } from "react-router-dom";
import React, { createContext, useState } from "react";
import Home from "@pages/Home";
import Contact from "@pages/Contact";
import DisplayProduct from "@components/DisplayProduct";
import Header from "@components/Header";
import Footer from "@components/Footer";
import "./App.css";
import ProductName from "@components/ProductName";

export const ProductContext = createContext(null);

function App() {
  const [product, setProduct] = React.useState(null);
  const _setProduct = (product) => {
    setProduct(product);
  };

  return (
    <>
      <Header />
      <ProductContext.Provider value={{ product, _setProduct }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<DisplayProduct />} />
          <Route path="/search/:idProduct" element={<ProductName />} />
        </Routes>
      </ProductContext.Provider>
      <Footer />
    </>
  );
}

export default App;
