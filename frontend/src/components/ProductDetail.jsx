import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import ProductContext from "../contexts/ProductContext";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { oneProduct } = useContext(ProductContext);

  return oneProduct ? (
    <div className="result">
      <h1>{oneProduct.product_name}</h1>
      <div className="imgProduct">
        <img src={oneProduct.image_front_url} alt="Product" />
      </div>
      <p
        dangerouslySetInnerHTML={{
          __html:
            oneProduct.ingredients_text_with_allergens_fr ??
            "Pas d'ingrédient communiqué",
        }}
      />
      {oneProduct.nutriscore_grade && (
        <img
          src={`https://static.openfoodfacts.org/images/attributes/nutriscore-${oneProduct.nutriscore_grade}.svg`}
          alt="Nutriscore"
        />
      )}
    </div>
  ) : (
    <Navigate to="/" />
  );
}
