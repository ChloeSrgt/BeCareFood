/* eslint-disable import/no-unresolved */
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Home from "@pages/Home";
import Contact from "@pages/Contact";
import Header from "@components/Header";
import Footer from "@components/Footer";
import "./App.css";
import ProductName from "@components/ProductName";
import ProductContext from "./contexts/ProductContext";

function App() {
  const [product, setProduct] = useState();
  const _setProduct = (prod) => {
    setProduct(prod);
  };

  return (
    <>
      <Header />
      {/* eslint-disable-next-line react/jsx-no-constructed-context-values */}
      <ProductContext.Provider value={{ product, _setProduct }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search/:idProduct" element={<ProductName />} />
        </Routes>
      </ProductContext.Provider>
      <Footer />
    </>
  );
}

export default App;
