/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable spaced-comment */
import React from "react";
import "./DisplayProduct.css";
import { Link } from "react-router-dom";

function DisplayProduct({ products }) {
  /* const findId = products.map(e => e_id);*/
  //console.log(product.product_name);
  return (
    products && (
      <div className="productCard">
        {products.map((element) => (
          // eslint-disable-next-line no-underscore-dangle
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
