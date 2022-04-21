import React from "react";

function DisplayProduct({ product }) {
  return (
    product && (
      <div className="productCard">
        {product.map((element, index) => (
          <li key={element._id}>
            <img src={element.image_front_small_url} alt="Product" />
            {index}: {element.product_name}
          </li>
        ))}
      </div>
    )
  );
}

export default DisplayProduct;
