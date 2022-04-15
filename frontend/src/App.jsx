/* eslint-disable import/no-unresolved */
import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "@pages/Home";
import Contact from "@pages/Contact";
import Products from "@pages/Products";
import Search from "@pages/Search";
import Header from "@components/Header";
import Footer from "@components/Footer";
import WallPic from "./components/WallPic";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
