/* eslint-disable import/no-unresolved */
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "@pages/Home";
import Contact from "@pages/Contact";
import DisplayProduct from "@components/DisplayProduct";
import Header from "@components/Header";
import Footer from "@components/Footer";
import "./App.css";
import ProductName from "@components/ProductName";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<DisplayProduct />} />
        <Route path="/search/:idProduct" element={<ProductName />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
