/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductContext from "../contexts/ProductContext";

export default function Card({ product }) {
  const { setOneProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const goToProduct = (prod) => {
    setOneProduct(prod);
    navigate(`/search/${product._id}`);
  };

  return (
    <li>
      <img
        className="productImg"
        src={product.image_front_small_url}
        alt="Product"
      />
      <p>
        <a
          href="#"
          onClick={() => {
            goToProduct(product);
          }}
        >
          {product.brands} - {product.product_name}
        </a>
      </p>
    </li>
  );
}
