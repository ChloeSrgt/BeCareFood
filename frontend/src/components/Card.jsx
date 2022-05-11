/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductContext from "../contexts/ProductContext";
import "./Card.css";
import plate from "../assets/plate.jpg";

export default function Card({ product }) {
  const { setOneProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const goToProduct = (prod) => {
    setOneProduct(prod);
    navigate(`/search/${product._id}`);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      className="ficheProd"
      onClick={() => {
        goToProduct(product);
      }}
    >
      <img
        className="productImg"
        src={
          product.image_front_small_url
            ? `${product.image_front_small_url}`
            : `${plate}`
        }
        alt="Product"
      />
      <p>
        <p className="infoprod">
          {" "}
          {product.ingredients_text_with_allergens_fr
            ? `${product.brands} - ${product.product_name}`
            : "Pas d'ingrédient communiqué"}
        </p>
      </p>
    </li>
  );
}
