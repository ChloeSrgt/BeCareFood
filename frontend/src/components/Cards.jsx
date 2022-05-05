/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import "./Cards.css";
// eslint-disable-next-line import/no-unresolved
import Card from "@components/Card";
import ProductContext from "../contexts/ProductContext";
import MoreProductsButton from "./MoreProductsButton";
import ArrowTop from "./ArrowTop";
import MoreProductsButton from "./MoreProductsButton";

function Cards() {
  const { products } = useContext(ProductContext);

  return (
    products && (
      <div className="productCard">
        {products.map((element) => (
          <Card key={element._id} product={element} />
        ))}

        <MoreProductsButton />
        {products.length > 0 && <ArrowTop />}
        <MoreProductsButton />
      </div>
    )
  );
}

export default Cards;
