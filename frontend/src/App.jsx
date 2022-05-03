/* eslint-disable import/no-unresolved */
import { Route, Routes } from "react-router-dom";
import React, { useMemo } from "react";
import Home from "@pages/Home";
import Contact from "@pages/Contact";
import Header from "@components/Header";
import Footer from "@components/Footer";
import "./App.css";
import ProductName from "@components/ProductName";
import ProductContext from "./context";

function App() {
  const [product, setProduct] = React.useState(null);
  const value = useMemo(() => ({ product, setProduct }), [product, setProduct]);

  return (
    <>
      <Header />
      <ProductContext.Provider value={value}>
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
