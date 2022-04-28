import React, { useContext } from "react";
import "./DisplayProduct.css";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../App";

function DisplayProduct({ products }) {
  const navigate = useNavigate();
  const { _setProduct } = useContext(ProductContext);
  const goToProduct = (product) => {
    _setProduct(product);
    navigate(`/search/${product._id}`);
  };

  return (
    products && (
      <div className="productCard">
        {products.map((element) => (
          <li key={element._id}>
            <img
              className="productImg"
              src={element.image_front_small_url}
              alt="Product"
            />
            <p>
              <a
                href="#"
                onClick={() => {
                  goToProduct(element);
                }}
              >
                {element.brands} - {element.product_name}
              </a>
            </p>
          </li>
        ))}
      </div>
    )
  );
}

export default DisplayProduct;
