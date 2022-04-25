import React from "react";
import "./DisplayProduct.css";
import { Link } from "react-router-dom";

function DisplayProduct({ products }) {
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
              <Link to={`/search/${element._id}`}>
                {element.brands} - {element.product_name}
              </Link>
            </p>
          </li>
        ))}
      </div>
    )
  );
}

export default DisplayProduct;
