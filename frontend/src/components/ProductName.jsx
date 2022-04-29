import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import ProductContext from "../contexts/ProductContext";
import "./ProductName.css";

export default function ProductName() {
  const { product } = useContext(ProductContext);

  return product ? (
    <div className="result">
      <h1>{product.product_name}</h1>
      <div className="imgProduct">
        <img src={product.image_front_url} alt="Product" />
      </div>
      <p>
        {" "}
        {product.ingredients_text
          ? product.ingredients_text
          : "Pas d'ingrédient communiqué"}
      </p>
      {product.nutriscore_grade && (
        <img
          src={`https://static.openfoodfacts.org/images/attributes/nutriscore-${product.nutriscore_grade}.svg`}
          alt={product.product_name}
        />
      )}
    </div>
  ) : (
    <Navigate to="/" />
  );
}
