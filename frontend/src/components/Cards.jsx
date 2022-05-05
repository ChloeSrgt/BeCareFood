/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import "./Cards.css";
import Card from "@components/Card";
import ProductContext from "../contexts/ProductContext";
import ArrowTop from "./ArrowTop";

function Cards() {
  const { products } = useContext(ProductContext);

  return (
    products && (
      <div className="productCard">
        {products.map((element) => (
          <Card key={element._id} product={element} />
        ))}
        {products.length > 0 && <ArrowTop />}
      </div>
    )
  );
}

export default Cards;
